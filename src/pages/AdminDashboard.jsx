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
    <Box
      sx={{
        p: 3,
        pl: { xs: 3, sm: 3, md: 3, lg: 6, xl: 10 },
        fontFamily: "FiraSansSemiBold",
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        sx={{
          fontFamily: "FiraSansSemiBold",
          fontSize: { xs: "2rem", sm: "2.1rem", md: "2.3rem", lg: "2.4rem" },
        }}
      >
        Admin Dashboard
      </Typography>

      {/* ⭐ CENTERED TOP CARDS ⭐ */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            maxWidth: "1100px",
            justifyContent: "center",
          }}
        >
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={cardStyle}>
              <Typography variant="subtitle1" sx={titleStyle}>
                Total Products
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {dashboardData.totalProducts}
              </Typography>
            </Paper>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={cardStyle}>
              <Typography variant="subtitle1" sx={titleStyle}>
                Total Orders
              </Typography>

              <Typography variant="h4" fontWeight="bold">
                {dashboardData.totalOrders}
              </Typography>

              {/* Vertical Status */}
              <Box sx={{ mt: 2 }}>
                <Typography sx={statusText}>Pending: {dashboardData.pending}</Typography>
                <Typography sx={statusText}>Delivered: {dashboardData.delivered}</Typography>
                <Typography sx={statusText}>Cancelled: {dashboardData.cancelled}</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={cardStyle}>
              <Typography variant="subtitle1" sx={titleStyle}>
                Revenue
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {dashboardData.revenue}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* ⭐ RECENT ORDERS SECTION (NOT CENTERED) ⭐ */}
      <Box mt={4} sx={{ maxWidth: "1300px", mx: "auto" }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
          sx={{
            fontFamily: "FiraSansSemiBold",
            fontSize: { xs: "1.4rem", sm: "1.5rem", md: "1.6rem", lg: "1.7rem" },
          }}
        >
          Recent Orders
        </Typography>

        <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
          <Table
            sx={{
              "& th": titleStyle,
              "& td": {
                fontFamily: "FiraSans",
                fontWeight: "bold",
                fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.3rem", lg: "1.2rem" },
              },
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

     
    </Box>
  );
}

/* CARD STYLES */
const cardStyle = {
  p: 3,
  borderRadius: 3,
  textAlign: "center",
  fontFamily: "FiraSansSemiBold",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "200px", // SAME HEIGHT
};

const titleStyle = {
  fontFamily: "FiraSansSemiBold",
  fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.3rem", lg: "1.4rem" },
};

const statusText = {
  fontFamily: "FiraSans",
  fontWeight: "bold",
  fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.1rem", lg: "1.2rem" },
  lineHeight: 1.6,
};

export default AdminDashboard;
