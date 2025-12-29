'use client'
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductType } from "../constants/constants";

export const ProductsComp = () => {
    const [products, setProduct] = useState<ProductType[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/allproducts`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
             
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            {products === null && <p>Cargando...</p>}

            {products?.length === 0 && <p>No hay productos</p>}

            {products && products.length > 0 && (
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}


        </div>
    )
}
