import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, useParams, Link } from 'react-router-dom';

const App: React.FC = () => {

    return (
        <div>
            <header>
                <nav style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/shop/"}>Shop</Link>
                    <Link to={"/products/"}>Products</Link>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop/' element={<Shop />} />
                    <Route path='/products/' element={<Products />} />
                    <Route path='/products/:id' element={<Products />} />
                </Routes>
            </main>
            <footer>footer</footer>
        </div>
    );
}

const Home = () => {
    return <h2> Home</h2>
}

const Shop = () => {
    return <h2> Shop</h2>
}

const Products = () => {
    const products: Product[] = [
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
    
    const { id } = useParams<"id">();
    
    if (id) {
        const productId = parseInt(id, 10);
        if (isNaN(productId)) {
            return <h2>Invalid Product ID</h2>;
        }
        const product = products.find((p) => p.id === productId);
        if (product) {
            return (
                <ProductCard 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    id={product.id}
                    is_single={true}
                />
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
                        <ProductCard key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            id={product.id}
                        />
                    )
                )
            }
        </div>
    )
}

interface Product {
    name: string,
    id: number,
    price: string,
    image: string,
    is_single?: boolean,
}

// ProductCard component
const ProductCard = (props:Product) => {
    const { name, image, price, id, is_single } = props;

    if (is_single){
        return (
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", }}>
                <img src={image} alt={name} />
                <Link to={"/products/" + id} style={{marginTop: "30px"}}><h2>{name}</h2></Link>
                <p style={{ marginTop: "57px", }}>{price}</p>
            </div>
        );
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <img src={image} alt={name} />
            <Link to={"/products/" + id}><h2>{name}</h2></Link>
            <p style={{ marginTop: "27px", }}>{price}</p>
        </div>
    );
};


export default App;
