import React from "react";
import "./navbar.css";
import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();
  const toHomeHandler = () => {
    navigation("/");
  };
  return (
    <div className="navbar">
      <div className="links links-left">
        <Link to="/news" className="link">
          News
        </Link>
        <Link to="/shop" className="link">
          Shop
        </Link>
      </div>
      <div onClick={toHomeHandler} className="logo2">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="links links-right">
        <Link to="/aboutus" className="link">
          About Us
        </Link>
        <Link to="/auth" className="link">
          Profile
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
