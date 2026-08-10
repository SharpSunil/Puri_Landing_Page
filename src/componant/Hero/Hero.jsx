import React from "react";
import "./Hero.scss";
import Button from "../../../../sbProject/src/componant/button/Buttonmain";

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
                            Elegant homes for sale
                        </div>

                        <div className="desc">
                            There are many variations of passages of lorem ipsum
                            available, but the majority have suffered alteration in
                            some form by injected humour or randomised words which
                            don't look even slightly believable.
                        </div>

                    </div>



                    <div className="button-group">
                        <Button
                            text="VIEW PROPERTIES"
                            link="/properties"
                        />

                        <Button
                            text="GET IN TOUCH"
                            link="/contact"
                        />
                    </div>
                    <div className="price-group">
                        PRICE STARTS AT
                        <span>$542000</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;