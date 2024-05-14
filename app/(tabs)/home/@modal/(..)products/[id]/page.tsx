"use client";

import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { notFound, useRouter } from "next/navigation";

export default function Modal({ params }: { params: { id: string } }) {
  const router = useRouter();
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }

  const onCloseClick = () => {
    router.back();
  };

  return (
    <div className="absolute w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-60 left-0 top-0">
      <button onClick={onCloseClick} className="absolute top-5 right-5">
        <XMarkIcon className="size-10" />
      </button>
      <div className="max-w-screen-sm h-1/2 flex justify-center w-full">
        <div className="aspect-square bg-neutral-700 text-neutral-200 rounded-md flex justify-center items-center">
          <PhotoIcon className="h-28" />
        </div>
      </div>
    </div>
  );
}