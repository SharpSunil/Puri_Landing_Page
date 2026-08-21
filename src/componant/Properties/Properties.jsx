import React, { useState } from "react";
import "./Properties.scss";
import PropertyCard from "../PropertyCard/PropertyCard";

import propertyImg1 from "../../assets/img/property1.png";
import propertyImg2 from "../../assets/img/property2.png";
import propertyImg3 from "../../assets/img/property3.png";
import { FiMapPin } from "react-icons/fi";

const Properties = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

    const properties = [
        {
            id: 1,
            image: propertyImg2,
            status: "FOR SALE",
            location: "Mahesh Society, Bibwewadi, Pune",
            title: "Empire Legacy",
            price: "Price On Request",
            bedrooms: "2 BHK",
            bathrooms: "3 BHK",
            area: "666–1166",
            reverse: false,

            description:
                "A landmark residential project in Mahesh Society, Bibwewadi, offering spacious 2 & 3 BHK homes for comfortable family living. Enjoy a prestigious neighbourhood, excellent connectivity, convenient access to schools, hospitals, shopping and major roads.",

            tourData: {
                heading: "Aura Aiwa",

                subHeading: "Premium Living at Mohammed Wadi, NIBM Road",

                developer: "Ranawat Group",

                description:
                    "A premium single-tower residential project designed for the elite segment, offering large, well-planned homes with excellent carpet efficiency, peaceful low-density living and modern amenities for every age group.",

                location:
                    "Mohammed Wadi, NIBM Road, Pune, Maharashtra 411060",

                badge: "Premium Project",

                title: "Designed for the Elite",

                price: "₹1.53 Cr - ₹2.03 Cr*",

                propertyTypes: [
                    {
                        type: "3 BHK",
                        area: "1161 Sq.ft",
                        description: "₹1.53 Cr"
                    },
                    {
                        type: "3.5 BHK",
                        area: "1353 Sq.ft",
                        description: "₹1.78 Cr"
                    },
                    {
                        type: "4 BHK",
                        area: "1543 Sq.ft",
                        description: "₹2.03 Cr"
                    }
                ],

                projectHighlights: [
                    "Single premium tower — no overcrowding",
                    "Designed for the elite segment",
                    "Large, well-planned homes with excellent carpet efficiency",
                    "Peaceful, low-density living with like-minded residents",
                    "Modern amenities for every age group"
                ],

                amenities: [
                    "Modern amenities for every age group",
                    "Well-planned residential spaces",
                    "Premium lifestyle facilities"
                ],

                connectivity: [
                    "Just 20 minutes from Pune Station",
                    "Excellent connectivity to NIBM Road",
                    "Close to reputed schools and hospitals",
                    "Daily conveniences within easy reach"
                ],

                nearby: [
                    "Reputed schools nearby",
                    "Leading hospitals nearby",
                    "Daily conveniences nearby",
                    "Next to Marvel Sangria"
                ],

                possession: "RERA — December 2028",

                siteAddress:
                    "Aura Aiwa by Ranawat Group, Mohammed Wadi, NIBM Road, next to Marvel Sangria, Pune, Maharashtra 411060",

                familyMessage:
                    "Experience peaceful, low-density living in a premium single-tower development designed for those who value spacious homes, privacy and an elevated lifestyle.",

                highlight:
                    "Large Homes. Low Density. Premium Living.",

                booking: [
                    "Schedule Your Site Visit",
                    "Explore Premium 3, 3.5 & 4 BHK Homes",
                    "Connect Directly With Ranawat Group"
                ],

                ctaText: "Schedule Site Visit",

                contact: {
                    name: "Pratik Puri",
                    phone: "9420214437",
                    company: "Ranawat Group",
                    tagline: "Be More. Do More."
                },

                link: "https://maps.app.goo.gl/WupLTvkxJhhxJYXz6?g_st=aw"
            }
        },

        {
            id: 2,
            image: propertyImg1,
            status: "FEATURED",
            location: "Near ISKCON Temple, Katraj, Pune",
            title: "Katraj's Most Awaited Landmark",
            price: "₹95 L - ₹1.40 Cr*",
            bedrooms: "2 & 3",
            bathrooms: "820–1200",
            area: "2",
            reverse: true,

            description:
                "A boutique residential community near ISKCON Temple, designed for families seeking peace, privacy and premium living. Thoughtfully planned homes combine Vastu-aligned layouts, panoramic views and modern lifestyle amenities.",

            tourData: {
                heading: "Katraj's Most Awaited Landmark",

                subHeading: "Where Altitude Meets Attitude — and Traditions Meet Luxury",

                developer: "Premium Boutique Residential Project",

                description:
                    "Welcome to a home not just built for today — but for generations to come. Set on one of Pune's highest points, this boutique project is a rare blend of peace, prestige, and practicality, designed especially for joint families who seek a life of balance, beauty, and belonging.",

                location: "Near ISKCON Temple, Katraj, Pune",

                badge: "New Launch",

                title: "Premium 2 & 3 BHK Homes",

                price: "₹95 L - ₹1.40 Cr*",

                propertyTypes: [
                    {
                        type: "2 BHK",
                        area: "820 Sq.ft",
                        description:
                            "Premium homes designed for comfortable family living"
                    },
                    {
                        type: "3 BHK",
                        area: "Up to 1200 Sq.ft",
                        description:
                            "Spacious residences designed for joint families"
                    }
                ],

                projectHighlights: [
                    "Only 2 exclusive towers across 1.5 acres",
                    "Low-density, high-privacy living",
                    "All homes are southwest-facing",
                    "Unblocked views with year-round light & air",
                    "Vastu-aligned homes",
                    "Grand foyers & pooja niches",
                    "2 balconies in every home",
                    "Dedicated podium & rooftop amenities",
                    "No MHADA within premises"
                ],

                amenities: [
                    "Baby Pool",
                    "Yoga Lawns",
                    "Podium Amenities",
                    "Rooftop Amenities",
                    "Amenities for All Age Groups"
                ],

                connectivity: [
                    "5–10 mins to ISKCON",
                    "5–10 mins to Shatrunjay Derasar",
                    "5–10 mins to Aagam Mandir"
                ],

                nearby: [
                    "Reputed schools & colleges nearby",
                    "VIT within easy reach",
                    "Sinhgad within easy reach",
                    "D-Mart nearby",
                    "Pune's furniture market nearby",
                    "Gujarat Samaj nearby"
                ],

                familyMessage:
                    "You've worked hard, stayed grounded, and nurtured your family with values. Now it's time to upgrade to a home that reflects your journey — a home that speaks of achievement without noise, of comfort without compromise, and of luxury rooted in tradition.",

                highlight:
                    "This Isn't Just a Flat. It's a Feeling of Arrival.",

                booking: [
                    "Limited Inventory",
                    "Priority Site Visit Bookings Open",
                    "Private Preview Experience Available"
                ],

                ctaText: "Book Priority Site Visit",

                link: "https://example.com/katraj-landmark"
            }
        },

        
        {
            id: 3,
            image: propertyImg3,
            status: "FOR SALE",
            location: "Mohammed Wadi, NIBM Road, Pune",
            title: "Aura Aiwa",
            price: "₹1.53 Cr - ₹2.03 Cr*",
            bedrooms: "3 BHK",
            bathrooms: "3.5 BHK",
            area: "4 BHK",
            reverse: false,

            description:
                "A premium single-tower residential project in Mohammed Wadi, designed for spacious and peaceful living. Featuring well-planned homes, excellent carpet efficiency and modern amenities, it offers an elevated lifestyle in a well-connected location.",

            tourData: {
                heading: "Aura Aiwa",

                subHeading: "Premium Living at Mohammed Wadi, NIBM Road",

                developer: "Ranawat Group",

                description:
                    "A premium single-tower residential project designed for the elite segment, offering large, well-planned homes with excellent carpet efficiency, peaceful low-density living and modern amenities for every age group.",

                location:
                    "Mohammed Wadi, NIBM Road, Pune, Maharashtra 411060",

                badge: "Premium Project",

                title: "Designed for the Elite",

                price: "₹1.53 Cr - ₹2.03 Cr*",

                propertyTypes: [
                    {
                        type: "3 BHK",
                        area: "1161 Sq.ft",
                        description: "₹1.53 Cr"
                    },
                    {
                        type: "3.5 BHK",
                        area: "1353 Sq.ft",
                        description: "₹1.78 Cr"
                    },
                    {
                        type: "4 BHK",
                        area: "1543 Sq.ft",
                        description: "₹2.03 Cr"
                    }
                ],

                projectHighlights: [
                    "Single premium tower — no overcrowding",
                    "Designed for the elite segment",
                    "Large, well-planned homes with excellent carpet efficiency",
                    "Peaceful, low-density living with like-minded residents",
                    "Modern amenities for every age group"
                ],

                amenities: [
                    "Modern amenities for every age group",
                    "Well-planned residential spaces",
                    "Premium lifestyle facilities"
                ],

                connectivity: [
                    "Just 20 minutes from Pune Station",
                    "Excellent connectivity to NIBM Road",
                    "Close to reputed schools and hospitals",
                    "Daily conveniences within easy reach"
                ],

                nearby: [
                    "Reputed schools nearby",
                    "Leading hospitals nearby",
                    "Daily conveniences nearby",
                    "Next to Marvel Sangria"
                ],

                possession: "RERA — December 2028",

                siteAddress:
                    "Aura Aiwa by Ranawat Group, Mohammed Wadi, NIBM Road, next to Marvel Sangria, Pune, Maharashtra 411060",

                familyMessage:
                    "Experience peaceful, low-density living in a premium single-tower development designed for those who value spacious homes, privacy and an elevated lifestyle.",

                highlight:
                    "Large Homes. Low Density. Premium Living.",

                booking: [
                    "Schedule Your Site Visit",
                    "Explore Premium 3, 3.5 & 4 BHK Homes",
                    "Connect Directly With Ranawat Group"
                ],

                ctaText: "Schedule Site Visit",

                contact: {
                    name: "Pratik Puri",
                    phone: "9420214437",
                    company: "Ranawat Group",
                    tagline: "Be More. Do More."
                },

                link: "https://maps.app.goo.gl/WupLTvkxJhhxJYXz6?g_st=aw"
            }
        },
    ];

    const handleTakeTour = (property) => {
        setSelectedProperty(property);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedProperty(null);
    };

    return (
        <section className="properties-parent parent">

            <div className="shape1 bg-cover"></div>

            <div className="properties-cont cont">

                <div className="heading-main">
                    Where Tradition Meets Luxury
                </div>

                <div className="desc">
                    Welcome to a boutique residential community near ISKCON
                    Temple, Katraj, where premium living meets cultural
                    richness. Designed for families who appreciate modern
                    luxury and traditional values, this exclusive development
                    offers spacious residences, world-class amenities, and
                    seamless connectivity in one of South Pune's fastest-growing
                    locations.
                </div>

                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        {...property}
                        onTakeTour={() => handleTakeTour(property)}
                    />
                ))}

            </div>

            {/* ================= POPUP ================= */}

            {showPopup && selectedProperty && (
                <div
                    className="tour-popup-overlay"
                    onClick={closePopup}
                >
                    <div
                        className="tour-popup"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            type="button"
                            className="tour-popup-close"
                            onClick={closePopup}
                        >
                            ×
                        </button>

                        {/* IMAGE */}
                        <div className="tour-popup-image">

                            <img
                                src={selectedProperty.image}
                                alt={selectedProperty.title}
                            />

                            <div className="tour-popup-image-overlay"></div>

                            <div className="tour-popup-badge">
                                <span>●</span>
                                {selectedProperty.tourData.badge}
                            </div>

                            <div className="tour-popup-image-content">

                                <span className="project-tag">
                                    {selectedProperty.tourData.developer}
                                </span>

                                <h2>
                                    {selectedProperty.tourData.heading}
                                </h2>

                                <div className="popup-location">
                                    <FiMapPin />
                                    <span>
                                        {selectedProperty.tourData.location}
                                    </span>
                                </div>

                            </div>
                        </div>


                        {/* CONTENT */}
                        <div className="tour-popup-content">

                            <div className="tour-popup-heading">

                                <span className="small-title">
                                    {selectedProperty.tourData.subHeading}
                                </span>

                                <h3>
                                    {selectedProperty.tourData.title}
                                </h3>

                                <div className="heading-line"></div>

                            </div>


                            {/* DESCRIPTION */}
                            <p className="tour-popup-description">
                                {selectedProperty.tourData.description}
                            </p>


                            {/* PROPERTY TYPES */}
                            <div className="property-highlights">

                                {selectedProperty.tourData.propertyTypes.map(
                                    (property, index) => (
                                        <div
                                            className="highlight-item"
                                            key={index}
                                        >
                                            <span className="highlight-icon">
                                                🏠
                                            </span>

                                            <div>
                                                <strong>
                                                    {property.type}
                                                </strong>

                                                <small>
                                                    {property.area}
                                                </small>

                                                <small>
                                                    {property.description}
                                                </small>
                                            </div>
                                        </div>
                                    )
                                )}

                            </div>


                            {/* CONNECTIVITY */}
                            <div className="popup-section">

                                <h4>
                                    🚗 Seamless Connectivity
                                </h4>

                                <div className="popup-list">

                                    {selectedProperty.tourData.connectivity.map(
                                        (item, index) => (
                                            <div key={index}>
                                                <span>✓</span>
                                                <p>{item}</p>
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>


                            {/* NEARBY */}
                            <div className="popup-section">

                                <h4>
                                    📍 Everything Within Reach
                                </h4>

                                <div className="popup-list">

                                    {selectedProperty.tourData.nearby.map(
                                        (item, index) => (
                                            <div key={index}>
                                                <span>✓</span>
                                                <p>{item}</p>
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>


                            {/* BOOKING */}
                            <div className="popup-section booking-section">

                                <h4>
                                    ✨ Direct Booking Benefits
                                </h4>

                                <div className="popup-list">

                                    {selectedProperty.tourData.booking.map(
                                        (item, index) => (
                                            <div key={index}>
                                                <span>✓</span>
                                                <p>{item}</p>
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>


                            {/* HIGHLIGHT */}
                            <div className="popup-highlight">
                                <span>🏙️</span>

                                <p>
                                    {selectedProperty.tourData.highlight}
                                </p>
                            </div>


                            {/* ACTIONS */}
                            <div className="tour-popup-actions">

                                <a
                                    href={selectedProperty.tourData.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="tour-popup-link"
                                >
                                    <span>
                                        Explore Property
                                    </span>

                                    <span className="arrow">
                                        →
                                    </span>
                                </a>

                               

                            </div>

                        </div>

                    </div>
                </div>
            )}

        </section>
    );
};

export default Properties;