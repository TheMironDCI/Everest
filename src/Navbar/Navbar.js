// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav navbar">
      <div className="container nav-container">
        <div className="nav-box join-btn-box">
        <Link className="link join-link nav-box nav-link" width="100%" to={"/"}><p className="nav-link-in">Home</p></Link>
        </div>
        <div className="nav-box contact-btn-box">
        <Link className="link contact-link nav-box nav-link" to={"/contact"}><p className="nav-link-in">Contact</p></Link>
        </div>
        <div className="nav-box join-btn-box">
        <Link className="link join-link nav-box nav-link" to={"/courses"}><p className="nav-link-in">Courses</p></Link>
        </div>
        <div className="nav-box contact-btn-box">
        <Link className="link join-link nav-box nav-link" to={"/join"}><p className="nav-link-in">Join</p></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
