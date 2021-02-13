import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/client";
import { prisma } from "./db";

export interface Context {
  prisma: PrismaClient;
}

export async function context({ req }) {
  return {
    session: await getSession({ req }),
    prisma,
  };
}
