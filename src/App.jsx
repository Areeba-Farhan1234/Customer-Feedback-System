import "./App.css";

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feedbacks from "./pages/Feedbacks";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      {/* Header Section Component */}
      <Header />

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here as needed */}
      </Routes>

      {/* Footer Section Component */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
