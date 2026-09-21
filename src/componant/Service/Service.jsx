import React from "react";
import {
  FaBuilding,
  FaHandshake,
  FaDoorOpen,
  FaPersonWalking,
  FaWind,
} from "react-icons/fa6";

import "./Service.scss";

const services = [
  {
    id: 1,
    title: "Property Consultation",
    description:
      "Get expert guidance to choose the right 2 or 3 BHK home based on your family's needs, lifestyle, and budget.",
    icon: <FaBuilding />,
    color: "blue",
  },
  {
    id: 2,
    title: "Site Visit Assistance",
    description:
      "Schedule a private site visit and explore the residences, amenities, surroundings, and key project features.",
    icon: <FaHandshake />,
    color: "orange",
  },
  {
    id: 3,
    title: "Home Buying Assistance",
    description:
      "From selecting your home to completing the process, our team provides a smooth and transparent buying experience.",
    icon: <FaDoorOpen />,
    color: "green",
  },
  {
    id: 4,
    title: "Investment Guidance",
    description:
      "Make informed property decisions with guidance on location advantages, project potential, and long-term value.",
    icon: <FaPersonWalking />,
    color: "purple",
  },
  {
    id: 5,
    title: "After-Sales Support",
    description:
      "Our support continues beyond booking with dedicated assistance throughout your homeownership journey.",
    icon: <FaWind />,
    color: "red",
  },
];

const Service = () => {
  return (
    <section className="services parent">
      <div className="service-cont cont">

        {/* Intro */}
        <div className="service-intro">
          <div className="title">Our Services</div>

          <p>
            From finding the right home to making your investment decision,
            we provide a seamless and transparent experience designed around
            your family's needs.
          </p>
        </div>

        {/* Services */}
        {services.map((service) => (
          <div className="service__item" key={service.id}>

            <div
              className={`service__icon service__icon--${service.color}`}
            >
              {service.icon}
            </div>

            <div className="ser-title">
              {service.title}
            </div>

            <p>
              {service.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Service;