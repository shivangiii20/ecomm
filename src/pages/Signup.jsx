// src/pages/Signup.jsx
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

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 12) setPhone(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempErrors = {};

    if (!name) tempErrors.name = "Full Name is required";

    if (!phone) tempErrors.phone = "Phone Number is required";
    else if (phone.length < 10) tempErrors.phone = "Phone number must be at least 10 digits";

    if (!email) tempErrors.email = "Email is required";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) tempErrors.email = "Enter a valid email";
    }

    if (!password) tempErrors.password = "Password is required";

    if (!confirmPassword) tempErrors.confirmPassword = "Confirm your password";
    else if (password !== confirmPassword) tempErrors.confirmPassword = "Passwords do not match";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "FiraSansSemiBold" }}>
          Signup Successful! 🎉
        </Typography>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" justifyContent="center" minHeight="100vh" px={3} gap={4}>
      <Box flex={1} maxWidth="400px" width="100%">
        <Typography variant="h4" fontWeight="bold" mb={1} sx={{ fontFamily: "FiraSans", fontWeight: "bold", fontSize: { xs: "3rem", sm: "3rem", md: "3.1rem", lg: "3.1rem" } }}>
          Create Account 
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3} sx={{ fontFamily: "FiraSansSemiBold", fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem", lg: "1.3rem" } }}>
          Please fill in your details to signup
        </Typography>

        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ "& .MuiInputLabel-root": { fontFamily: "FiraSans", fontWeight: "bold",  fontSize: {
                xs: "1.1rem",
                sm: "1.2rem",
                md: "1.3rem",
                lg: "1.1rem",
              },  
            }, 
            
            "& .MuiOutlinedInput-root": { fontFamily: "FiraSansSemiBold", fontSize: {
                xs: "0.85rem",
                sm: "0.90rem",
                md: "1rem",
                lg: "1.1rem",
              },} }}
        />

        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={handlePhoneChange}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{ "& .MuiInputLabel-root": { fontFamily: "FiraSans", fontWeight: "bold" , fontSize: {
                xs: "1.1rem",
                sm: "1.2rem",
                md: "1.3rem",
                lg: "1.1rem",
              },  
          }, 
          
          "& .MuiOutlinedInput-root": { fontFamily: "FiraSansSemiBold", fontSize: {
                xs: "0.85rem",
                sm: "0.90rem",
                md: "1rem",
                lg: "1.1rem",
              }, } }}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ "& .MuiInputLabel-root": { fontFamily: "FiraSans", fontWeight: "bold" , fontSize: {
                xs: "1.1rem",
                sm: "1.2rem",
                md: "1.3rem",
                lg: "1.1rem",
              },   
            }, 
            "& .MuiOutlinedInput-root": { fontFamily: "FiraSansSemiBold", fontSize: {
                xs: "0.85rem",
                sm: "0.90rem",
                md: "1rem",
                lg: "1.1rem",
              }, } }}
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          sx={{ "& .MuiInputLabel-root": { fontFamily: "FiraSans", fontWeight: "bold", fontSize: {
                xs: "1.1rem",
                sm: "1.2rem",
                md: "1.3rem",
                lg: "1.1rem",
              },    
            }, 
            "& .MuiOutlinedInput-root": { fontFamily: "FiraSansSemiBold", fontSize: {
                xs: "0.85rem",
                sm: "0.90rem",
                md: "1rem",
                lg: "1.1rem",
              }, } }}
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

        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          sx={{ "& .MuiInputLabel-root": { fontFamily: "FiraSans", fontWeight: "bold" , fontSize: {
                xs: "1.1rem",
                sm: "1.2rem",
                md: "1.3rem",
                lg: "1.1rem",
              }, 
            }, 
            "& .MuiOutlinedInput-root": { fontFamily: "FiraSansSemiBold",fontSize: {
                xs: "0.85rem",
                sm: "0.90rem",
                md: "1rem",
                lg: "1.1rem",
              },  } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleConfirmPassword} edge="end">
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, fontFamily: "FiraSans", fontWeight: "bold", fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
              lg: "1.2rem",
            }, }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>

        <Typography variant="body2" align="center" sx={{ mt: 2, fontFamily: "FiraSansSemiBold", fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
              lg: "1.2rem",
            }, }}>
          Already have an account?{' '}
          <Link component={RouterLink} to="/login" underline="hover" color="primary">
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Signup;
