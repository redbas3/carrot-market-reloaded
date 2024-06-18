import ProductList from "@/components/product-list";
import db from "@/lib/db";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Prisma } from "@prisma/client";
import { unstable_cache as nextCache, revalidatePath } from "next/cache";
import Link from "next/link";

export const dynamic = "force-dynamic";

const getCashedProducts = nextCache(getInitialProducts, ["home-products"]);

async function getInitialProducts() {
  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    // take: 1,
    orderBy: {
      created_at: "desc",
    },
  });

  return products;
}

export type InitialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

export const revalidate = 60;

export default async function Products() {
  const initialProducts = await getCashedProducts();
  const revalidate = async () => {
    "use server";
    revalidatePath("/home");
  };
  return (
    <div className="relative min-h-screen">
      <ProductList initialProducts={initialProducts} />
      <Link
        href="/add-product"
        className="bg-orange-500 flex items-center justify-center rounded-full size-16 bottom-24 right-6 text-white transition-colors hover:bg-orange-400 absolute"
      >
        <PlusIcon className="size-10" />
      </Link>
    </div>
  );
}
