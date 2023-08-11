import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
function Footer() {
  return (
    <div className='container-fluid'>
        <div className='container footer'>
        <div className='footer-box' >
            <Link className='footer-link' to={"/courses"}>
            <h3 className='footer-them'>Courses</h3>
            </Link>
            <div className='footer-text'>
                <Link className='footer-link' to={"/english"}>English</Link>
                <Link className='footer-link' to={"/russian"}>Russian</Link>
                <Link className='footer-link' to={"/frontend"}>Frontend</Link>
                <Link className='footer-link' to={"/logistic"}>Logistic</Link>
                <Link className='footer-link' to={"/foundationIT"}>Foundation IT</Link>
            </div>
        </div>
        <div className='footer-box' >
            <Link className='footer-link' to={"/courses"}>
            <h3 className='footer-them'>Contact</h3>
            </Link>
            <div className='footer-text'>
                <a className='footer-link' href='tel:+998957799960' >+998 (95) 779 99 60</a>
                <a className='footer-link' href='tel:+998958779960' >+998 (95) 877 99 60</a>
                <a className='footer-link' href='mailto:everestuniversity@gmail.com' >gmail.com</a>
                <a className='footer-link' href='mailto:info@everestuniversity' >info@</a>
            </div>
        </div>
        <div className='footer-box' >
            <Link className='footer-link' to={"/courses"}>
            <h3 className='footer-them'>Social Medias</h3>
            </Link>
            <div className='footer-text'>
            <a className='footer-link' href="https://www.instagram.com/everestuniversity_/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className='footer-link' href="https://t.me/EverestEnglishSchool" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a className='footer-link' href="https://www.instagram.com/everestuniversity_/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
        </div>
    </div>
    <div className='developer'>
        <h3 className='developer-text'>
            Created by <a href='https://t.me/Impulstok' target="_blank" rel="noopener noreferrer">DCI</a>
        </h3>
    </div>
    </div>
  )
}

export default Footer