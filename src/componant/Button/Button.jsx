import React from 'react'
import { Link } from 'react-router-dom'
"./Button.scss"
import { TiArrowRight } from "react-icons/ti";
const Button = ({ text = "Let's Talk", link = "/", onClick }) => {
    return (
        <>
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
        </>
    )
}

export default Button
