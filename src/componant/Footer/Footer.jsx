import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../assets/main-logo.png";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


import "./Footer.scss"
const Footer = () => {
  return (
    <>
      <div className="footer-parent parent">
        <div className="footer-cont cont">
          <div className="left-footer">
            {/* Logo */}
            <Link to="#" className="logo">
              <img src={Logo} alt="Logo" />
            </Link>
            <div className="copyright">
              © Copyright 2026. Made by{" "}
              <a
                href="https://sunilshelke.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sunil Shelke
              </a>
            </div>
          </div>
          <div className="right-footer">
            <div className="top">
              <Link to="#"><li>Home</li> </Link>
              <Link to="#"> <li>About</li></Link>
              <Link to="#"><li>Properties</li></Link>
              <Link to="#"> <li>Service</li></Link>
              <Link to="#"><li>Contact</li></Link>
            </div>
            <div className="bottom">
              <a href='#' ><FaFacebookF /></a>
              <a href='#' ><IoLogoInstagram /></a>
              <a href='#' ><FaXTwitter /></a>
              <a href='#' ><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
