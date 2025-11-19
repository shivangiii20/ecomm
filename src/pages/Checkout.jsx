import {
  Box,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Divider,
} from "@mui/material";

const Checkout = () => {
  return (
    <Box p={4} display="flex" justifyContent="center">
      <Box width="100%" maxWidth={1100}>
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" mb={3} sx={{fontFamily: "FiraSansSemiBold", fontSize: {
                    xs: "2.2rem",
                    sm: "2.3rem",
                    md: "2.4rem",
                    lg: "2.5rem",
                  },}}>
          Checkout
        </Typography>

        <Box display="flex" gap={5}>
          {/* LEFT SECTION */}
          <Box flex={1}>
            <Typography fontWeight="bold" sx={{fontFamily: "FiraSans", fontSize: {
                    xs: "1.2rem",
                    sm: "1.3rem",
                    md: "1.4rem",
                    lg: "1.5rem",
                  },}}>Contact Information</Typography>
            <TextField fullWidth size="small" sx={{ mt: 1, mb: 3 }} />

            <Typography fontWeight="bold" sx={{fontFamily: "FiraSans", fontSize: {
                    xs: "1.2rem",
                    sm: "1.3rem",
                    md: "1.4rem",
                    lg: "1.5rem",
                  },}}>Shipping Address</Typography>
            <TextField fullWidth size="small" sx={{ mt: 1 }} />
            <TextField fullWidth size="small" sx={{ mt: 2 }} />

            <Box display="flex" gap={2} mt={2}>
              <TextField fullWidth size="small" placeholder="City" sx={{
    "& .MuiInputBase-input": {
      fontFamily: "FiraSans",
      fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                  },
    },
  }}/>
              <TextField fullWidth size="small" placeholder="State" sx={{
    "& .MuiInputBase-input": {
      fontFamily: "FiraSans",
      fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                  },
    },
  }} />
            </Box>

            <TextField
              fullWidth
              size="small"
              placeholder="Zip Code"
              sx={{ mt: 2, "& .MuiInputBase-input": {
      fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.1rem",
                    lg: "1.2rem",}
      
    }, }}
            />
          </Box>

          {/* RIGHT SECTION */}
          <Box width={350}>
            {/* Payment Method */}
            <Typography fontWeight="bold" mb={1} sx={{fontFamily: "FiraSansSemiBold", fontSize: {
                    xs: "1.2rem",
                    sm: "1.3rem",
                    md: "1.4rem",
                    lg: "1.5rem",
                  },}}>
              Payment Method
            </Typography>

            <RadioGroup defaultValue="card">
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Credit Card" sx={{
    "& .MuiFormControlLabel-label": {
      fontFamily: "FiraSans",
      fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                  },
      
    },
  }}
              />
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="PayPal" sx={{
    "& .MuiFormControlLabel-label": {
      fontFamily: "FiraSans",
      fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                  },
      
    },
  }}
              />
            </RadioGroup>

            {/* Summary */}
            <Paper
              sx={{
                mt: 3,
                p: 2,
                borderRadius: 2,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <Typography fontWeight="bold" mb={1} sx={{fontFamily: "FiraSansSemiBold", fontSize: {
                    xs: "1.2rem",
                    sm: "1.3rem",
                    md: "1.4rem",
                    lg: "1.5rem",
                  },}}>
                Order Summary
              </Typography>

              <Box display="flex" justifyContent="space-between" my={1}>
                <Typography sx={{fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  },}}>Subtotal</Typography>
                <Typography sx={{fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  },}}>$70.00</Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between" my={1}>
                <Typography fontWeight="bold" sx={{fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  },}}>Total</Typography>
                <Typography fontWeight="bold" sx={{fontFamily: "FiraSans", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  },}}>$70.00</Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2, py: 1.2, fontFamily: "FiraSansSemiBold", fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  }, }}
              >
                Place Order
              </Button>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
