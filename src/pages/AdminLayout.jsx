// src/pages/AdminLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Box, IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";

function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Top Bar ONLY for small screens */}
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "flex", sm: "none" },
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar>
          <IconButton onClick={() => setMobileOpen(true)}>
            <DehazeIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* RIGHT CONTENT AREA with sticky footer */}
      <Box
        sx={{
          flexGrow: 1,
          ml: { xs: 0, sm: "230px" },
          mt: { xs: "64px", sm: 0 },
          minHeight: "100vh",

          display: "flex",
          flexDirection: "column",

          background: "#fafafa",
        }}
      >
        {/* PAGE CONTENT */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>

        {/* FOOTER (always at bottom) */}
        <Box
          component="footer"
          sx={{
            textAlign: "center",
            py: 2,
            borderTop: "1px solid #e0e0e0",
            background: "#fff",
            fontFamily: "FiraSansSemiBold",
            fontWeight: "bold",
            fontSize: { xs: "1.1rem", sm: "1.2rem" },
          }}
        >
          © {new Date().getFullYear()} E-Comm Admin Panel. All Rights Reserved.
        </Box>
      </Box>
    </Box>
  );
}

export default AdminLayout;
