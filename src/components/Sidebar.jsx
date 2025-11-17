// src/components/Sidebar.jsx
import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  Inventory2,
  ShoppingCart,
  People,
  Settings,
  Logout,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" },
  { text: "Manage Products", icon: <Inventory2 />, path: "/admin/manage-products" },
  { text: "Manage Orders", icon: <ShoppingCart />, path: "/admin/manage-orders" },
  { text: "Manage Users", icon: <People />, path: "/admin/manage-users" },
  { text: "Settings", icon: <Settings />, path: "/admin/settings" },
];

function Sidebar() {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "230px" },
        backgroundColor: "#fff",
        borderRight: "1px solid #e0e0e0",
        p: 2,
        height: "100vh",
        position: { xs: "static", sm: "fixed" },
        top: 0,
        left: 0,
        overflowY: "auto",
        boxShadow: "2px 0 6px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
          sx={{ fontFamily: "FiraSansSemiBold" }}
        >
          ⚡ ADMIN
        </Typography>

        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                mb: 1,
                borderRadius: 2,
                "&.Mui-selected": {
                  backgroundColor: "#e3f2fd",
                  "& .MuiListItemIcon-root": { color: "#1976d2" },
                  "& .MuiListItemText-primary": { color: "#1976d2" },
                },
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#1976d2" }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontFamily: "FiraSans",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box>
        <ListItemButton
          component={Link}
          to="/admin/login"
          sx={{
            borderRadius: 2,
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          <ListItemIcon sx={{ color: "#1976d2" }}>
            <Logout />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontFamily: "FiraSans",
              fontSize: "0.95rem",
              fontWeight: 500,
            }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );
}

export default Sidebar;
