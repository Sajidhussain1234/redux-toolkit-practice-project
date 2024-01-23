import React, { useEffect } from "react";
import "./App.css";
import { Product } from "./features/product/Product";
import { Cart } from "./features/cart/Cart";
import Header from "./layouts/Header";
import { useDispatch } from "react-redux";
import { fetchCartAsync } from "./features/cart/cartSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartAsync());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
