import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import { fetchAsync } from "./productSlice";

export function Product() {
  const productData = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  console.log("data", productData);
  const loadData = () => {
    dispatch(fetchAsync());
  };

  return (
    <Box>
      <Button variant="contained" onClick={loadData}>
        {" "}
        Load Data
      </Button>
      {productData?.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 295 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={product.thumbnail}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Price: {product.price} Rupees
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Button variant="contained">Add to Cart</Button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
