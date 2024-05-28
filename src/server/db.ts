import { env } from "@/env/server.mjs";
import { PrismaClient } from "@/prisma/generated/client";

// to fix the issue discribed here: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
// i.e. to avoid creating multiple instances of PrismaClient in development each time the server is reloaded

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
