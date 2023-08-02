import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container container">
      <h1 className="contact-text">Contact</h1>
      <div className="container-contact-box">
        <div className="contact-box phones-box">
          <div className="contact-texts">
            <p className="phone-number">
              <Link className="contact-links" to={"tel"}>
              <i class="fa-solid fa-phone contact-text-icon"></i>
                +998 (95) 779 99 60
              </Link>
            </p>
            <p className="phone-number">
              <Link className="contact-links" to={"tel"}>
              <i class="fa-solid fa-phone contact-text-icon"></i>
                +998 (95) 899 99 60
              </Link>
            </p>
          </div>
        </div>
        <div className="contact-box emails-box">
          <div className="contact-texts">
            <p className="emails">
              <Link className="contact-links" to={"everestuniversity@gmail.com"}>
                <i class="fa-solid fa-envelope contact-text-icon"></i>
                everestuniversity@gmail.com
              </Link>
            </p>
            <p className="emails">
              <Link className="contact-links" to={"info@everestuniversity"}>
              <i class="fa-solid fa-envelope contact-text-icon"></i>
                info@everestuniversity
              </Link>
            </p>
          </div>
        </div>
        <div className="contact-box s-media-box">
          <div className="contact-texts">
            <p className="s-medias">
              <Link className="contact-links" to={"s.com"}>
              <i class="fa-brands fa-instagram contact-text-icon"></i>
                Instagram
              </Link>
            </p>
            <p className="s-medias">
              <Link className="contact-links" to={"s.com"}>
              <i class="fa-brands fa-facebook contact-text-icon"></i>
                Facebook
              </Link>
            </p>
          </div>
        </div>
        <div className="contact-box"></div>
      </div>
    </div>
  );
};

export default Contact;
