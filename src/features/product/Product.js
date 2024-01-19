import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { fetchAsync } from "./productSlice";

export function Product() {
  const productData = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  // console.log("data", productData);
  const loadProducts = () => {
    dispatch(fetchAsync());
  };

  return (
    <Box>
      <Button
        sx={{ margin: "12px 8px" }}
        variant="contained"
        onClick={loadProducts}
      >
        Load Products
      </Button>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {productData?.map((product) => (
          <Card
            sx={{ maxWidth: 295, display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              component="img"
              alt={product.title}
              height="140"
              image={product.thumbnail}
            />
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Price: {product.price} $
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "flex-end" }}>
              <Button variant="contained" fullWidth>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
