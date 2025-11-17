// src/pages/AdminDashboard.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const dashboardData = {
  totalProducts: 1250,
  totalOrders: 563,
  revenue: "$12,340",
  pending: 120,
  delivered: 390,
  cancelled: 53,
};

const recentOrders = [
  { id: "#OD1254", name: "John Doe", status: "Delivered", total: "$250.00", date: "12 Sept 2025" },
  { id: "#OD1252", name: "Emily Smith", status: "Processing", total: "$150.00", date: "11 Sept 2025" },
  { id: "#OD1250", name: "Michael Johnson", status: "Cancelled", total: "$350.00", date: "10 Sept 2025" },
  { id: "#OD1247", name: "Sarah Williams", status: "Delivered", total: "$110.00", date: "9 Sept 2025" },
];

function AdminDashboard() {
  return (
    <Box sx={{ p: 3, fontFamily: "FiraSansSemiBold" }}>
      
      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        sx={{
          fontFamily: "FiraSansSemiBold",
          fontSize: { xs: "2rem", sm: "2.1rem", md: "2.3rem", lg: "2.4rem" }
        }}
      >
        Admin Dashboard
      </Typography>

      {/* Top Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={2} sx={cardStyle}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "FiraSansSemiBold",
                fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.3rem", lg: "1.4rem" }
              }}
            >
              Total Products
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {dashboardData.totalProducts}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={2} sx={cardStyle}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "FiraSansSemiBold",
                fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.3rem", lg: "1.4rem" }
              }}
            >
              Total Orders
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {dashboardData.totalOrders}
            </Typography>

            <Typography
              sx={{
                mt: 1,
                fontFamily: "FiraSans",
                fontWeight: "bold",
                fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.1rem", lg: "1.2rem" }
              }}
            >
              Pending {dashboardData.pending} | Delivered {dashboardData.delivered} | Cancelled {dashboardData.cancelled}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={2} sx={cardStyle}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "FiraSansSemiBold",
                fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.3rem", lg: "1.4rem" }
              }}
            >
              Revenue
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {dashboardData.revenue}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Orders */}
      <Box mt={4}>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
          sx={{
            fontFamily: "FiraSansSemiBold",
            fontSize: { xs: "1.4rem", sm: "1.5rem", md: "1.6rem", lg: "1.7rem" }
          }}
        >
          Recent Orders
        </Typography>

        <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
          <Table
            sx={{
              "& th": {
                fontFamily: "FiraSansSemiBold",
                fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.3rem", lg: "1.4rem" }
              },
              "& td": {
                fontFamily: "FiraSans",
                fontWeight: "bold",
                fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.3rem", lg: "1.2rem" }
              }
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {recentOrders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell
                    sx={{
                      color:
                        order.status === "Delivered"
                          ? "green"
                          : order.status === "Cancelled"
                          ? "red"
                          : "orange",
                    }}
                  >
                    {order.status}
                  </TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Footer */}
      <Typography
        textAlign="center"
        mt={4}
        py={2}
        sx={{
          fontFamily: "FiraSansSemiBold",
          fontWeight: "bold",
          borderTop: "1px solid #e0e0e0",
          fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.3rem", lg: "1.3rem" }
        }}
      >
        © {new Date().getFullYear()} E-Comm Admin Panel. All Rights Reserved.
      </Typography>
    </Box>
  );
}

const cardStyle = {
  p: 3,
  borderRadius: 3,
  textAlign: "center",
  fontFamily: "FiraSansSemiBold",
  backgroundColor: "#fff",
};

export default AdminDashboard;
