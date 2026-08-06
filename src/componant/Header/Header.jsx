import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/main-logo.png";

import { FiPhoneCall } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const closeMenu = () => {
        setMobileMenu(false);
    };

    return (
        <>
            {/* Overlay */}
            {mobileMenu && (
                <div className="menu-overlay" onClick={closeMenu}></div>
            )}

            <header className="header-parent parent">
                <div className="header-cont cont">
                    {/* Logo */}
                    <Link to="#" className="logo">
                        <img src={Logo} alt="Logo" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="right-side">
                        <ul className="menu">
                            <li className="active">HOME</li>
                            <li>ABOUT</li>
                            <li>PROPERTIES</li>
                            <li>SERVICES</li>
                            <li>CONTACT</li>
                        </ul>

                        <a href="tel:+917083445507" className="contact">
                            <FiPhoneCall />
                            <span>+91 70834 45507</span>
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="menu-btn"
                        onClick={() => setMobileMenu(!mobileMenu)}
                    >
                        <CiMenuFries />
                    </button>

                    {/* Mobile Menu */}
                    <div className={`mobile-menu ${mobileMenu ? "show" : ""}`}>
                        <div className="mobile-header">
                            <button className="close-btn" onClick={closeMenu}>
                                <IoClose />
                            </button>
                        </div>

                        <ul className="menu">
                            <li onClick={closeMenu}>HOME</li>
                            <li onClick={closeMenu}>ABOUT</li>
                            <li onClick={closeMenu}>PROPERTIES</li>
                            <li onClick={closeMenu}>SERVICES</li>
                            <li onClick={closeMenu}>CONTACT</li>
                        </ul>

                        <a
                            href="tel:+917083445507"
                            className="contact"
                            onClick={closeMenu}
                        >
                            <FiPhoneCall />
                            <span>+91 70834 45507</span>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;