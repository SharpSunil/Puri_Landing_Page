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
                    <div className="c-heading">Book Your Private Site Visit</div>

                    <p>
                        Experience premium 2 & 3 BHK residences near ISKCON Temple, Katraj. Share your details and our sales expert will get in touch with you to schedule a private project tour.
                    </p>
                </div>

                {/* Contact Form */}
                <form className="contact-form">

                    {/* Name + Email */}
                    <div className="form-row">

                        <div className="form-group">
                            <label>Your Name</label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                            />
                        </div>

                    </div>


                    {/* Phone Number */}
                    <div className="form-group full-width">

                        <label>Phone Number</label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your mobile number"
                        />

                    </div>


                    {/* Looking For */}
                    <div className="form-group full-width">

                        <label htmlFor="lookingFor">
                            I'm Looking For...
                        </label>

                        <select
                            id="lookingFor"
                            name="lookingFor"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select your preferred home
                            </option>

                            <option value="2-bhk">
                                2 BHK Residence
                            </option>

                            <option value="3-bhk">
                                3 BHK Residence
                            </option>

                            <option value="both">
                                2 & 3 BHK - Need More Information
                            </option>
                        </select>

                    </div>


                    {/* Message */}
                    <div className="form-group full-width">

                        <label>Your Message</label>

                        <textarea
                            name="message"
                            placeholder="Tell us how we can assist you..."
                            rows="7"
                        ></textarea>

                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="magnetic-btn"
                    >
                        <span className="text">
                            Book Site Visit
                        </span>

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