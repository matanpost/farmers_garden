import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import ProductDetail from './pages/ProductsDetail';
import Navbar from './components/navbar/Navbar';
import { ShoppingCartProvider } from './context/CartContext';

function App() {
  return (
    <>
    <ShoppingCartProvider >
    <div className="header">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </ShoppingCartProvider>
    </>
  );
}

export default App;
