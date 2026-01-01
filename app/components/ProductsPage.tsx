'use client'
import { useEffect, useState } from "react";
import { ProductType } from "../constants/constants"
import { ProductsGrid } from "./ProductsGrid";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

export const ProductsPage = () => {
    const [products, setProduct] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/allproducts`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {

            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

 
    return (

        <>
           {loading ? <ProductsGrid loading /> : <ProductsGrid products={products} /> }
        
        
        </>

        

    )
}
