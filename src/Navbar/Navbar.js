// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav navbar">
      <div className="container">
        <button className="join-btn btn">
          <Link className="link join-link" to={"/join"}>Join</Link>
          </button>
          <div className="logo">
            <Link className="link navbar" to={"/"}>
              <img src="../img/logo192.png" alt="logo" />
            </Link>
          </div>
        <button className="contact-btn btn"> 
        <Link className="link contact-link" to={"/contact"}>Contact</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
