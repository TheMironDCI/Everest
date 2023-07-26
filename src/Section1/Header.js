import React from 'react';
import "./Header.css"
const Header = () => {
  return (
    <div className='container d-block text-center'>
      <h1>Logo</h1>
      <h1>Build your future with us</h1>
      <div className='btn-box d-flex'>
        <button className='btn course-btn'>Our courses</button>
        <button className='btn'>Contact</button>
      </div>
    </div>
  );
};

export default Header;