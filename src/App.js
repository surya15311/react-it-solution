import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";


function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
     
     <Footer />
    </div>
    </Router>
  );
}

export default App;
