import { ProductType } from "../constants/constants";

export const ProductCard = ({ product }: { product: ProductType }) => {
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
      "
    >
      <h3 className="text-lg font-semibold">
        {product.name}
      </h3>

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
