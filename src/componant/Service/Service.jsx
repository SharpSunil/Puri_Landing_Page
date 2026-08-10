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
    title: "Leasing Advisory",
    description:
      "There are many variations of passages of lorem ipsum available.",
    icon: <FaBuilding />,
    color: "blue",
  },
  {
    id: 2,
    title: "Strategy & Consulting",
    description:
      "There are many variations of passages of lorem ipsum available.",
    icon: <FaHandshake />,
    color: "orange",
  },
  {
    id: 3,
    title: "Space Enablement",
    description:
      "There are many variations of passages of lorem ipsum available.",
    icon: <FaDoorOpen />,
    color: "green",
  },
  {
    id: 4,
    title: "Portfolio Services",
    description:
      "There are many variations of passages of lorem ipsum available.",
    icon: <FaPersonWalking />,
    color: "purple",
  },
  {
    id: 5,
    title: "Facilities Management",
    description:
      "There are many variations of passages of lorem ipsum available.",
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
        eiusmod tempor.
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