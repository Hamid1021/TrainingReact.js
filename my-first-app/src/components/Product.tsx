import { Link } from 'react-router-dom';

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
