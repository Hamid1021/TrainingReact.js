import { useParams } from 'react-router-dom';
import { products, ProductCard } from '../components/Product';
import { useEffect, useState } from 'react';

const Products = () => {
    const { id } = useParams<{ id: string }>();

    if (id) {
        const productId = parseInt(id, 10);
        if (isNaN(productId)) {
            return <h2>Invalid Product ID</h2>;
        }
        const product = products.find((p) => p.id === productId);
        if (product) {
            product.is_single = true;
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProductCard key={product.id} Product={product}/>
                    </tbody>
                </table>
            );
        } else {
            return <h2>Product not found</h2>;
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    product.is_single = false,
                    <ProductCard key={product.id} Product={product} />
                ))}
            </tbody>
        </table>
    );
};
export default Products