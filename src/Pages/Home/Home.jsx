import React from "react";

import Hero from "../../componant/Hero/Hero";
import About from "../../componant/About/About";
import Work from "../../componant/Work/Work";
import Properties from "../../componant/PRoperties/Properties";
import Service from "../../componant/Service/Service";
import Clients from "../../componant/Clients/Clients";
import News from "../../componant/News/News";
import Contact from "../../componant/Contact/Contact";
import "./Home.scss";

const Home = () => {
    return (
        <>
            

            <div className="home-parent">
                
                <section id="home">
                    <Hero />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="work">
                    <Work />
                </section>

                <section id="properties">
                    <Properties />
                </section>

                <section id="services">
                    <Service />
                </section>

                <section id="clients">
                    <Clients />
                </section>

                <section id="news">
                    <News />
                </section>

                <section id="contact">
                    <Contact />
                </section>

            </div>
        </>
    );
};

export default Home;