import React, { useState } from "react";
import "./Contact.scss";
import { TiArrowRight } from "react-icons/ti";

const Contact = () => {

    const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzl7KGE7nBIXuhsjemTM3kpXMD2dqPabUHWzNt-5pdFLxh7ba--2Mn0xraSA75_J0rhYA/exec";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        lookingFor: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.lookingFor
        ) {
            alert("Please fill all required fields.");
            return;
        }

        try {
            setLoading(true);

            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(formData)
            });

            alert(
                "Thank you! Your site visit request has been submitted successfully."
            );

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                lookingFor: "",
                message: ""
            });

        } catch (error) {
            console.error("Form submission error:", error);

            alert(
                "Something went wrong. Please try again."
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-parent parent">

            <div className="contact-cont cont">

                {/* Decorative Shape */}
                <div className="shape1"></div>

                {/* Heading */}
                <div className="contact-heading">

                    <div className="c-heading">
                        Book Your Private Site Visit
                    </div>

                    <p>
                        Experience premium 2 & 3 BHK residences near
                        ISKCON Temple, Katraj. Share your details and our
                        sales expert will get in touch with you to schedule
                        a private project tour.
                    </p>

                </div>


                {/* Contact Form */}
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    {/* Name + Email */}
                    <div className="form-row">

                        <div className="form-group">

                            <label>
                                Your Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label>
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                required
                            />

                        </div>

                    </div>


                    {/* Phone Number */}
                    <div className="form-group full-width">

                        <label>
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            pattern="[0-9]{10}"
                            maxLength="10"
                            required
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
                            value={formData.lookingFor}
                            onChange={handleChange}
                            required
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

                        <label>
                            Your Message
                        </label>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us how we can assist you..."
                            rows="7"
                        ></textarea>

                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="magnetic-btn"
                        disabled={loading}
                    >

                        <span className="text">
                            {loading
                                ? "Submitting..."
                                : "Book Site Visit"}
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