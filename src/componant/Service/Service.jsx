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

    {/* 2 columns */}
    <div className="service-intro">
      <div className="title">Our Services</div>

      <p>
      From finding the right home to making your investment decision, we provide a seamless and transparent experience designed around your family's needs.
      </p>
    </div>

    {/* 1 column */}
    <div className="service__item">
      <div className="service__icon service__icon--blue">
        <FaBuilding />
      </div>

      <div className="ser-title">Leasing Advisory</div>

      <p>
        There are many variations of passages of lorem ipsum available.
      </p>
    </div>

    {/* 1 column */}
    <div className="service__item">
      <div className="service__icon service__icon--orange">
        <FaHandshake />
      </div>

      <div className="ser-title">Strategy Consulting</div>

      <p>
        There are many variations of passages of lorem ipsum available.
      </p>
    </div>

    {/* Row 2 - 1 column */}
    <div className="service__item">
      <div className="service__icon service__icon--green">
        <FaDoorOpen />
      </div>

      <div className="ser-title">Space Enablement</div>

      <p>
        There are many variations of passages of lorem ipsum available.
      </p>
    </div>

    {/* Row 2 - 1 column */}
    <div className="service__item">
      <div className="service__icon service__icon--purple">
        <FaPersonWalking />
      </div>

      <div className="ser-title">Portfolio Services</div>

      <p>
        There are many variations of passages of lorem ipsum available.
      </p>
    </div>

    {/* Row 2 - 1 column */}
    <div className="service__item">
      <div className="service__icon service__icon--red">
        <FaWind />
      </div>

      <div className="ser-title">Facilities Management</div>

      <p>
        There are many variations of passages of lorem ipsum available.
      </p>
    </div>

  </div>
</section>
  );
};

export default Service;