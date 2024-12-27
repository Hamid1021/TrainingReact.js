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

interface PropsAttr {
    product: Product
}

// ProductCard component
export const ProductCard = (props: PropsAttr) => {
    const { product } = props;

    return (
        <tr>
            <td>
                <img src={product.image} alt={product.name} style={{height: 50}}/>
            </td>
            <td>
                {
                    product.is_single ? (
                        <h2 style={{fontSize:15}}>{product.name}</h2>
                    ) : (
                        <Link to={"/products/" + product.id}><h2 style={{fontSize:15}}>{product.name}</h2></Link>
                    )
                }
            </td>
            <td>
                <p>{product.price}</p>
            </td>
        </tr>
    );
};
