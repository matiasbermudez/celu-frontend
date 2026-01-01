import Image from "next/image";
import { ProductType } from "../constants/constants";

type Props = {
  product: ProductType;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <article
      className="
        group
        flex flex-col
        rounded-2xl
        border border-white/10
        bg-[var(--color-card)]
        overflow-hidden
        transition-all
        hover:border-white/20
        hover:shadow-lg hover:shadow-black/30
      "
    >
      {/* Imagen */}
      <div className="relative w-full h-[20rem] bg-gradient-to-b from-white/5 to-black/40 rounded-lg">
        <Image
          src={`${product.image}`}
          alt={product.name}
          fill
          className="
      object-contain
      p-6
      transition-transform
      group-hover:scale-105
    "
          sizes="(min-width: 1024px) 250px, (min-width: 640px) 200px, 100vw"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-2 p-4 text-center">
        <h3 className="text-base font-semibold leading-tight">
          {product.name}
        </h3>

        <p className="text-sm text-[var(--color-muted)] line-clamp-2">
          {product.description}
        </p>

        {product.price && (
          <span className="mt-2 text-lg font-semibold text-[var(--color-primary)]">
            ${product.price}
          </span>
        )}

        <button
          className="
            mt-3
            rounded-lg
            border border-white/10
            py-2
            text-sm
            transition
            hover:bg-white/5
            hover:border-white/20
          "
        >
          Ver detalle
        </button>
      </div>
    </article>
  );
};
