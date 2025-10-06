// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => setOpen(state);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Products", path: "/products" },
    { text: "Cart", path: "/cart" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#f8f9fa",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left: Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }}
          >
            YourStore
          </Typography>

          {/* Middle: Nav links (hidden on small screens) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{ color: "#000", textTransform: "none" }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Right: Login button + Hamburger on small */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{ backgroundColor: "#000", textTransform: "none" }}
            >
              Login
            </Button>

            {/* Hamburger menu (xs only) */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                component={Link}
                to={item.path}
                key={item.text}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
