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
import mens from "../data/mens";
import womens from "../data/womens";
import electronics from "../data/electronics";
import furniture from "../data/furniture";
import mobiles from "../data/mobiles";

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

  // Map category names to imported files
  const categoryMap = {
    Men: mens,
    Women: womens,
    Electronics: electronics,
    Furniture: furniture,
    Mobiles: mobiles,
  };

  // Get products in selected category & price range
  const getProductsByCategoryAndRange = () => {
    if (!selectedCategory) {
      // Combine all categories if none selected
      let allProducts = [];
      Object.values(categoryMap).forEach((cat) => {
        Object.values(cat).forEach((slot) => allProducts.push(...slot));
      });
      return allProducts;
    }

    const categoryData = categoryMap[selectedCategory];
    if (!categoryData) return [];

    let productsInRange = [];
    Object.entries(categoryData).forEach(([rangeKey, products]) => {
      const [min, max] = rangeKey.split("-").map(Number);
      // Include slot if it overlaps with slider range
      if (priceRange[1] >= min && priceRange[0] <= max) {
        productsInRange.push(...products);
      }
    });

    return productsInRange;
  };

  const filteredProducts = getProductsByCategoryAndRange().filter(
    (product) => {
      const matchBrand = selectedBrand ? product.brand === selectedBrand : true;
      const matchAvailability = availability
        ? product.availability === availability
        : true;
      const matchPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchBrand && matchAvailability && matchPrice;
    }
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#fff" }}>
      <Box
        component="main"
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "stretch",
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
            {["Mobiles", "Men", "Women", "Electronics", "Furniture"].map((cat) => (
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
            {["Samsung", "Apple",].map((brand) => (
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
                      <Typography variant="body2" color="text.secondary">
                        Rating: {product.rating} ⭐
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
    </Box>
  );
};

export default Products;
