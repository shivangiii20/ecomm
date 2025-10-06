import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  FormGroup,
} from "@mui/material";

const productsData = [
  { id: 1, name: "Single Leather Chair", price: 250, category: "Men", brand: "Samsung", availability: "In Stock", image: "/images/chair.jpg" },
  { id: 2, name: "Wireless Headphone", price: 150, category: "Electronics", brand: "Apple", availability: "Out of Stock", image: "/images/headphone.jpg" },
  { id: 3, name: "Smartwatch", price: 300, category: "Women", brand: "Apple", availability: "In Stock", image: "/images/watch.jpg" },
  { id: 4, name: "Laptop", price: 800, category: "Electronics", brand: "Samsung", availability: "In Stock", image: "/images/laptop.jpg" },
  { id: 5, name: "Digital Camera", price: 600, category: "Electronics", brand: "Apple", availability: "In Stock", image: "/images/camera.jpg" },
  { id: 6, name: "Jacket", price: 120, category: "Women", brand: "Samsung", availability: "Out of Stock", image: "/images/jacket.jpg" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [availability, setAvailability] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) => (prev === category ? "" : category));
  };
  const handleBrandChange = (brand) => {
    setSelectedBrand((prev) => (prev === brand ? "" : brand));
  };
  const handleAvailabilityChange = (value) => {
    setAvailability((prev) => (prev === value ? "" : value));
  };

  const filteredProducts = productsData.filter((product) => {
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchBrand = selectedBrand ? product.brand === selectedBrand : true;
    const matchAvailability = availability ? product.availability === availability : true;
    return matchCategory && matchPrice && matchBrand && matchAvailability;
  });

  return (
    // Page wrapper: column flex with minHeight so the footer sits after this component
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#fff" }}>
      {/* Main two-column row that stretches both columns equally */}
      <Box
        component="main"
        sx={{
          display: "flex",
          flex: 1,              // take remaining height so footer is pushed below
          flexDirection: "row",
          alignItems: "stretch" // equal height columns
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: "180px", sm: "220px", md: "240px" },
            bgcolor: "#f8f8f8",
            p: 2,
            borderRight: "1px solid #ddd",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h6" mb={2} textAlign="center">
            Filters
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Category
          </Typography>
          <FormGroup>
            {["Mobiles", "Men", "Women", "Electronics"].map((cat) => (
              <FormControlLabel
                key={cat}
                control={
                  <Checkbox
                    checked={selectedCategory === cat}
                    onChange={() => handleCategoryChange(cat)}
                    size="small"
                  />
                }
                label={cat}
              />
            ))}
          </FormGroup>

          <Divider sx={{ my: 1.5 }} />

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            sx={{ mx: 1 }}
          />

          <Divider sx={{ my: 1.5 }} />

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Brand
          </Typography>
          <FormGroup>
            {["Samsung", "Apple"].map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    checked={selectedBrand === brand}
                    onChange={() => handleBrandChange(brand)}
                    size="small"
                  />
                }
                label={brand}
              />
            ))}
          </FormGroup>

          <Divider sx={{ my: 1.5 }} />

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Availability
          </Typography>
          <FormGroup>
            {["In Stock", "Out of Stock"].map((status) => (
              <FormControlLabel
                key={status}
                control={
                  <Checkbox
                    checked={availability === status}
                    onChange={() => handleAvailabilityChange(status)}
                    size="small"
                  />
                }
                label={status}
              />
            ))}
          </FormGroup>
        </Box>

        {/* Products */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 2, sm: 3, md: 4 },
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
            Products
          </Typography>

          <Grid container spacing={3}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card
                    sx={{
                      height: "100%",
                      "&:hover": { boxShadow: 4, transform: "translateY(-4px)" },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2" color="text.secondary" mb={1}>
                        Short description
                      </Typography>
                      <Typography variant="h6">${product.price}</Typography>
                      <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography textAlign="center" width="100%">
                No products found
              </Typography>
            )}
          </Grid>
        </Box>
      </Box>
      {/* Footer should be rendered by the page/layout after this component */}
    </Box>
  );
};

export default Products;
