import { useParams } from 'react-router-dom';
import { products, ProductCard } from '../components/Product';

const Products = () => {
    const { id } = useParams<"id">();
    
    if (id) {
        const productId = parseInt(id, 10);
        if (isNaN(productId)) {
            return <h2>Invalid Product ID</h2>;
        }
        const product = products.find((p) => p.id === productId);
        if (product) {
            product.is_single = true;
            return (
                <ProductCard key={product.id} product={product}/>
            )
        }
        else {
            return <h2>Product not found</h2>;
        }
    }
    return (
        <div>
            {
                products.map(
                    (product) => (
                        product.is_single = false,
                        <ProductCard key={product.id} product={product}/>
                    )
                )
            }
        </div>
    )
}
export default Products