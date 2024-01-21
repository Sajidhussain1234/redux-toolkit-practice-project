import React from "react";
import "./App.css";
import { Product } from "./features/product/Product";
import { Cart } from "./features/cart/Cart";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header />
      <Cart />
      <Product />
    </>
  );
}

export default App;
