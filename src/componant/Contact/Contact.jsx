import React from "react";
import "./Contact.scss";
import { TiArrowRight } from "react-icons/ti";

const Contact = () => {
    return (
        <section className="contact-parent parent">
            <div className="contact-cont cont">

                {/* Decorative Shape */}
                <div className="shape1"></div>

                {/* Heading */}
                <div className="contact-heading">
                    <div className="c-heading">Get In Touch With Us</div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>

                {/* Contact Form */}
                <form className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                placeholder="Johnathon Doelsen"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    {/* Looking For */}
                    <div className="form-group full-width">
                        <label htmlFor="lookingFor">
                            I'm Looking for ...
                        </label>

                        <select id="lookingFor" name="lookingFor" defaultValue="">
                            <option value="" disabled>
                                Select your requirement
                            </option>

                            <option value="1-bedroom">
                                1 Bedroom Apartment
                            </option>

                            <option value="2-bedroom">
                                2 Bedroom Apartment
                            </option>

                            <option value="3-bedroom">
                                3 Bedroom Villa Apartment
                            </option>

                            <option value="4-bedroom">
                                4 Bedroom Villa
                            </option>

                            <option value="commercial">
                                Commercial Property
                            </option>

                            <option value="office">
                                Office Space
                            </option>

                            <option value="land">
                                Land / Plot
                            </option>

                            <option value="other">
                                Other
                            </option>
                        </select>
                    </div>



                    {/* Message */}
                    <div className="form-group full-width">

                        <label>Your Message</label>

                        <textarea
                            placeholder="Please write in brief..."
                            rows="7"
                        ></textarea>

                    </div>

                    {/* Button */}
                    <button
                        className="magnetic-btn"

                    >
                        <span className="text">Contact Us</span>

                        <span className="icon">
                            <TiArrowRight />
                        </span>
                    </button>

                </form>

            </div>
        </section>
    );
};

export default Contact;