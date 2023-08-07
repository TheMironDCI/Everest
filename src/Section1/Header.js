import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
   <>
   <div className='container header d-block text-center'>
      <div className="logo"> 
            <Link className="link logo-img navbar nav-box" to={"/"}></Link>
          </div>
      <h1 className='header-text'>Build your future with us</h1>
      <div className='container'>
        <div className='video'>
        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/76XOvyFsI2M"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>        </div>
      </div>
      <div className='container join-cont'>
        <Link className="link join-link" to={"/join"}><button className="header-join-btn btn">
        <i className="fa-solid fa-arrow-right fa-beat"></i>
          Join
        <i className="fa-sharp fa-solid fa-arrow-left fa-beat"></i>
          </button></Link>
      </div>
    </div>
  </>
  );
};

export default Header;