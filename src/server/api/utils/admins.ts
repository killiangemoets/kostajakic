import { prisma } from "@/server/db";

export const isAdminExisting = async () => {
  const numberOfAdmins = await prisma.admin.count();
  return numberOfAdmins > 0;
};

export const getAdminById = async (id: string) => {
  return await prisma.admin.findUnique({
    where: { id },
  });
};
