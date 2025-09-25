import { PrismaClient } from "@prisma/client";

export const db =
    globalThis.__db__ || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalThis.__db__ = db;
}