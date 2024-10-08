import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // 추가
import Collection from "./pages/Collection"; // 추가
import About from "./pages/About"; // 추가
import Product from "./pages/Product"; // 추가
import Cart from "./pages/Cart"; // 추가
import Login from "./pages/Login"; // 추가
import PlaceOrder from "./pages/PlaceOrder"; // 추가
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ShopContextProvider from "./context/shopContext";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
