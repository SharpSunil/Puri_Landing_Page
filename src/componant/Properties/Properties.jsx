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
            status: "FOR SALE",
            location: "30 Beverly Hills, Los Angeles",
            title: "Best Delux Home",
            price: "$110,000,000",
            bedrooms: 8,
            bathrooms: 9,
            area: "9542",
            reverse: false,
            description:
                "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.",
        },

        {
            id: 2,
            image: propertyImg2,
            status: "FOR RENT",
            location: "5 Park Avenue, New York",
            title: "Luxury Modern Villa",
            price: "$2,500,000",
            bedrooms: 5,
            bathrooms: 4,
            area: "6200",
            reverse: true,
            description:
                "Beautiful modern property located in a premium neighborhood with excellent amenities and outstanding architecture.",
        },

        {
            id: 3,
            image: propertyImg1,
            status: "FOR SALE",
            location: "50 Sunset Boulevard, Miami",
            title: "Modern Beach House",
            price: "$4,500,000",
            bedrooms: 6,
            bathrooms: 5,
            area: "7200",
            reverse: false,
            description:
                "A beautiful modern beach house with spacious rooms, premium amenities and amazing surroundings.",
        },

        {
            id: 4,
            image: propertyImg2,
            status: "FOR SALE",
            location: "15 Palm Street, California",
            title: "Luxury Family Home",
            price: "$3,200,000",
            bedrooms: 4,
            bathrooms: 3,
            area: "5800",
            reverse: true,
            description:
                "A stunning family home offering comfortable living spaces and modern architecture.",
        },
    ];

    return (
        <section className="properties-parent parent">
            <div className="shape1 bg-cover"></div>
            <div className="properties-cont cont">

                <div className="heading-main">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae alias commodi numquam quaerat in perferendis harum. Veritatis aliquam sint quaerat vitae, et eaque! Iste deserunt quia asperiores exercitationem dolor?
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