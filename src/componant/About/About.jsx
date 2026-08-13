import React from 'react'
import "./About.scss"
import img1 from "../../assets/features-img1.png"
import img2 from "../../assets/features-img2.png"
import img3 from "../../assets/features-img3.png"
const About = () => {
    const carddata = [
        {
            id: 1,
            img: img1,
            title: "Quality Construction",
            desc: "Every home is thoughtfully designed with quality construction, premium specifications, and attention to detail to create spaces built for lasting comfort."
        },
        {
            id: 2,
            img: img2,
            title: "Customer First",
            desc: "From planning to possession, we focus on transparency, trust, and customer satisfaction to make your home-buying journey simple and reassuring."
        },
        {
            id: 3,
            img: img3,
            title: "Timeless Value",
            desc: "Our homes combine modern comforts with timeless design principles, creating spaces where families can grow, connect, and build lasting memories."
        }
    ]
    return (
        <>
            <div className="about-parent parent">
                <div className="about-cont cont">
                    <div className="top-side">
                        <div className="heading">Building More Than Homes. Building Legacies.</div>
                        <div className="desc">At Puri & Associates, we believe a home is more than just four walls—it is where generations grow, traditions are celebrated, and lifelong memories are created. With a commitment to quality construction, thoughtful planning, and customer-first values, we create homes designed for comfort, trust, and long-term value.!</div>
                    </div>
                    <div className="bottom-side">
                        {carddata.map((item, index) => (
                            <div className="card" key={index}>
                                <img src={item.img} alt={item.title} />

                                <div className="card-heading">
                                    {item.title}
                                </div>

                                <div className="card-desc">
                                    {item.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
