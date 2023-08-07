import React from 'react'
import "./Courses.css"
import { Link } from 'react-router-dom'
function Courses() {
  return (
    <div className='container courses-container d-flex'>
        <div className='courses-icon-box'>
        <Link className='courses-icon-link' to={"/english"}>
          {/* <img src={require("../img/GB flag.png")} alt='English'/>   */}
            <p className='courses-icon-text'>English</p></Link>
        
        </div>
        <div className='courses-icon-box'>
        <Link className='courses-icon-link' to={"/russian"}>
          {/* <img src={require("../img/RU.png")} alt='Russian' />   */}
        <p className='courses-icon-text'>Russian</p></Link>
        
        </div>
        <div className='courses-icon-box'>
          <Link className='courses-icon-link' to={"/frontend"}>
            {/* <img src={require("../img/Prograaming.png")} alt='Frontend' />   */}
        <p className='courses-icon-text'>Frontend</p></Link>
        
        </div>
        <div className='courses-icon-box'>
        <Link className='courses-icon-link' to={"/dispeching"}>
          {/* <img src={require("../img/Dispecher.png")} alt="Dispeching"/>  */}
        <p className='courses-icon-text'>Dispecher</p></Link>
        
        </div>
    </div>
  )
// function engGo() {
//   window.location.assign(<English/>)
// }
}

export default Courses