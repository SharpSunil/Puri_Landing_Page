import React from "react";

import Logo from "../../assets/main-logo.png";

import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <footer className="footer-parent parent">
                <div className="footer-cont cont">

                    {/* Left Footer */}
                    <div className="left-footer">

                        {/* Logo */}
                        <a href="#home" className="logo">
                            <img
                                src={Logo}
                                alt="Logo"
                            />
                        </a>

                        {/* Copyright */}
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

                    {/* Right Footer */}
                    <div className="right-footer">

                        {/* Footer Navigation */}
                        <nav className="top">

                            <a href="#home">
                                Home
                            </a>

                            <a href="#about">
                                About
                            </a>

                            <a href="#properties">
                                Properties
                            </a>

                            <a href="#services">
                                Service
                            </a>

                            <a href="#contact">
                                Contact
                            </a>

                        </nav>

                        {/* Social Media */}
                        <div className="bottom">
                            <a
                                href="https://www.youtube.com/@KPuriandAssociates"
                                aria-label="Youtube"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiYoutube />
                            </a>

                            <a
                                href="https://www.facebook.com/profile.php?id=61592706615704"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.instagram.com/kpuriandassociates/"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoInstagram />
                            </a>





                        </div>

                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;