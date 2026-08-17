import React from "react";
import { FiMapPin, FiShare2 } from "react-icons/fi";
import { FaBed, FaBath } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import "./PropertyCard.scss";
import Button from "../Button/Button";

const PropertyCard = ({
    image,
    status = "FOR SALE",
    location,
    title,
    price,
    bedrooms,
    bathrooms,
    area,
    description,
    reverse = false,
    onTakeTour,
}) => {
    return (
        <div className={`property-card ${reverse ? "reverse" : ""}`}>

            {/* PROPERTY IMAGE */}
            <div className="property-image">
                <img src={image} alt={title} />
                <div className="property-status">{status}</div>
            </div>

            {/* PROPERTY CONTENT */}
            <div className="property-content">

                {/* LOCATION */}
                <div className="property-location">
                    <FiMapPin />
                    <span>{location}</span>
                </div>

                {/* TITLE */}
                <div className="property-title">
                    {title}
                </div>

                {/* PRICE */}
                <div className="property-price">
                    {price}
                </div>

                {/* PROPERTY FEATURES */}
                <div className="property-features">

                    <div className="feature">
                        <FaBed />
                        <span>
                            {bedrooms}
                            <small> Bedrooms</small>
                        </span>
                    </div>

                    <div className="feature">
                        <FaBath />
                        <span>
                            {bathrooms}
                            <small> Bathrooms</small>
                        </span>
                    </div>

                    <div className="feature">
                        <MdSquareFoot />
                        <span>
                            {area}
                            <small> Square Feet</small>
                        </span>
                    </div>

                </div>

                {/* DESCRIPTION */}
                <div className="property-description">
                    {description}
                </div>

                {/* ACTION BUTTONS */}
                <div className="property-actions">

                    {/* TAKE A TOUR */}
                    <Button
                        text="Take A Tour"
                        link="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onTakeTour();
                        }}
                    />

                    {/* SHARE */}
                    <button
                        type="button"
                        className="share-button"
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: title,
                                    text: `Check out ${title} - ${location}`,
                                    url: window.location.href,
                                });
                            } else {
                                navigator.clipboard.writeText(
                                    window.location.href
                                );

                                alert("Property link copied!");
                            }
                        }}
                    >
                        <FiShare2 />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;