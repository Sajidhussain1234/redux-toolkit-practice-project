import React from "react";
import "./App.css";
import { Product } from "./features/product/Product";
import { Box } from "@mui/material";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header />
      <Product />
    </>
  );
}

export default App;
