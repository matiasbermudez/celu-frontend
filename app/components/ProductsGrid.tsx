'use client'

import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { ProductType } from "../constants/constants";

type Props = {
  products?: ProductType[];
  loading?: boolean;
};

export const ProductsGrid = ({ products = [], loading }: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        : products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
    </section>
  );
};
