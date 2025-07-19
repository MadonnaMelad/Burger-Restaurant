import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';      
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import Category from './pages/Category';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import './App.css';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx'; 


function App() {
  return (
    <BrowserRouter basename="/Burger-Restaurant">
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/category/:slug" element={<Category />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
