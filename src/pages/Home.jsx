import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WeekendIcon from "@mui/icons-material/Weekend";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function Home() {
  return (
   <>
    <Container sx={{ py: 3 }}>
      <Card
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          bgcolor: "primary.light",
          color: "primary.contrastText",
          minHeight: { xs: 200, md: 240 },
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Text block (left side) */}
        <CardContent
          sx={{
            // Reserve space for the image on sm+ to prevent overlap
            pr: {
              xs: 2,                         // no reserve on very small; image hidden on xs
              sm: "calc(170px + 24px)",      // image width + right margin on small
              md: "calc(240px + 32px)",      // image width + right margin on md+
            },
            py: { xs: 3, md: 5 },
          }}
        >
          <Typography variant="h3" fontWeight={800} gutterBottom sx={{fontFamily: "FiraSans", fontSize: {
          xs: "3.1rem",  // extra small screens
          sm: "3.2rem",  // small screens
          md: "3.5rem",    // medium screens
          lg: "3.7rem",  }, }}>
            Big Sale 50% off
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 2, fontFamily: "FiraSansSemiBold", fontSize: {
          xs: "1.1rem", 
          sm: "1.2rem",  
          md: "1.5rem",    
          lg: "1.7rem",  },  }}>
            Limited-time deals on best-sellers.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => window.location.assign("/products")}
            sx={{fontFamily: "FiraSans", fontWeight: "bold", fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  }, }}
          >
            Shop Now
          </Button>
        </CardContent>

        {/* Image anchored to the right inside the card */}
        <Box
          sx={{
            position: "absolute",
            display: { xs: "none", sm: "block" }, // hide on extra-small screens
            right: { sm: 16, md: 24 },
            top: "50%",
            transform: "translateY(-50%)",
            width: { sm: 170, md: 240 },          // responsive image width
            pointerEvents: "none",                 // avoid accidental clicks over text
          }}
        >
          <CardMedia
            component="img"
            src="/images/discount.jpg"
            alt="Discount banner"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Card>
    </Container>
   {/* Categories (centered heading + responsive 1/2/4 layout) */}
<Box sx={{ width: "100%", py: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
  <Typography
    variant="h4"
    sx={{
      mb: 3,
      textAlign: "center",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #0b6bcb, #593ff0ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "FiraSans",
      fontSize: {
          xs: "3rem", 
          sm: "3.1rem",  
          md: "3.3rem",    
          lg: "3.4rem",  },

    }}
  >
    Categories
  </Typography>

  <Grid
    container
    spacing={{ xs: 2, sm: 3, md: 4 }}
    justifyContent="center"
    alignItems="center"
    sx={{ width: "100%" }}
  >
    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Paper
        onClick={() => window.location.assign("/products?category=Electronics")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && window.location.assign("/products?category=Electronics")}
        sx={{
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          cursor: "pointer",
          transition: "all .2s ease",
          "&:hover": { boxShadow: 4, transform: "translateY(-2px)" },
          "&:focus-visible": { outline: "3px solid", outlineColor: "primary.main" },
        }}
      >
        <PhoneIphoneIcon sx={{ fontSize: { xs: 36, sm: 44, md: 56, lg: 64 }, color: "primary.main" }} />
        <Typography sx={{fontFamily: "FiraSans", fontWeight: "bold", fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
  }}>Electronics</Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Paper
        onClick={() => window.location.assign("/products?category=Fashion")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && window.location.assign("/products?category=Women")}
        sx={{
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          cursor: "pointer",
          transition: "all .2s ease",
          "&:hover": { boxShadow: 4, transform: "translateY(-2px)" },
          "&:focus-visible": { outline: "3px solid", outlineColor: "primary.main" },
        }}
      >
        <CheckroomIcon sx={{ fontSize: { xs: 36, sm: 44, md: 56, lg: 64 }, color: "primary.main" }} />
        <Typography sx={{fontFamily: "FiraSans", fontWeight: "bold", fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
  }}>Fashion</Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Paper
        onClick={() => window.location.assign("/products?category=Furniture")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && window.location.assign("/products?category=Home")}
        sx={{
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          cursor: "pointer",
          transition: "all .2s ease",
          "&:hover": { boxShadow: 4, transform: "translateY(-2px)" },
          "&:focus-visible": { outline: "3px solid", outlineColor: "primary.main" },
        }}
      >
        <WeekendIcon sx={{ fontSize: { xs: 36, sm: 44, md: 56, lg: 64 }, color: "primary.main" }} />
        <Typography sx={{fontFamily: "FiraSans", fontWeight: "bold", fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
  }}>Furniture</Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Paper
        onClick={() => window.location.assign("/products?category=Books")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && window.location.assign("/products?category=Books")}
        sx={{
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          cursor: "pointer",
          transition: "all .2s ease",
          "&:hover": { boxShadow: 4, transform: "translateY(-2px)" },
          "&:focus-visible": { outline: "3px solid", outlineColor: "primary.main" },
        }}
      >
        <MenuBookIcon sx={{ fontSize: { xs: 36, sm: 44, md: 56, lg: 64 }, color: "primary.main" }} />
        <Typography sx={{fontFamily: "FiraSans", fontWeight: "bold", fontSize: {
          xs: "1.1rem", 
          sm: "1.1rem",  
          md: "1.3rem",    
          lg: "1.4rem",  },
  }}>Books</Typography>
      </Paper>
    </Grid>
  </Grid>
</Box>

    </>
  );
}


export default Home;
