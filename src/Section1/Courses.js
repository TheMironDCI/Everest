import React from 'react'
import "./Courses.css"
function Courses() {
  return (
    <div className='container courses-container d-flex'>
        <div className='courses-icon-box'>
        <img src={require("../img/GB flag.png")} alt='English'/>  
            <p className='courses-icon-text'>English</p>
        </div>
        <div className='courses-icon-box'>
        <img src={require("../img/RU.png")} alt='Russian' />  
        <p className='courses-icon-text'>Russian</p>
        </div>
        <div className='courses-icon-box'>
        <img src={require("../img/Prograaming.png")} alt='Frontend' />  
        <p className='courses-icon-text'>Frontend</p>
        </div>
        <div className='courses-icon-box'>
        <img src={require("../img/Dispecher.png")} alt="Dispeching"/> 
        <p className='courses-icon-text'>Dispecher</p>
        </div>
    </div>
  )
// function engGo() {
//   window.location.assign(<English/>)
// }
}

export default Courses