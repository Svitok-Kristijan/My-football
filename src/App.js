import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Shop from "./components/shop/shop.component";
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
