import React from "react";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Products from './pages/Product';
import Blogs, { SingleBlogs } from "./pages/Blog";

const App = () => {
    return (
        <div>
            <header>
                <nav style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/shop/"}>Shop</Link>
                    <Link to={"/products/"}>Products</Link>
                    <Link to={"/blogs/"}>Blogs</Link>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop/' element={<Shop />} />
                    <Route path='/products/' element={<Products />} />
                    <Route path='/products/:id' element={<Products />} />
                    <Route path='/blogs/' element={<Blogs />} />
                    <Route path='/blogs/:id' element={<SingleBlogs />} />
                </Routes>
            </main>
            <footer>footer</footer>
        </div>
    );
}

export default App;
