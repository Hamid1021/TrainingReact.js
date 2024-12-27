import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';

const App: React.FC = () => {

    return (
        <div>
            <header>header</header>
            <main>
                <Routes>
                    <Route path='/' element={ <Home /> }/>
                    <Route path='/shop' element={ <Shop /> }/>
                    <Route path='/products/' element={ <Products /> }/>
                    <Route path='/products/:id' element={ <Products /> }/>
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
    const {id} = useParams<"id">();
    if (id) {
        return <h2> Pruduct {id}</h2>
    }
    return <h2> Pruducts</h2>
}


export default App;
