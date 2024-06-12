import { PrismaClient } from "./generated/client";
import { concerts } from "./seeds/concerts";

const prisma = new PrismaClient();

async function main() {
  await prisma.concert.createMany({
    data: concerts,
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
