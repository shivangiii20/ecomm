// Footer.jsx
import React from "react";
import { Box, Container, Grid, IconButton, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        color: "black",
        py: 5,
        mt: 5,
        
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Left Side */}
          <Grid item>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "color 0.3s",
                  "&:hover": { color: "#00bcd4" },
                  fontFamily: "FiraSans", 
                  fontWeight: "bold", 
                  fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
                }}
              >
                About Us
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "color 0.3s",
                  "&:hover": { color: "#00bcd4" },
                  fontFamily: "FiraSans", 
                  fontWeight: "bold", 
                  fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
                }}
              >
                Contact Us
              </Link>
              <Link
                component={RouterLink}
                to="/privacy-policy"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "color 0.3s",
                  "&:hover": { color: "#00bcd4" },
                  fontFamily: "FiraSans", 
                  fontWeight: "bold", 
                  fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                component={RouterLink}
                to="/terms"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "color 0.3s",
                  "&:hover": { color: "#00bcd4" },
                  fontFamily: "FiraSans", 
                  fontWeight: "bold", 
                  fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
                }}
              >
                Terms & Conditions
              </Link>
            </Box>
          </Grid>

          {/* Right Side - Social Icons */}
          <Grid item>
            <Box>
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#000000ff",
                  transition: "color 0.3s, transform 0.3s",
                  "&:hover": { color: "#3b5998", transform: "scale(1.2)" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#000000ff",
                  transition: "color 0.3s, transform 0.3s",
                  "&:hover": { color: "#E1306C", transform: "scale(1.2)" },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#000000ff",
                  transition: "color 0.3s, transform 0.3s",
                  "&:hover": { color: "#1DA1F2", transform: "scale(1.2)" },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4, borderTop: "1px solid #444", pt: 2, fontFamily: "FiraSans", fontWeight: "bold",  fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },  }}>
          &copy; 2025 Your E-commerce. All Rights Reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
