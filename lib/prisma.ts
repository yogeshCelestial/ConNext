import { PrismaClient } from "@prisma/client";

const globalForPrism = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrism.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrism.prisma = prisma;

export default prisma;