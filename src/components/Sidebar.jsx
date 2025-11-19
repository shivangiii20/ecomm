// src/components/Sidebar.jsx
import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
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
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" },
  { text: "Manage Products", icon: <Inventory2 />, path: "/admin/manage-products" },
  { text: "Manage Orders", icon: <ShoppingCart />, path: "/admin/manage-orders" },
  { text: "Manage Users", icon: <People />, path: "/admin/manage-users" },
  { text: "Settings", icon: <Settings />, path: "/admin/settings" },
];

function Sidebar({ mobileOpen, setMobileOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const drawerContent = (
    <Box
      sx={{
        width: "230px",
        backgroundColor: "#fff",
        height: "100%",
        borderRight: "1px solid #e0e0e0",
        p: 2,
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
          sx={{ fontFamily: "FiraSansSemiBold", fontSize: {
          xs: "1.7rem", 
          sm: "1.7rem",  
          md: "1.8rem",    
          lg: "1.9em",  },
          fontWeight: "bold",
         }}
        >
          ⚡ ADMIN
        </Typography>

        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={item.path}
              onClick={() => setMobileOpen(false)} // close drawer
              selected={location.pathname === item.path}
              sx={{
                mb: 1,
                borderRadius: 2,
                "&.Mui-selected": {
                  backgroundColor: "#e3f2fd",
                  "& .MuiListItemIcon-root": { color: "#1976d2" },
                  "& .MuiListItemText-primary": { color: "#1976d2" },
                },
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <ListItemIcon sx={{ color: "#1976d2" }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontFamily: "FiraSans",
                  fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.3em",  },
        
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Logout */}
      <ListItemButton
        onClick={() => navigate("/")}
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
            fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.2em",  },
        
            fontWeight: "bold",
          }}
        />
      </ListItemButton>
    </Box>
  );

  return (
    <>
      {/* MOBILE DRAWER */}
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {drawerContent}
      </Drawer>

      {/* FIXED SIDEBAR FOR DESKTOP */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          width: "230px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          backgroundColor: "#fff",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        {drawerContent}
      </Box>
    </>
  );
}

export default Sidebar;
