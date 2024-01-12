import { PrismaClient } from "@prisma/client";

const globalForPrism = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrism.prisma || new PrismaClient();

globalForPrism.prisma = prisma;

export default prisma;