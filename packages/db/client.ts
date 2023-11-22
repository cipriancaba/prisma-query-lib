// import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'

// const globalForPrisma = globalThis as unknown as {
//   prisma: typeof prismaWithAccelerate
// }

// export const prismaWithAccelerate = new PrismaClient({
//   log:
//     process.env.NODE_ENV === 'development'
//       ? [/*"query",*/ 'error', 'warn']
//       : ['error'],
// }).$extends(withAccelerate())

// export const prisma = globalForPrisma.prisma ?? prismaWithAccelerate

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: typeof prismaWithAccelerate;
};

export const prismaWithAccelerate = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? [/*"query",*/ "error", "warn"]
      : ["error"],
});

export const prisma = globalForPrisma.prisma ?? prismaWithAccelerate;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
