import React, { useState, useEffect } from "react";
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
  Divider,
  FormGroup,
  Modal,
  Rating,
  IconButton,
  Button,
  Collapse,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";

import mens from "../data/Mens";
import womens from "../data/Womens";
import electronics from "../data/Electronics";
import furniture from "../data/Furniture";
import mobiles from "../data/Mobiles";
import books from "../data/Books";
import { SizeChart } from "../SizeChart";

const categoryMap = {
  Electronics: electronics,
  Fashion: { Men: mens, Women: womens },
  Furniture: furniture,
  Mobiles: mobiles,
  Books: books,
};

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [availability, setAvailability] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSizeChart, setShowSizeChart] = useState(false);

  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const safeArray = (data) => {
    if (Array.isArray(data)) return data;
    if (data && typeof data === "object")
      return Object.values(data).flatMap((arr) => arr);
    return [];
  };

  const getProductsByCategory = () => {
    if (!selectedCategory) {
      return Object.values(categoryMap).flatMap((value) => {
        if (Array.isArray(value)) return value;
        if (value && value.Men && value.Women) {
          return [...safeArray(value.Men), ...safeArray(value.Women)];
        }
        return [];
      });
    }

    if (selectedCategory === "Fashion") {
      if (selectedSubCategory && categoryMap.Fashion[selectedSubCategory]) {
        return safeArray(categoryMap.Fashion[selectedSubCategory]);
      }
      return [
        ...safeArray(categoryMap.Fashion.Men),
        ...safeArray(categoryMap.Fashion.Women),
      ];
    }

    return safeArray(categoryMap[selectedCategory]);
  };

  const filteredProducts = getProductsByCategory().filter((p) => {
    const matchBrand = selectedBrand ? p.brand === selectedBrand : true;
    const matchAvailability = availability
      ? p.availability === availability
      : true;
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchRating = selectedRating ? p.rating >= selectedRating : true;
    return matchBrand && matchAvailability && matchPrice && matchRating;
  });

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setShowSizeChart(false);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setOpenModal(false);
    setShowSizeChart(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category !== "Fashion") setSelectedSubCategory("");
  };

  const handleSubCategoryChange = (subCat) => {
    setSelectedSubCategory(subCat);
  };

  const handleClearFilters = () => {
    setSelectedCategory("");
    setSelectedSubCategory("");
    setPriceRange([0, 1000]);
    setSelectedBrand("");
    setAvailability("");
    setSelectedRating(0);
  };

  const handlePrevImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const getGender = (product) => {
    if (product.id.startsWith("men")) return "Men";
    if (product.id.startsWith("women")) return "Women";
    return null;
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar Filters */}
      <Box
        sx={{
          width: 260,
          p: 2,
          borderRight: "1px solid #ddd",
          bgcolor: "#f8f8f8",
          fontFamily: "FiraSans",
          fontSize: {
            xs: "1rem",
            sm: "1.1rem",
            md: "1.2rem",
            lg: "1.2rem",
          },
        }}
      >
        <Typography
          variant="h6"
          mb={2}
          sx={{
            fontFamily: "FiraSans",
            fontSize: {
              xs: "1.9rem",
              sm: "2rem",
              md: "2.1rem",
              lg: "2.2rem",
            },
          }}
        >
          Filters
        </Typography>

        {/* Category Filter */}
        <Typography
          fontWeight="bold"
          sx={{
            fontFamily: "FiraSans",
            fontSize: {
              xs: "1.2rem",
              sm: "1.3rem",
              md: "1.4rem",
              lg: "1.5rem",
            },
          }}
        >
          Category
        </Typography>
        <FormGroup>
          {Object.keys(categoryMap).map((cat) => (
            <FormControlLabel
              key={cat}
              control={
                <Checkbox
                  checked={selectedCategory === cat}
                  onChange={() => handleCategoryChange(cat)}
                />
              }
              label={cat}
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "FiraSans",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                  },
                  fontWeight: "bold",
                },
              }}
            />
          ))}
        </FormGroup>

        {/* Subcategory for Fashion */}
        {selectedCategory === "Fashion" && (
          <>
            <Divider sx={{ my: 1 }} />
            <Typography
              fontWeight="bold"
              sx={{
                fontFamily: "FiraSans",
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.2rem",
                  lg: "1.2rem",
                },
              }}
            >
              Sub Category
            </Typography>
            <FormGroup>
              {Object.keys(categoryMap.Fashion).map((subCat) => (
                <FormControlLabel
                  key={subCat}
                  control={
                    <Checkbox
                      checked={selectedSubCategory === subCat}
                      onChange={() => handleSubCategoryChange(subCat)}
                    />
                  }
                  label={subCat}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: "FiraSans",
                      fontSize: {
                        xs: "0.95rem",
                        sm: "1rem",
                        md: "1.05rem",
                      },
                      fontWeight: "bold",
                    },
                  }}
                />
              ))}
            </FormGroup>
          </>
        )}

        <Divider sx={{ my: 1 }} />

        {/* Price Slider */}
        <Typography
          fontWeight="bold"
          sx={{
            fontFamily: "FiraSans",
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
              lg: "1.2rem",
            },
          }}
        >
          Price Range
        </Typography>
        <Slider
          value={priceRange}
          min={0}
          max={1000}
          onChange={(e, val) => setPriceRange(val)}
          valueLabelDisplay="auto"
        />

        <Divider sx={{ my: 1 }} />

        {/* Brand Filter */}
        <Typography
          fontWeight="bold"
          sx={{
            fontFamily: "FiraSans",
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
              lg: "1.2rem",
            },
          }}
        >
          Brand
        </Typography>
        <FormGroup>
          {["Samsung", "Apple"].map((brand) => (
            <FormControlLabel
              key={brand}
              control={
                <Checkbox
                  checked={selectedBrand === brand}
                  onChange={() => setSelectedBrand(brand)}
                />
              }
              label={brand}
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "FiraSans",
                  fontSize: {
                    xs: "0.95rem",
                    sm: "1rem",
                    md: "1.05rem",
                  },
                  fontWeight: "bold",
                },
              }}
            />
          ))}
        </FormGroup>

        <Divider sx={{ my: 1 }} />

        {/* Rating Filter */}
        <Typography
          fontWeight="bold"
          sx={{
            fontFamily: "FiraSans",
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
              lg: "1.2rem",
            },
          }}
        >
          Minimum Rating
        </Typography>
        <Rating
          value={selectedRating}
          onChange={(e, newValue) => setSelectedRating(newValue)}
          precision={1}
        />

        <Divider sx={{ my: 1 }} />

        {/* Availability Filter */}
        <Typography
          fontWeight="bold"
          sx={{
            fontFamily: "FiraSans",
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
              lg: "1.2rem",
            },
          }}
        >
          Availability
        </Typography>
        <FormGroup>
          {["In Stock", "Out of Stock"].map((status) => (
            <FormControlLabel
              key={status}
              control={
                <Checkbox
                  checked={availability === status}
                  onChange={() => setAvailability(status)}
                />
              }
              label={status}
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "FiraSans",
                  fontSize: {
                    xs: "0.95rem",
                    sm: "1rem",
                    md: "1.05rem",
                  },
                  fontWeight: "bold",
                },
              }}
            />
          ))}
        </FormGroup>

        <Divider sx={{ my: 2 }} />

        {/* Clear Filters Button */}
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={handleClearFilters}
          sx={{
            fontFamily: "FiraSans",
            fontWeight: "bold",
            fontSize: {
              xs: "0.90rem",
              sm: "0.95rem",
              md: "1rem",
              lg: "1rem",
            },
          }}
        >
          Clear All Filters
        </Button>
      </Box>

      {/* Product Grid */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{
            fontFamily: "FiraSans",
            fontSize: {
              xs: "2.7rem",
              sm: "2.9rem",
              md: "3.2rem",
              lg: "3.2rem",
            },
          }}
        >
          Products
        </Typography>

        <Grid container spacing={3}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  onClick={() => handleOpenModal(product)}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { boxShadow: 4 },
                    transition: "0.3s",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.images ? product.images[0] : product.image}
                    alt={product.name}
                    height={200}
                  />
                  <CardContent>
                    <Typography
                      fontWeight="bold"
                      sx={{
                        fontFamily: "FiraSans",
                        fontSize: {
                          xs: "1.1rem",
                          sm: "1.2rem",
                          md: "1.3rem",
                          lg: "1.4rem",
                        },
                        color: "#222",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "FiraSansSemiBold",
                        fontSize: {
                          xs: "0.9rem",
                          sm: "1rem",
                          md: "1.05rem",
                          lg: "1.1rem",
                        },
                        color: "#555",
                      }}
                    >
                      {product.brand} • {product.availability}
                    </Typography>
                    <Rating value={product.rating} readOnly size="small" />
                    <Typography
                      fontWeight="bold"
                      sx={{
                        fontFamily: "FiraSansSemiBold",
                        fontSize: {
                          xs: "1rem",
                          sm: "1.1rem",
                          md: "1.2rem",
                          lg: "1.2rem",
                        },
                        color: "#000",
                      }}
                    >
                      ${product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        mt: 1,
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
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography
              sx={{
                fontFamily: "FiraSans",
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.2rem",
                  lg: "1.2rem",
                },
              }}
            >
              No products found
            </Typography>
          )}
        </Grid>
      </Box>

      {/* Product Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            width: { xs: "95%", sm: "85%", md: "70%" },
            maxHeight: "90vh",
            overflowY: "auto",
            bgcolor: "#fff",
            p: 3,
            mx: "auto",
            mt: { xs: "5%", sm: "2%" },
            borderRadius: 2,
            position: "relative",
            textAlign: "center",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {selectedProduct && (
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                mb={2}
                sx={{
                  fontFamily: "FiraSans",
                  fontSize: {
                    xs: "1.4rem",
                    sm: "1.6rem",
                    md: "1.8rem",
                    lg: "2rem",
                  },
                }}
              >
                {selectedProduct.name}
              </Typography>

              {/* Multi-image carousel */}
              {selectedProduct.images && selectedProduct.images.length > 1 ? (
                <Box sx={{ position: "relative" }}>
                  <img
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "60vh",
                      objectFit: "contain",
                      borderRadius: 8,
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    <Button
                      onClick={handlePrevImage}
                      variant="outlined"
                      sx={{
                        fontFamily: "FiraSans",
                        fontSize: {
                          xs: "0.80rem",
                          sm: "0.82rem",
                          md: "0.85rem",
                          lg: "0.90rem",
                        },
                      }}
                    >
                      Prev
                    </Button>
                    <Button
                      onClick={handleNextImage}
                      variant="outlined"
                      sx={{
                        fontFamily: "FiraSans",
                        fontSize: {
                          xs: "0.80rem",
                          sm: "0.82rem",
                          md: "0.85rem",
                          lg: "0.90rem",
                        },
                      }}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              ) : (
                <img
                  src={
                    selectedProduct.images
                      ? selectedProduct.images[0]
                      : selectedProduct.image
                  }
                  alt={selectedProduct.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "60vh",
                    objectFit: "contain",
                    borderRadius: 8,
                    marginBottom: 16,
                  }}
                />
              )}

              <Typography
                mt={2}
                sx={{
                  fontFamily: "FiraSanssemiBold",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                  },
                  color: "#555",
                }}
              >
                {selectedProduct.description}
              </Typography>

              {/* Size Chart toggle */}
              {getGender(selectedProduct) && (
                <Button
                  variant="outlined"
                  sx={{
                    my: 2,
                    fontFamily: "FiraSans",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  }}
                  onClick={() => setShowSizeChart((prev) => !prev)}
                >
                  {showSizeChart ? "Hide Size Chart" : "Show Size Chart"}
                </Button>
              )}

              <Collapse in={showSizeChart}>
                {getGender(selectedProduct) &&
                  ["Inches", "CM"].map((unit) => (
                    <Box key={unit} sx={{ mb: 2, overflowX: "auto" }}>
                      <Typography
                        fontWeight="bold"
                        sx={{
                          fontFamily: "FiraSans",
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                        }}
                      >
                        {unit}
                      </Typography>
                      <Box
                        component="table"
                        sx={{
                          borderCollapse: "collapse",
                          width: "100%",
                          fontFamily: "FiraSans",
                          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        }}
                      >
                        <Box component="thead">
                          <Box component="tr">
                            {["Size", "Bust", "Waist", "Length"].map(
                              (heading) => (
                                <Box
                                  component="th"
                                  key={heading}
                                  sx={{
                                    border: "1px solid #ddd",
                                    p: 1,
                                    textAlign: "center",
                                  }}
                                >
                                  {heading}
                                </Box>
                              )
                            )}
                          </Box>
                        </Box>
                        <Box component="tbody">
                          {SizeChart[getGender(selectedProduct)][unit].map(
                            (row) => (
                              <Box
                                component="tr"
                                key={row.size}
                                sx={{
                                  "&:nth-of-type(even)": { bgcolor: "#f5f5f5" },
                                }}
                              >
                                <Box
                                  component="td"
                                  sx={{
                                    border: "1px solid #ddd",
                                    p: 1,
                                    textAlign: "center",
                                  }}
                                >
                                  {row.size}
                                </Box>
                                <Box
                                  component="td"
                                  sx={{
                                    border: "1px solid #ddd",
                                    p: 1,
                                    textAlign: "center",
                                  }}
                                >
                                  {row.bust}
                                </Box>
                                <Box
                                  component="td"
                                  sx={{
                                    border: "1px solid #ddd",
                                    p: 1,
                                    textAlign: "center",
                                  }}
                                >
                                  {row.waist}
                                </Box>
                                <Box
                                  component="td"
                                  sx={{
                                    border: "1px solid #ddd",
                                    p: 1,
                                    textAlign: "center",
                                  }}
                                >
                                  {row.length}
                                </Box>
                              </Box>
                            )
                          )}
                        </Box>
                      </Box>
                    </Box>
                  ))}
              </Collapse>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 2,
                  fontFamily: "FiraSansSemiBold",
                  fontSize: {
                    xs: "1rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                  },
                }}
              >
                Add to Cart
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Products;
