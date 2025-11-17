// src/pages/Login.jsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  // Restrict max 12 characters for phone and allow some special characters for email
  const handleEmailOrPhoneChange = (e) => {
    let value = e.target.value;
    if (/^\d+$/.test(value)) {
      // numbers only (phone)
      if (value.length > 12) return;
    } else {
      // allow normal email characters
      if (value.length > 50) return; // limit email length
    }
    setEmailOrPhone(value);
  };

  return (
    <>
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      px={3}
      gap={4}
    >
      {/* Form */}
      <Box flex={1} maxWidth="400px" width="100%">
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={1}
          sx={{
            fontFamily: "FiraSans",
            fontWeight: "bold",
            fontSize: {
              xs: "3rem",
              sm: "3rem",
              md: "3.1rem",
              lg: "3.1rem",
            },
          }}
        >
          Welcome Back👋
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          mb={3}
          sx={{
            fontFamily: "FiraSansSemiBold",
            fontSize: {
              xs: "1.1rem",
              sm: "1.2rem",
              md: "1.3rem",
              lg: "1.3rem",
            },
          }}
        >
          Please login to your account to continue
        </Typography>

        <TextField
          label="Email or Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={emailOrPhone}
          onChange={handleEmailOrPhoneChange}
          sx={{
            "& .MuiInputLabel-root": {
              fontFamily: "FiraSans",
              fontWeight: "bold",
              fontSize: {
                xs: "1.1rem",
                sm: "1.2rem",
                md: "1.3rem",
                lg: "1.1rem",
              }, // label font
            },
            "& .MuiOutlinedInput-root": {
              fontFamily: "FiraSansSemiBold",
              fontSize: {
                xs: "0.85rem",
                sm: "0.90rem",
                md: "1rem",
                lg: "1.1rem",
              }, // input text font
            },
          }}
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiInputLabel-root": {
              fontFamily: "FiraSans",
              fontWeight: "bold",
              fontSize: {
                xs: "1.1rem",
                sm: "1.2rem",
                md: "1.3rem",
                lg: "1.1rem",
              }, // label font
            },
            "& .MuiOutlinedInput-root": {
              fontFamily: "FiraSansSemiBold",
              fontSize: {
                xs: "0.85rem",
                sm: "0.90rem",
                md: "1rem",
                lg: "1rem",
              }, // input text font
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            fontFamily: "FiraSans",
            fontWeight: "bold",
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
              lg: "1.2rem",
            },
          }}
        >
          Login
        </Button>

        {/* Signup Link */}
        <Typography
          variant="body2"
          align="center"
          sx={{
            mt: 2,
            fontFamily: "FiraSansSemiBold",
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
              lg: "1.2rem",
            },
          }}
        >
          Don’t have an account ?{" "}
          <Link
            component={RouterLink}
            to="/signup"
            underline="hover"
            color="primary"
            sx={{ fontWeight: 500 }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
      </Box>
      
      {/* Login as Admin Link */}
<Typography
  variant="body2"
  align="center"
  sx={{
    mt: 2,
    fontFamily: "FiraSansSemiBold",
    fontSize: {
      xs: "1rem",
      sm: "1.1rem",
      md: "1.2rem",
      lg: "1.2rem",
    },
  }}
>
  Are you an admin?{" "}
  <Link
    component={RouterLink}
    to="/admin-login"
    underline="hover"
    color="primary"
    sx={{ fontWeight: 500 }}
  >
    Login as Admin
  </Link>
</Typography>
</>
  );
}

export default Login;
