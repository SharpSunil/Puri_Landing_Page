import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";
import { TiArrowRight } from "react-icons/ti";

const Button = ({
    text = "Let's Talk",
    link = "/",
    onClick,
}) => {
    const isSectionLink = link.startsWith("#");

    return (
        <>
            {isSectionLink ? (
                <a
                    href={link}
                    className="magnetic-btn"
                    onClick={onClick}
                >
                    <span className="text">{text}</span>

                    <span className="icon">
                        <TiArrowRight />
                    </span>
                </a>
            ) : (
                <Link
                    to={link}
                    className="magnetic-btn"
                    onClick={onClick}
                >
                    <span className="text">{text}</span>

                    <span className="icon">
                        <TiArrowRight />
                    </span>
                </Link>
            )}
        </>
    );
};

export default Button;