import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

async function test() {
  // const user = await db.user.create({
  //   data: {
  //     username: "alice",
  //   },
  // });

  // const user = await db.user.findMany({
  //   where: {
  //     username: {
  //       contains: "aa",
  //     }
  //   },
  // });

  // const token = await db.sMSToken.create({
  //   data: {
  //     token: "212212",
  //     user: {
  //       connect: {
  //         id: 1
  //       }
  //     }
  //   }
  // })

  const token = await db.sMSToken.findUnique({
    where: {
      id: 1,
    },
    include: {
      user: true,
    },
  });
}

test();

export default db;
