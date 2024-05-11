"use client";

import { InitialProducts } from "@/app/(tabs)/products/page";
import ListProduct from "./list-product";
import { useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/products/actions";

interface ProductListProps {
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const onLoadMoreClick = async () => {
    setIsLoading(true);
    const newProducts = await getMoreProducts(page + 1);
    if (newProducts.length !== 0) {
      setPage(prev => prev + 1);
      setProducts((prev) => [...prev, ...newProducts]);
    }
    else {
      setLastPage(true);
    }
    setIsLoading(false);
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      {!lastPage ? <button
        onClick={onLoadMoreClick}
        disabled={isLoading}
        className="text-sm font-semibold rounded-md bg-orange-500 text-white px-3 py-2 mx-auto hover:opacity-90 active:scale-95"
      >
        {isLoading ? "로딩중" : "Load more"}
      </button> : null}
    </div>
  );
}
