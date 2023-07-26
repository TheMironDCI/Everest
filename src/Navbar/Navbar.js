// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav navbar">
      <div className="container">
        <button className="join-btn btn">
          <Link className="link" to={"/join"}>Join</Link>
          </button>
          <div className="logo">
            <Link className="link" to={"/"}>
              <h1>Logo</h1>
            </Link>
          </div>
        <button className="contact-btn btn"> 
        <Link className="link" to={"/contact"}>Contact</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
