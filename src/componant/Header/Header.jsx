import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/main-logo.png";

import { Link } from "react-router-dom";

import { FiPhoneCall } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const closeMenu = () => {
        setMobileMenu(false);
    };

    const handleMenuClick = () => {
        setMobileMenu(false);
    };

    return (
        <>
            {/* Overlay */}
            {mobileMenu && (
                <div
                    className="menu-overlay"
                    onClick={closeMenu}
                ></div>
            )}

            <header className="header-parent parent">
                <div className="header-cont cont">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="logo"
                        onClick={handleMenuClick}
                    >
                        <img src={Logo} alt="Logo" />
                    </Link>


                    {/* Desktop Menu */}
                    <div className="right-side">

                        <ul className="menu">

                            <li className="active">
                                <Link
                                    to="/"
                                    onClick={handleMenuClick}
                                >
                                    HOME
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/#about"
                                    onClick={handleMenuClick}
                                >
                                    ABOUT
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/#properties"
                                    onClick={handleMenuClick}
                                >
                                    PROPERTIES
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/#services"
                                    onClick={handleMenuClick}
                                >
                                    SERVICES
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/#contact"
                                    onClick={handleMenuClick}
                                >
                                    CONTACT
                                </Link>
                            </li>

                        </ul>


                        {/* Phone */}
                        <a
                            href="tel:+919420214437"
                            className="contact"
                        >
                            <FiPhoneCall />
                            <span>9420214437</span>
                        </a>

                    </div>


                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="menu-btn"
                        onClick={() => setMobileMenu(!mobileMenu)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenu ? (
                            <IoClose />
                        ) : (
                            <CiMenuFries />
                        )}
                    </button>


                    {/* Mobile Menu */}
                    <div
                        className={`mobile-menu ${
                            mobileMenu ? "show" : ""
                        }`}
                    >

                        {/* Mobile Header */}
                        <div className="mobile-header">

                            <button
                                type="button"
                                className="close-btn"
                                onClick={closeMenu}
                                aria-label="Close menu"
                            >
                                <IoClose />
                            </button>

                        </div>


                        {/* Mobile Navigation */}
                        <ul className="menu">

                            <li>
                                <Link
                                    to="/"
                                    onClick={handleMenuClick}
                                >
                                    HOME
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/#about"
                                    onClick={handleMenuClick}
                                >
                                    ABOUT
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/#properties"
                                    onClick={handleMenuClick}
                                >
                                    PROPERTIES
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/#services"
                                    onClick={handleMenuClick}
                                >
                                    SERVICES
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/#contact"
                                    onClick={handleMenuClick}
                                >
                                    CONTACT
                                </Link>
                            </li>

                        </ul>


                        {/* Mobile Phone */}
                        <a
                            href="tel:+919420214437"
                            className="contact"
                        >
                            <FiPhoneCall />
                            <span>9420214437</span>
                        </a>

                    </div>

                </div>
            </header>
        </>
    );
};

export default Header;