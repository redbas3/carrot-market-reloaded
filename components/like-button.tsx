"use client";

import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon as OutlineHandThumbUpIcon } from "@heroicons/react/24/outline";
import { useOptimistic } from "react";
import { dislikePost, likePost } from "@/app/posts/[id]/actions";

interface LikeButtonProps {
  likeCount: number;
  isLiked: boolean;
  postId: number;
}

export default function LikeButton({ likeCount, isLiked, postId }: LikeButtonProps) {
  const [state, reducerFn] = useOptimistic({ likeCount, isLiked }, (previousState, payload) => ({
    likeCount: previousState.isLiked ? previousState.likeCount - 1 : previousState.likeCount + 1,
    isLiked: !previousState.isLiked,
  }));

  const onClick = async () => {
    reducerFn(undefined);

    if (state.isLiked) {
      await dislikePost(postId);
    }
    else {
      await likePost(postId);
    }
  }

  return <button onClick={onClick} className={`flex items-center gap-2 text-neutral-400 text-sm border border-neutral-400 rounded-full p-2  transition-colors ${state.isLiked
    ? "bg-orange-500 text-white border-orange-500"
    : "hover:bg-neutral-800"
    }`}>
    {state.isLiked ? <HandThumbUpIcon className="size-5" /> : <OutlineHandThumbUpIcon className="size-5" />}
    {state.isLiked ? <span>{state.likeCount}</span> : <span>공감하기 ({state.likeCount})</span>}
  </button>
}