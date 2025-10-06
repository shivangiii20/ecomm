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
import Lottie from "lottie-react";
import login from "../assets/animation/login.json";

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
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      px={3}
      gap={4}
    >
      {/* Animation */}
      <Box flex={1} maxWidth={{ xs: "300px", md: "500px" }} mx="auto">
        <Lottie animationData={login} loop={true} />
      </Box>

      {/* Form */}
      <Box flex={1} maxWidth="400px" width="100%">
        <Typography variant="h4" fontWeight="bold" mb={1}>
          Welcome Back 👋
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Please login to your account to continue
        </Typography>

        <TextField
          label="Email or Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={emailOrPhone}
          onChange={handleEmailOrPhoneChange}
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>

        {/* Signup Link */}
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don’t have an account?{" "}
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
  );
}

export default Login;
