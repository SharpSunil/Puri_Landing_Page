import React from "react";
import "./Work.scss";
import { IoHome } from "react-icons/io5";
const Work = () => {
    return (
        <section className="work-parent parent">
            <div className="work-cont cont">

                {/* ================= TOP PANEL ================= */}
                <div className="top-panel">

                    {/* Decorative shapes */}
                    <div className="shape1 bg-cover"></div>
                    <div className="shape2 bg-cover"></div>

                    {/* LEFT */}
                    <div className="left-side">

                        <div className="icon">
                            <IoHome />
                        </div>

                        <div className="btn-group">
                            <div className="heading">
                               Book Your Private Site Visit
                            </div>

                            <div className="btn">
                                →
                            </div>
                        </div>

                        <div className="desc">
                            Experience premium 2 & 3 BHK residences near ISKCON, Katraj.
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="right-side">

                        <div className="icon">
                            
                        </div>

                        <div className="btn-group">
                            <div className="heading">
                                Talk To Our Sales Expert
                            </div>

                            <div className="btn">
                                →
                            </div>
                        </div>

                        <div className="desc">
                           Get project details, pricing and availability.
                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM PANEL ================= */}
                <div className="bottom-panel">

                    {/* LEFT CONTENT */}
                    <div className="bottom-left">

                        <div className="heading">
                           Building More Than Homes. Building Legacies.
                        </div>

                        <div className="top-desc">
                            At Puri & Associates, we believe that a home is more than just four walls—it is where generations grow, traditions are celebrated, and lifelong memories are created.
                        </div>

                        <div className="desc">
                           With a strong commitment to quality construction, premium specifications, and customer-first values, we develop homes that combine modern comforts with timeless design principles. Every detail is carefully planned to deliver an elevated lifestyle while maintaining functionality, sustainability, and long-term value.
                        </div>

                      

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="bottom-right">
                        <div className="work-image bg-cover"></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Work;