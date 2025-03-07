import { prisma } from "@/app/api/db";

export const getUsers = async () => {
  return prisma.user.findMany({});
};

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const createUser = async (name: string, email: string) => {
  return prisma.user.create({
    data: {
      name,
      email,
    },
  });
};
