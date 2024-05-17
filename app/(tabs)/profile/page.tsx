import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import db from "@/lib/db";
import { Suspense } from "react";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

async function Username() {
  const user = await getUser();
  return <h1>{user?.username}</h1>;
}

export default async function Profile() {
  const logOut = async () => {
    "use server";

    const session = await getSession();
    await session.destroy();
    redirect("/");
  };
  return (
    <div>
      <Suspense fallback={"<h1>Weolcome!</h1>"}>
        <Username />
      </Suspense>
      <form action={logOut}>
        <button>Log out</button>
      </form>
    </div>
  );
}
