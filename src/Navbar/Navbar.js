// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav navbar">
      <div className="container">
        <div className="nav-box join-btn-box">
        <Link className="link join-link nav-box nav-link" to={"/"}>Home</Link>
        </div>
        <div className="nav-box contact-btn-box">
        <Link className="link contact-link nav-box nav-link" to={"/contact"}>Contact</Link>
        </div>
        <div className="nav-box join-btn-box">
        <Link className="link join-link nav-box nav-link" to={"/courses"}>Courses</Link>
        </div>
        <div className="nav-box contact-btn-box">
        <Link className="link join-link nav-box nav-link" to={"/join"}>Join</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
