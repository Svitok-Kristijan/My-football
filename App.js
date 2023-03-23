import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Shop from "./components/shop/shop.component";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import AboutUs from "./components/aboutus/aboutUs";
import News from "./components/news/news";
import Descriptions from "./components/news-description/news-description";
import Authentication from "./components/auth/auth";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/descriptions" element={<Descriptions />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </Router>
  );
}

export default App;
