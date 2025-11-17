// src/pages/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";

function AdminLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar (always visible) */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: "230px" },
          p: 3,
          minHeight: "100vh",
          background: "#fafafa",
        }}
      >
        <Outlet /> {/* All admin pages load here */}
      </Box>
    </Box>
  );
}

export default AdminLayout;
