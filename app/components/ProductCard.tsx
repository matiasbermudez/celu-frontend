import Image from "next/image";
import { ProductType } from "../constants/constants";

export const ProductCard = ({ product }: { product: ProductType }) => {
  console.log("imagen de producto:", product.image);
  return (
    <article
      className="
        flex flex-col gap-3
        rounded-xl
        border border-white/10
        bg-[var(--color-card)]
        p-5
        transition
        hover:border-white/20
        hover:scale-[1.01]
        text-center
      "
    >
      <h3 className="text-lg font-semibold">
        {product.name}
      </h3>

      <Image
        src={`${product.image}`}
        alt={product.name}
        width={300}
        height={400}
      />
      <p className="text-sm text-[var(--color-muted)] line-clamp-3">
        {product.description}
      </p>

      {product.price && (
        <span className="mt-2 text-base font-medium text-[var(--color-primary)]">
          ${product.price}
        </span>
      )}
    </article>
  );
};
