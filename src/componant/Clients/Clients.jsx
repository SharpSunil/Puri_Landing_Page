import React from "react";
import "./Clients.scss";

import clientImage from "../../assets/img-6.jpg";
import clientProfile from "../../assets/user-1.jpg";

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
                                        Reliable People
                                    </h3>

                                    <div className="client-quote">

                                        <span className="quote quote-open">
                                            “
                                        </span>

                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            sed do eiusmod tempor incididunt aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore
                                            beatae vitae dicta sunt explicabo magna aliqua.
                                        </p>

                                        <span className="quote quote-close">
                                            ”
                                        </span>

                                    </div>

                                    <div className="client-person">

                                        <div className="client-person-image">
                                            <img
                                                src={clientProfile}
                                                alt="Jerry Johnston"
                                            />
                                        </div>

                                        <div className="client-person-info">
                                            <h4>
                                                Jerry Johnston
                                            </h4>

                                            <p>
                                                Acme Boutique, UK
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>


                            {/* SLIDE 2 */}
                            <SwiperSlide>

                                <div className="client-slide">

                                    <h3 className="client-subheading">
                                        Excellent Service
                                    </h3>

                                    <div className="client-quote">

                                        <span className="quote quote-open">
                                            “
                                        </span>

                                        <p>
                                            Our experience was excellent from beginning to end.
                                            The entire team was professional, helpful and always
                                            available whenever we needed assistance.
                                        </p>

                                        <span className="quote quote-close">
                                            ”
                                        </span>

                                    </div>

                                    <div className="client-person">

                                        <div className="client-person-image">
                                            <img
                                                src={clientProfile}
                                                alt="Michael Anderson"
                                            />
                                        </div>

                                        <div className="client-person-info">
                                            <h4>
                                                Michael Anderson
                                            </h4>

                                            <p>
                                                Prime Properties, UK
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>


                            {/* SLIDE 3 */}
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
                                            A very professional team with great communication.
                                            They understood our requirements perfectly and
                                            delivered everything exactly as expected.
                                        </p>

                                        <span className="quote quote-close">
                                            ”
                                        </span>

                                    </div>

                                    <div className="client-person">

                                        <div className="client-person-image">
                                            <img
                                                src={clientProfile}
                                                alt="David Wilson"
                                            />
                                        </div>

                                        <div className="client-person-info">
                                            <h4>
                                                David Wilson
                                            </h4>

                                            <p>
                                                Urban Estates, UK
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