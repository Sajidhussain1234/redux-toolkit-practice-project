import React from "react";
import "./App.css";
import { Product } from "./features/product/Product";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ alignContent: "center" }}>
      <Product />
    </Box>
  );
}

export default App;
