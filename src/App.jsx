// App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Pricing from "./Components/Pricing/Pricing";
import HelpCenter from "./Components/HelpCenter/HelpCenter";
import AboutUs from "./Components/AboutUs/AboutUs";
import Blog from "./Components/Blog/Blog";
import MediaKit from "./Components/MediaKit/MediaKit";
import ContactUs from "./Components/ContactUs/ContactUs";
import Homepage from "./Components/HomePage/Homepage";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/Signup";
import Error from "./Components/Error/Error";
import Products from "./Components/Products/Products";
import Forums from "./Components/Forums/Forums";
import TermsAndServices from "./Components/TermsAndServices/TermsAndServices";
import Developer from "./Components/Developer/Developer";
import Integration from "./Components/Integration/Integration";
import Affiliate from "./Components/Affiliate/Affiliate";
import Privacy from "./Components/Privacy/Privacy";
import Studio from "./Components/Studio/Studio";
import VoD from "./Components/VoD/VoD";
import Chat from "./Components/Chat/Chat";
import OTT from "./Components/OTT/OTT";
import MultiStream from "./Components/MultiStreaming/MultiStreaming";
import CheckoutPage from "./Components/Checkout/CheckoutPage";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme preference
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  return (
    <div className={theme === "dark" ? "darkTheme" : "lightTheme"}>
      <Router>
        <ScrollToTop />
        <Header toggleTheme={toggleTheme} checked={theme === "dark"} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mediaKit" element={<MediaKit />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/terms" element={<TermsAndServices />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/developerPortal" element={<Developer />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/VoD" element={<VoD />} />
          <Route path="/multiStream" element={<MultiStream />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/ott" element={<OTT />} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
