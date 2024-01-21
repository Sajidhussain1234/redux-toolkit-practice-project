import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import {
  fetchCartAsync,
  RemoveFromCart,
  IncreaseInCart,
  DecreaseFromCart,
  deleteAsync,
} from "./cartSlice";

export function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncreaseInCart = (id) => {
    dispatch(IncreaseInCart(id));
  };

  const handleDecreaseFromCart = (id) => {
    dispatch(DecreaseFromCart(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(deleteAsync(id));
  };

  useEffect(() => {
    dispatch(fetchCartAsync());
  }, []);

  return (
    <Box sx={{ margin: "3rem" }}>
      {items?.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 1rem",
            margin: ".5rem 0rem",
            border: "2px solid black",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>Title: {item.title}</Typography>
            <Typography>Price: {item.price}</Typography>

            <Box sx={{ display: "flex" }}>
              <Button
                size="small"
                variant="contained"
                onClick={() => handleDecreaseFromCart(item.id)}
              >
                -
              </Button>
              <Typography sx={{ margin: "0rem 4rem" }}>
                {item.quantity}
              </Typography>
              <Button
                size="small"
                variant="contained"
                onClick={() => handleIncreaseInCart(item.id)}
              >
                +
              </Button>
            </Box>
            <Button
              sx={{
                "&:hover": {
                  borderColor: "red",
                },
                "&:active": {
                  borderColor: "red",
                },
              }}
              content="red"
              size="small"
              variant="outlined"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove from Cart
            </Button>
          </Box>
          <img src={item.thumbnail} alt={item.title} height={140} width={140} />
        </Box>
      ))}
    </Box>
  );
}
