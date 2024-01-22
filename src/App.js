import React, { useEffect } from "react";
import "./App.css";
import { Product } from "./features/product/Product";
import { Cart } from "./features/cart/Cart";
import Header from "./layouts/Header";
import { useDispatch } from "react-redux";
import { fetchCartAsync } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartAsync());
  }, []);

  return (
    <>
      <Header />
      <Cart />
      <Product />
    </>
  );
}

export default App;
