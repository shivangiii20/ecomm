import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Link,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff, ArrowBack } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Dummy admin credentials (you can change these)
    const adminEmail = "admin@example.com";
    const adminPassword = "Admin@123";

    if (email === adminEmail && password === adminPassword) {
      setError("");
      // Redirect to Admin Dashboard
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      px={3}
      gap={2}
    >
      <Box
        maxWidth="400px"
        width="100%"
        sx={{
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          textAlign="center"
          sx={{ fontFamily: "FiraSansSemiBold" }}
        >
          Admin Login 🔐
        </Typography>

        {/* Show error if exists */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": {
                fontFamily: "FiraSans",
                fontWeight: "bold",
              },
              "& .MuiOutlinedInput-root": {
                fontFamily: "FiraSansSemiBold",
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputLabel-root": {
                fontFamily: "FiraSans",
                fontWeight: "bold",
              },
              "& .MuiOutlinedInput-root": {
                fontFamily: "FiraSansSemiBold",
              },
            }}
          />

          <FormControlLabel control={<Checkbox />} label="Remember me" />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              fontFamily: "FiraSans",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </form>

        <Typography
          variant="body2"
          align="right"
          sx={{
            mt: 1,
            fontFamily: "FiraSansSemiBold",
          }}
        >
          <Link component={RouterLink} to="/forgot-password" underline="hover">
            Forgot password?
          </Link>
        </Typography>

        <Button
          component={RouterLink}
          to="/"
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontFamily: "FiraSansSemiBold",
          }}
        >
          <ArrowBack fontSize="small" /> Back to Home
        </Button>
      </Box>
    </Box>
  );
}

export default AdminLogin;
