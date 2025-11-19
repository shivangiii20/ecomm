import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";

import AdminLayout from "./pages/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminManageProducts from "./pages/AdminManageProducts";
import AdminManageUsers from "./pages/AdminManageUsers";
import AdminManageOrders from "./pages/AdminManageOrders";
import AdminSettings from "./pages/AdminSettings";
import Checkout from "./pages/Checkout";

import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Signup from "./pages/Signup";

function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
         <Route path="/checkout" element={<Checkout />} />

        {/* ADMIN ROUTES WITH SIDEBAR LAYOUT */}
        <Route path="/admin" element={<AdminLayout />}>
        
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-products" element={<AdminManageProducts />} />
          <Route path="manage-users" element={<AdminManageUsers />} />
          <Route path="manage-orders" element={<AdminManageOrders />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
