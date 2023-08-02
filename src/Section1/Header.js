import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
   <>
   <div className='container header d-block text-center'>
      <div className="logo"> 
            <Link className="link logo-img navbar nav-box nav-link" to={"/"}></Link>
          </div>
      <h1 className='header-text'>Build your future with us</h1>
      <div className='container'>
        <div className='video'></div>
      </div>
      <div className='container join-cont'>
        <button className="join-btn header-join-btn btn">
        <i className="fa-solid fa-arrow-right fa-beat"></i>
          <Link className="link join-link" to={"/join"}>Join</Link>
        <i className="fa-sharp fa-solid fa-arrow-left fa-beat"></i>
          </button>
      </div>
    </div>
  </>
  );
};

export default Header;