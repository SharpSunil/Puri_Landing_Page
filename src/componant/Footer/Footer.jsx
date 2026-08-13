import React from "react";

import Logo from "../../assets/main-logo.png";

import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

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
                                href="#"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoInstagram />
                            </a>

                            <a
                                href="#"
                                aria-label="X"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaXTwitter />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>

                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;