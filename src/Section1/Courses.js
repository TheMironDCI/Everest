import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <div className="container courses-container d-flex">
      <div className="courses-icon-box">
        <Link className="courses-icon-link" to={"/english"}>
          <p className="courses-icon-text">English</p>
          <div className="courses-icon-in-box">
            <p className="price">Price : 000 so'm</p>
            <div className="line"></div>
            <p className="duration">* month</p>
          </div>
          <div className="courses-icon-in-box-line">
            <div className="line"></div>
            <p className="text">More information <i className="fa-solid fa-arrow-right fa-beat"></i></p>
          </div>
        </Link>
      </div>
      <div className="courses-icon-box">
        <Link className="courses-icon-link" to={"/russian"}>
          <p className="courses-icon-text">Russian</p>
          <div className="courses-icon-in-box">
            <p className="price">Price : 000 so'm</p>
            <div className="line"></div>
            <p className="duration">* month</p>
          </div>
          <div className="courses-icon-in-box-line">
            <div className="line"></div>
            <p className="text">More information <i className="fa-solid fa-arrow-right fa-beat"></i></p>
          </div>
        </Link>
      </div>
      <div className="courses-icon-box">
        <Link className="courses-icon-link" to={"/frontend"}>
          <p className="courses-icon-text">Frontend</p>
          <div className="courses-icon-in-box">
            <p className="price">Price : 000 so'm</p>
            <div className="line"></div>
            <p className="duration">* month</p>
          </div>
          <div className="courses-icon-in-box-line">
            <div className="line"></div>
            <p className="text">More information <i className="fa-solid fa-arrow-right fa-beat"></i></p>
          </div>
        </Link>
      </div>
      <div className="courses-icon-box">
        <Link className="courses-icon-link" to={"/dispeching"}>
          <p className="courses-icon-text">Dispecher</p>
          <div className="courses-icon-in-box">
            <p className="price">Price : 000 so'm</p>
            <div className="line"></div>
            <p className="duration">* month</p>
          </div>
          <div className="courses-icon-in-box-line">
            <div className="line"></div>
            <p className="text">More information <i className="fa-solid fa-arrow-right fa-beat"></i></p>
          </div>
        </Link>
      </div>
      <div className="courses-icon-box">
        <Link className="courses-icon-link" to={"/foundationIT"}>
          <p className="courses-icon-text">Foundation IT</p>
          <div className="courses-icon-in-box">
            <p className="price">Price : 000 so'm</p>
            <div className="line"></div>
            <p className="duration">* month</p>
          </div>
          <div className="courses-icon-in-box-line">
            <div className="line"></div>
            <p className="text">More information <i className="fa-solid fa-arrow-right fa-beat"></i></p>
          </div>
        </Link>
      </div>
    </div>
  );
  // function engGo() {
  //   window.location.assign(<English/>)
  // }
}

export default Courses;
