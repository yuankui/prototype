import { APIs } from "../types";
import { prisma } from "@/app/api/db";
import { shaped } from "@/common/shaped";

export const spacesEndpoints = shaped<APIs>()({
  "user/list": async () => {
    return prisma.user.findMany();
  },
  "user/get": async (id: string) => {
    return prisma.user.findUnique({
      where: { id },
    });
  },
});
