import React from "react";
import "./navbar.css";
import logo from "./logo.svg";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/shop" className="link">
          Shop
        </Link>
      </div>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="links">
        <Link to="/" className="link">
          About Us
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
