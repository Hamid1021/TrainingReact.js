import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import Products from './components/Product';

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

export default App;
