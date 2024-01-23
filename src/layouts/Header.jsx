import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6">Miscellaneous Store</Typography>
        </Link>
        <Box sx={{ display: "flex", marginLeft: "2rem", marginTop: "3px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography sx={{ padding: "0px 8px", margin: "2px" }}>
              Products
            </Typography>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography sx={{ padding: "0px 8px", margin: "2px" }}>
              Cart
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
