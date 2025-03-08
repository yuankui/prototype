import { prisma } from "@/app/api/db";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

export const getUsers = async () => {
  return prisma.user.findMany({});
};

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const createUser = async (name: string, email: string, password?: string) => {
  const data: any = { name, email };
  
  if (password) {
    data.password = await bcrypt.hash(password, 10);
  }
  
  return prisma.user.create({ data });
};

export const validatePassword = async (user: { password: string | null }, password: string) => {
  if (!user.password) return false;
  return bcrypt.compare(password, user.password);
};

export const createSession = async (userId: string) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7); // 7 days from now
  
  return prisma.session.create({
    data: {
      sessionToken: randomUUID(),
      userId,
      expires,
    },
  });
};

export const getSessionByToken = async (sessionToken: string) => {
  return prisma.session.findUnique({
    where: { sessionToken },
    include: { user: true },
  });
};

export const deleteSession = async (sessionToken: string) => {
  return prisma.session.delete({
    where: { sessionToken },
  });
};
