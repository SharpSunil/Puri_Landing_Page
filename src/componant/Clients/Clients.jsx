import React from "react";
import "./Clients.scss";

import clientImage from "../../assets/img/group.jpg";
import clientProfile from "../../assets/img/amit.jpg";
import clientProfilee from "../../assets/img/neha.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Clients = () => {
    return (
        <section className="clients-parent parent">
            <div className="client-cont cont">

                {/* LEFT SIDE */}
                <div className="client-left">

                    <div className="client-heading">
                        What clients say
                    </div>
                    <div className="bottom-slide">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >

                            {/* SLIDE 1 */}

                            <SwiperSlide>
                                <div className="client-slide">

                                    <h3 className="client-subheading">
                                        Trusted Experience
                                    </h3>

                                    <div className="client-quote">
                                        <span className="quote quote-open">
                                            “
                                        </span>

                                        <p>
                                            The entire experience was smooth and professional.
                                            The team understood our requirements, explained
                                            everything clearly and helped us choose the right
                                            home for our family.
                                        </p>

                                        <span className="quote quote-close">
                                            ”
                                        </span>
                                    </div>

                                    <div className="client-person">

                                        <div className="client-person-image">
                                            <img
                                                src={clientProfile}
                                                alt="Amit Kulkarni"
                                            />
                                        </div>

                                        <div className="client-person-info">
                                            <h4>
                                                Amit Kulkarni
                                            </h4>

                                            <p>
                                                Pune
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="client-slide">

                                    <h3 className="client-subheading">
                                        Excellent Guidance
                                    </h3>

                                    <div className="client-quote">
                                        <span className="quote quote-open">
                                            “
                                        </span>

                                        <p>
                                            We really appreciated the transparency and guidance
                                            throughout the property selection process. The team
                                            was always available to answer our questions and
                                            made the entire journey comfortable.
                                        </p>

                                        <span className="quote quote-close">
                                            ”
                                        </span>
                                    </div>

                                    <div className="client-person">

                                        <div className="client-person-image">
                                            <img
                                                src={clientProfilee}
                                                alt="Neha Patil"
                                            />
                                        </div>

                                        <div className="client-person-info">
                                            <h4>
                                                Neha Patil
                                            </h4>

                                            <p>
                                                Pune
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className="client-slide">

                                    <h3 className="client-subheading">
                                        Professional Team
                                    </h3>

                                    <div className="client-quote">
                                        <span className="quote quote-open">
                                            “
                                        </span>

                                        <p>
                                            A professional and supportive team that genuinely
                                            understands the needs of home buyers. Their
                                            communication was clear and the overall experience
                                            gave us complete confidence in our decision.
                                        </p>

                                        <span className="quote quote-close">
                                            ”
                                        </span>
                                    </div>

                                    <div className="client-person">

                                        <div className="client-person-image">
                                            <img
                                                src={clientProfile}
                                                alt="Rahul Deshmukh"
                                            />
                                        </div>

                                        <div className="client-person-info">
                                            <h4>
                                                Rahul Deshmukh
                                            </h4>

                                            <p>
                                                Pune
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>

                </div>


                {/* =========================
            RIGHT SIDE
        ========================== */}
                <div className="client-right">

                    <img
                        src={clientImage}
                        alt="Happy clients"
                    />

                </div>

            </div>
        </section>
    );
};

export default Clients;