// src/pages/AdminManageProducts.jsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function AdminManageProducts() {
  const products = [
    { image: "/images/admin/phone.jpg", name: "Smartphone", price: "$699.00", stock: 25, category: "Electronics" },
    { image: "/images/admin/tshirt.jpg", name: "T-shirt", price: "$25.00", stock: 50, category: "Clothing" },
    { image: "/images/admin/laptop.jpg", name: "Laptop", price: "$889.00", stock: 10, category: "Electronics" },
    { image: "/images/admin/coffee.jpg", name: "Coffee Beans", price: "$15.00", stock: 100, category: "Home" },
  ];

  return (
    // IMPORTANT: do NOT add ml/marginLeft here — AdminLayout already does that.
    <Box
      sx={{
        flexGrow: 1,          // let layout determine horizontal position
        p: 3,
        fontFamily: "FiraSansSemiBold",
        background: "transparent",
      }}
    >
      {/* Header */}
      <Box
        mb={3}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "FiraSansSemiBold",
            fontSize: { xs: "2rem", sm: "2.1rem", md: "2.3rem", lg: "2.4rem" },
          }}
        >
          Manage Products
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            px: 3,
            py: 1,
            borderRadius: 2,
            textTransform: "none",
            fontFamily: "FiraSansSemiBold",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem", lg: "1.2rem" },
          }}
        >
          Add New Product
        </Button>
      </Box>

      {/* Product Table */}
      <Box>
        <TableContainer component={Paper} sx={{ borderRadius: 3, width: "100%" }}>
          <Table
            sx={{
              "& th": { fontFamily: "FiraSansSemiBold", fontWeight: "bold", fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  }, },
              "& td": { fontFamily: "FiraSans",fontWeight: "bold", fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.2em",  },},
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Product Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((prod, index) => (
                <TableRow key={index} hover>
                  <TableCell sx={{ width: "90px" }}>
                    <Box
                      component="img"
                      src={prod.image}
                      alt={prod.name}
                      sx={{
                        width: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
                        borderRadius: "10px",
                        display: "block",
                      }}
                    />
                  </TableCell>

                  <TableCell>{prod.name}</TableCell>
                  <TableCell>{prod.price}</TableCell>
                  <TableCell>{prod.stock}</TableCell>
                  <TableCell>{prod.category}</TableCell>

                  <TableCell>
                    <Button variant="outlined" sx={{ borderRadius: 2, textTransform: "none", fontFamily: "FiraSans", fontWeight: "bold", fontSize: {
          xs: "1rem", 
          sm: "1rem",  
          md: "1.1rem",    
          lg: "1.1rem",  },
                     }}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Footer (keeps same look as other admin pages) */}
      <Box component="footer" mt={4} py={2} textAlign="center" borderTop="1px solid #e0e0e0">
        <Typography sx={{ fontFamily: "FiraSansSemiBold", color: "text.secondary" }}>
          © {new Date().getFullYear()} YourStore Admin
        </Typography>
      </Box>
    </Box>
  );
}

export default AdminManageProducts;
