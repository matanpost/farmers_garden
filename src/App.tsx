import React from "react";
import styles from "./App.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductsDetail";
import Navbar from "./components/navbar/Navbar";
import { ShoppingCartProvider } from "./context/CartContext";
import { ProductsContextProvider } from "./context/ProductsContext";
import * as slogensData from './data/Slogens.json';

type SlogenType = {
  text: string;
  image: string;
}

function App() {
  const slogensString = JSON.stringify(slogensData);
  const slogensArray: SlogenType[] = JSON.parse(slogensString).slogans
  const randomIndex = Math.floor(Math.random() * slogensArray.length);
  const { text, image } = slogensArray[randomIndex];

  return (
    <div className="">
      <ProductsContextProvider>
        <ShoppingCartProvider>
          <div className={`${styles.header} ${styles[image]}`}>
            <Navbar></Navbar>
            <div className={styles.textBox}>
              <h2 className={styles.slogenText}>{text}</h2>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </ShoppingCartProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
