import { Link, useParams } from 'react-router-dom';

interface Product {
    name: string;
    id: number;
    price: string;
    image: string;
    is_single?: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: '$29.99',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Product 2',
        price: '$19.99',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        price: '$39.99',
        image: 'https://via.placeholder.com/150',
    },
];

interface PropsAttr{
    product:Product
}

// ProductCard component
export const ProductCard = (props:PropsAttr) => {
    const {product} = props
    
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "10px", }}>
            <img src={product.image} alt={product.name} />
            {
                product.is_single ?(
                    <h2 style={{marginTop: "50px"}}>{product.name}</h2>
                ) : (
                    <Link to={"/products/" + product.id} style={{marginTop: "30px"}}><h2>{product.name}</h2></Link>
                )
            }
            <p style={{ marginTop: "57px", }}>{product.price}</p>
        </div>
    );
};

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