import React from "react";
import "./Hero.scss";
import Button from "../Button/Button";



const Hero = () => {
    return (
        <section className="hero-parent parent">
            <div className="hero-cont cont">
                {/* Decorative Shape */}
                <div className="shape1 bg-cover"></div>
                <div className="shape2 bg-contain"></div>

                {/* Left Image */}
                <div className="hero-left bg-cover"></div>

                {/* Right Content */}
                <div className="hero-right">
                    <div className="content-box">
                        <div className="heading">
                            South Pune's Most Awaited Premium Family Address
                        </div>

                        <div className="desc">
                            Experience thoughtfully designed 2 & 3 BHK homes where spirituality, luxury, and family values come together. Discover premium living with spacious residences, modern amenities, and a peaceful location near ISKCON Temple, Katraj.
                        </div>

                    </div>



                    <div className="button-group">
                        <Button
                            text="BOOK YOUR PRIVATE SITE"
                            link="#properties"
                        />

                        <Button
                            text="SCHEDULE A FREE PROJECT PRESENTATION"
                            link="#contact"
                        />
                    </div>
                    {/* <div className="price-group">
                        PRICE STARTS AT
                        <span>$542000</span>
                    </div> */}
                </div>

            </div>
        </section>
    );
};

export default Hero;