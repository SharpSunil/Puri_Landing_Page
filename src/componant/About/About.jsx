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
            title: "Lorem ipsum dolor sit.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta amet repellat aspernatur deleniti hic illum quos odio, sint sunt id, ratione saepe assumenda, excepturi adipisci dolorem cupiditate error tenetur eligendi!"
        },
        {
            id: 2,
            img: img2,
            title: "Lorem ipsum dolor sit.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta amet repellat aspernatur deleniti hic illum quos odio, sint sunt id, ratione saepe assumenda, excepturi adipisci dolorem cupiditate error tenetur eligendi!"
        },
        {
            id: 3,
            img: img3,
            title: "Lorem ipsum dolor sit.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta amet repellat aspernatur deleniti hic illum quos odio, sint sunt id, ratione saepe assumenda, excepturi adipisci dolorem cupiditate error tenetur eligendi!"
        }
    ]
    return (
        <>
            <div className="about-parent parent">
                <div className="about-cont cont">
                    <div className="top-side">
                        <div className="heading">Lorem ipsum dolor sit, amet.</div>
                        <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi numquam omnis. Culpa quam tempore optio aperiam nulla quae cumque eligendi alias ex, ratione rerum dignissimos debitis, aspernatur inventore veniam!</div>
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
