// src/pages/AdminManageOrders.jsx
import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const orders = [
  {
    id: "#1001",
    customer: "John Doe",
    amount: "$150.00",
    date: "04/20/2024",
    status: "Processing",
  },
  {
    id: "#1002",
    customer: "Jane Smith",
    amount: "$250.00",
    date: "04/22/2024",
    status: "Completed",
  },
  {
    id: "#1003",
    customer: "Sarah Johnson",
    amount: "$99.00",
    date: "04/24/2024",
    status: "Pending",
  },
  {
    id: "#1004",
    customer: "Michael Brown",
    amount: "$75.00",
    date: "04/26/2024",
    status: "Cancelled",
  },
];

function AdminManageOrders() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Page Title + Add Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontFamily: "FiraSansSemiBold", fontWeight: "bold", fontSize: {
          xs: "2rem", 
          sm: "2.1rem",  
          md: "2.3rem",    
          lg: "2.4rem",  }, }}
        >
          Manage Orders
        </Typography>

        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            fontFamily: "FiraSans",
            fontWeight: "bold",
            fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
          }}
        >
          Add New Product
        </Button>
      </Box>

      {/* Orders Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table
        sx={{
                       "& th": {
        fontFamily: "FiraSansSemiBold",
        fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
                       },
                        "& td": {
        fontFamily: "FiraSans",
        fontWeight: "bold",
        fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.2em",  },
        
      },

              }}>
                <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Order ID</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 600 }}></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: 2, textTransform: "none", fontFamily: "FiraSans", fontWeight: "bold", fontSize: {
          xs: "1rem", 
          sm: "1rem",  
          md: "1.1rem",    
          lg: "1.1rem",  }, }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AdminManageOrders;
