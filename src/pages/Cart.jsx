import React from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
  Paper,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          fontFamily: "FiraSansSemiBold",
          fontSize: {
            xs: "2rem",
            sm: "2.1rem",
            md: "2.2rem",
            lg: "2.3em",
          },
        }}
      >
        Shopping Cart
      </Typography>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: "FiraSansSemiBold",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3em",
                  },
                  fontWeight: "bold",
                }}
              >
                Product
              </TableCell>

              <TableCell
                sx={{
                  fontFamily: "FiraSansSemiBold",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3em",
                  },
                  fontWeight: "bold",
                }}
              >
                Price
              </TableCell>

              <TableCell
                sx={{
                  fontFamily: "FiraSansSemiBold",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3em",
                  },
                  fontWeight: "bold",
                }}
              >
                Quantity
              </TableCell>

              <TableCell
                sx={{
                  fontFamily: "FiraSansSemiBold",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3em",
                  },
                  fontWeight: "bold",
                }}
              >
                Subtotal
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* Item 1 */}
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: "FiraSans",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  },
                  fontWeight: "bold",
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Box
                    component="img"
                    src="/images/cart/cart1.jpg"
                    alt="Wireless Mouse"
                    sx={{ width: 45, borderRadius: 1.2 }}
                  />
                  Wireless Mouse
                </Box>
              </TableCell>

              <TableCell
                sx={{ fontFamily: "FiraSans",fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  },  }}
              >
                $25.00
              </TableCell>

              <TableCell>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    border: "1px solid #ccc",
                    width: "fit-content",
                    borderRadius: 1.5,
                    fontFamily: "FiraSansSemiBold",
                    fontSize: "1rem",
                  }}
                >
                  <IconButton size="small">
                    <RemoveIcon fontSize="small" />
                  </IconButton>

                  <Typography
                    px={1}
                    sx={{
                      fontFamily: "FiraSansSemiBold",
                      fontSize: "1rem",
                    }}
                  >
                    1
                  </Typography>

                  <IconButton size="small">
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>

              <TableCell
                sx={{ fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  },}}
              >
                $25.00
              </TableCell>
            </TableRow>

            {/* Item 2 */}
            <TableRow>
              <TableCell
                sx={{ fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  }, fontWeight: "bold", }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Box
                    component="img"
                    src="/images/cart/cart2.jpg"
                    alt="Bluetooth Speaker"
                    sx={{ width: 45, borderRadius: 1.2 }}
                  />
                  Bluetooth Speaker
                </Box>
              </TableCell>

              <TableCell
                sx={{ fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  }, }}
              >
                $45.00
              </TableCell>

              <TableCell>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    border: "1px solid #ccc",
                    width: "fit-content",
                    borderRadius: 1.5,
                    fontFamily: "FiraSansSemiBold",
                    fontSize: "1rem",
                  }}
                >
                  <IconButton size="small">
                    <RemoveIcon fontSize="small" />
                  </IconButton>

                  <Typography
                    px={1}
                    sx={{ fontFamily: "FiraSansSemiBold", fontSize: "1rem" }}
                  >
                    1
                  </Typography>

                  <IconButton size="small">
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>

              <TableCell
                sx={{ fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  },}}
              >
                $45.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Bottom area */}
      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Continue Shopping */}
        <Button sx={{fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  }, fontWeight: "bold", }} variant="outlined" onClick={() => navigate("/products")}>
          Continue Shopping
        </Button>

        <Box textAlign="right">
          <Typography fontWeight="bold"  sx={{fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                  }, fontFamily: "FiraSans", }}>
            Subtotal: $70.00
          </Typography>

          {/* Proceed to Checkout */}
          <Button
            variant="contained"
            sx={{ mt: 2, px: 3, py: 1.2, fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  }, fontWeight: "bold",}}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
