import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((state) => state.cart.items);
  const [cartItemCount, setCartItemCount] = React.useState(0);

  React.useEffect(() => {
    setCartItemCount(items.length);
  }, [items]);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6">Miscellaneous Store</Typography>
        </Link>
        <Box
          sx={{
            display: "flex",
            mt: "12px",
            mr: "18px",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
            }}
          >
            <Typography sx={{ padding: "0px 8px", margin: "2px" }}>
              Products
            </Typography>
          </Link>
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              position: "relative",
            }}
          >
            <AddShoppingCartIcon sx={{ padding: "0px 8px" }} />
            {cartItemCount > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: -14,
                  right: -20,
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px",
                  minWidth: "1.5rem",
                  textAlign: "center",
                }}
              >
                {cartItemCount}
              </Box>
            )}
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
