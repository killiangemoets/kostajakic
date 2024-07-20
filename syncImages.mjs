/* eslint-disable no-console */
import { PrismaClient } from "./src/prisma/generated/client/index.js";
import AWS from "aws-sdk";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const prisma = new PrismaClient();
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.join(__dirname, ".images");

const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;

async function uploadToS3(filePath, key) {
  const fileContent = fs.readFileSync(filePath);
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: fileContent,
  };

  return s3.upload(params).promise();
}

async function deleteFromS3(key) {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  return s3.deleteObject(params).promise();
}

async function syncImages() {
  try {
    // const files = fs.readdirSync(imagesDir);
    const files = fs.readdirSync(imagesDir).filter((file) => [".jpeg", ".jpg", ".png"].includes(path.extname(file).toLowerCase()));
    const imagesInDb = await prisma.image.findMany();

    // 1. Create a set of filenames from the database
    const dbImageNames = new Set(imagesInDb.map((image) => image.name));

    for (const file of files) {
      const name = path.basename(file, path.extname(file));
      const jpegPath = path.join(imagesDir, file);
      const webpPath = path.join(imagesDir, `webp/${name}.webp`);

      if (!dbImageNames.has(name)) {
        try {
          // Convert image to WebP
          await sharp(jpegPath).resize(800).toFormat("webp").webp({ quality: 95 }).toFile(webpPath);

          // Upload both images to S3
          const jpegUpload = await uploadToS3(jpegPath, `photos/${file}`);
          const webpUpload = await uploadToS3(webpPath, `photos/${name}.webp`);

          // Save the image details in the database
          await prisma.image.create({
            data: {
              name: name,
              best_quality_url: jpegUpload.Location,
              webp_url: webpUpload.Location,
            },
          });

          console.log(`Uploaded and added to DB and S3: ${name}`);
        } catch (uploadError) {
          console.error(`Failed to process and upload image: ${name}`, uploadError);
        }
      }
    }

    // 2. Remove images from DB and S3 that no longer exist in the directory
    const fileSet = new Set(files.map((file) => path.basename(file, path.extname(file))));
    for (const dbImage of imagesInDb) {
      if (!fileSet.has(dbImage.name)) {
        try {
          await prisma.image.delete({ where: { id: dbImage.id } });

          // Remove images from S3
          await deleteFromS3(`photos/${dbImage.name}.jpeg`);
          await deleteFromS3(`photos/${dbImage.name}.webp`);

          console.log(`Removed from DB and S3: ${dbImage.name}`);
        } catch (deleteError) {
          console.error(`Failed to delete image from DB and S3: ${dbImage.name}`, deleteError);
        }
      }
    }
  } catch (error) {
    console.error("Failed to sync images:", error);
  } finally {
    await prisma.$disconnect();
  }
}

syncImages()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
