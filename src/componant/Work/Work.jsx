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
                                Want to sell a home in the US?
                            </div>

                            <div className="btn">
                                →
                            </div>
                        </div>

                        <div className="desc">
                            Get in touch with our brokers!
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="right-side">

                        <div className="icon">
                            
                        </div>

                        <div className="btn-group">
                            <div className="heading">
                                Want to buy a home in the UK?
                            </div>

                            <div className="btn">
                                →
                            </div>
                        </div>

                        <div className="desc">
                            Call the broker for a quote!
                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM PANEL ================= */}
                <div className="bottom-panel">

                    {/* LEFT CONTENT */}
                    <div className="bottom-left">

                        <div className="heading">
                            We Connect People With Their Dreams
                        </div>

                        <div className="top-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt soluta nobis assumenda
                            labore quod maxime.
                        </div>

                        <div className="desc">
                            There are many variations of passages of lorem ipsum
                            available. Nam libero tempore cum soluta nobis est
                            eligendi optio cumque nihil impedit quo minus id quod
                            maxime but the majority have suffered alteration in some
                            form by injected humour or randomised words which don't
                            look even slightly believable.
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