'use client'
import { ProductCard } from "./ProductCard";
import { ProductType } from "../constants/constants";

type Props = {
    products?: ProductType[] | null;
}

export const ProductsGrid = ({products } : Props) => {
 console.log("ProductsGrid received products:", products?.length);
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
            {products === null && <p>Cargando...</p>}

            {products?.length === 0 && <p>No hay productos</p>}

            {products && products.length > 0 && (
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}


        </section>
    )
}
