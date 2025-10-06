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
          <Typography variant="h3" fontWeight={800} gutterBottom>
            Big Sale 50% off
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 2 }}>
            Limited-time deals on best-sellers.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => window.location.assign("/products")}
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
      fontWeight: 800,
      fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
      background: "linear-gradient(90deg, #0b6bcb, #7bcfff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
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
        <Typography>Electronics</Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Paper
        onClick={() => window.location.assign("/products?category=Women")}
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
        <Typography>Fashion</Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Paper
        onClick={() => window.location.assign("/products?category=Home")}
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
        <Typography>Home</Typography>
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
        <Typography>Books</Typography>
      </Paper>
    </Grid>
  </Grid>
</Box>

    </>
  );
}


export default Home;
