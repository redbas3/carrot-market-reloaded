"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { productSchema } from "./schema";

export async function uploadProduct(formData: FormData) {
  const data = {
    // photo: formData.get("photo") as File,
    photo: formData.get("photo"),
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
  };

  //   if (!data.photo.type.startsWith("image/")) {
  //     return {
  //       error: "only image",
  //     };
  //   }
  //   if (data.photo.size > MAX_FILE_SIZE) {
  //     return {
  //       error: "over 5MB",
  //     };
  //   }

  //   if (data.photo instanceof File) {
  //     const photoData = await data.photo.arrayBuffer();
  //     await fs.appendFile(`./public/${data.photo.name}`, Buffer.from(photoData));

  //     data.photo = `/${data.photo.name}`;
  //   }

  const results = productSchema.safeParse(data);
  if (!results.success) {
    return results.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const product = await db.product.create({
        data: {
          title: results.data.title,
          description: results.data.description,
          price: results.data.price,
          photo: results.data.photo,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
      });
      redirect(`/products/${product.id}`);
      // redirect("/products");
    }
  }
}

export async function getUploadUrl() {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
}
