// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav navbar">
      <div className="container">
        <div className="nav-box join-btn-box">
        <Link className="link join-link nav-box nav-link" to={"/"}><button className="join-btn btn nav-box">Home</button></Link>
        </div>
        <div className="nav-box contact-btn-box">
        <Link className="link contact-link nav-box nav-link" to={"/contact"}><button className="contact-btn btn nav-box">Contact</button></Link>
        </div>
        <div className="nav-box join-btn-box">
        <Link className="link join-link nav-box nav-link" to={"/courses"}><button className="join-btn btn nav-box">Courses</button></Link>
        </div>
        <div className="nav-box contact-btn-box">
        <Link className="link join-link nav-box nav-link" to={"/join"}><button className="join-btn btn nav-box">Join</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
