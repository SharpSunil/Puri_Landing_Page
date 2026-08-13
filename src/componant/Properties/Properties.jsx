import React from "react";
import "./Properties.scss";
import PropertyCard from "../PropertyCard/PropertyCard";

import propertyImg1 from "../../assets/img-1.jpg";
import propertyImg2 from "../../assets/img-3.jpg";

const Properties = () => {
    const properties = [
        {
            id: 1,
            image: propertyImg1,
            status: "FEATURED",
            location: "Near ISKCON Temple, Katraj, Pune",
            title: "Katraj's Most Awaited Landmark",
            price: "₹95 L - ₹1.40 Cr*",
            bedrooms: "2 & 3",
            bathrooms: "820–1200",
            area: "2",
            reverse: false,
            description:
                "A boutique residential community near ISKCON Temple, designed for families seeking peace, privacy and premium living. Thoughtfully planned homes combine Vastu-aligned layouts, panoramic views and modern lifestyle amenities."
        },

        {
            id: 2,
            image: propertyImg2,
            status: "FOR SALE",
            location: "Mahesh Society, Bibwewadi, Pune",
            title: "Empire Legacy",
            price: "Price On Request",
            bedrooms: "2 BHK",
            bathrooms: "3 BHK",
            area: "666–1166",
            reverse: true,
            description:
                "A landmark residential project in Mahesh Society, Bibwewadi, offering spacious 2 & 3 BHK homes for comfortable family living. Enjoy a prestigious neighbourhood, excellent connectivity, convenient access to schools, hospitals, shopping and major roads."
        },

        {
            id: 3,
            image: propertyImg1,
            status: "FOR SALE",
            location: "Mohammed Wadi, NIBM Road, Pune",
            title: "Aura Aiwa",
            price: "₹1.53 Cr - ₹2.03 Cr*",
            bedrooms: "3 BHK",
            bathrooms: "3.5 BHK",
            area: "4 BHK",
            reverse: false,
            description:
                "A premium single-tower residential project in Mohammed Wadi, designed for spacious and peaceful living. Featuring well-planned homes, excellent carpet efficiency and modern amenities, it offers an elevated lifestyle in a well-connected location."
        },
    ];

    return (
        <section className="properties-parent parent">
            <div className="shape1 bg-cover"></div>
            <div className="properties-cont cont">

                <div className="heading-main">Where Tradition Meets Luxury</div>
                <div className="desc">
                    Welcome to a boutique residential community near ISKCON Temple, Katraj, where premium living meets cultural richness. Designed for families who appreciate modern luxury and traditional values, this exclusive development offers spacious residences, world-class amenities, and seamless connectivity in one of South Pune's fastest-growing locations.
                </div>
                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        {...property}
                    />
                ))}
            </div>
        </section>
    );
};



export default Properties;