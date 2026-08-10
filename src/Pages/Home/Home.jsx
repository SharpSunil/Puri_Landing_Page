import React from 'react'
import Header from '../../componant/Header/Header'
import Hero from '../../componant/Hero/Hero'
import About from '../../componant/About/About'
import "./Home.scss"
import Work from '../../componant/Work/Work'
import Properties from '../../componant/PRoperties/Properties'
import Service from '../../componant/Service/Service'
import Clients from '../../componant/Clients/Clients'
import News from '../../componant/News/News'
import Contact from '../../componant/Contact/Contact'
const Home = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="home-parent">
                <Hero />
                <About />
                <Work />
                <Properties />
                <Service />
                <Clients />
                <News />
                <Contact />
            </div>

        </>
    )
}

export default Home
