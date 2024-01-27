import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions } from "@mui/material";
import { addAsync } from "../cart/cartSlice";
import { fetchProductAsync } from "./productSlice";

export function Product() {
  const productData = useSelector((state) => state.product.products);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // console.log("Cart Items", items);
  const addToCart = (product) => {
    console.log("items", items);
    console.log("product", product);
    const check = items.some((item) => item.product_id === product.product_id);
    if (check) {
      alert("This item is already added in Cart");
    } else dispatch(addAsync(product));
  };

  useEffect(() => {
    dispatch(fetchProductAsync());
  }, []);

  return (
    <Box>
      {!productData.length ? (
        <Box sx={{ margin: "6rem", textAlign: "center" }}>
          <Typography variant="h4">Products List</Typography>
          <Typography variant="body">
            Start Json server by running command:{" "}
            <code style={{ color: "blue" }}>json-server db.json -p 8080</code>{" "}
            then products will upload
          </Typography>
        </Box>
      ) : (
        <Box sx={{ margin: "6rem 0rem" }}>
          <Box sx={{ margin: "2rem", textAlign: "center" }}>
            <Typography variant="h4">Products List</Typography>
            <Typography variant="body">
              Click on Add to Cart button to Cart products and see them in Cart
              section.
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            {productData?.map((product) => (
              <Card
                key={product.product_id}
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
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={(_) => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
