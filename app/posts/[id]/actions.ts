"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { revalidateTag } from "next/cache";

export const likePost = async (postId: number) => {
  "use server";
  try {
    const session = await getSession();
    if (session.id === undefined) {
      return;
    }
    const post = await db.like.create({
      data: {
        postId,
        userId: session.id,
      },
    });

    revalidateTag(`like-status-${postId}`);
  } catch (e) {

  }
}

export const dislikePost = async (postId: number) => {
  "use server";
  try {
    const session = await getSession();
    if (session.id === undefined) {
      return;
    }
    const post = await db.like.delete({
      where: {
        id: {
          postId,
          userId: session.id,
        }
      },
    });

    revalidateTag(`like-status-${postId}`);
  } catch (e) {
  }
}