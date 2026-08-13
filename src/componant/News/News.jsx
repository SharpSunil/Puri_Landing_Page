import React from "react";
import "./News.scss";

import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";

import { Link } from "react-router-dom";

const newsData = [
    {
        id: 1,
        image: img1,
        tag: "PROJECT",
        title: "Discover Premium Living Near ISKCON Katraj",
        description:
            "Explore thoughtfully designed 2 & 3 BHK residences offering spacious layouts, peaceful surroundings, premium amenities and excellent connectivity.",
    },
    {
        id: 2,
        image: img2,
        tag: "LIFESTYLE",
        title: "Where Tradition Meets Modern Luxury",
        description:
            "Discover a lifestyle that brings together family values, modern comforts, spiritual surroundings and thoughtfully planned spaces for every generation.",
    },
    {
        id: 3,
        image: img3,
        tag: "LOCATION",
        title: "Why Katraj Is a Growing Residential Destination",
        description:
            "With excellent connectivity, reputed educational institutions, healthcare facilities and everyday conveniences, Katraj continues to attract homebuyers.",
    },
    {
        id: 4,
        image: img3,
        tag: "INVESTMENT",
        title: "Why Invest in a Premium Home in South Pune",
        description:
            "Prime locations, improving infrastructure and growing residential demand make South Pune an attractive destination for homeowners and long-term investors.",
    },
];

const truncateText = (text, limit = 90) => {
    if (text.length <= limit) {
        return text;
    }

    return text.substring(0, limit).split(" ").slice(0, -1).join(" ") + "...";
};

const News = () => {
    return (
        <section className="news-parent parent">
            <div className="news-cont cont">

                {/* TOP NEWS */}
                <div className="top-news">

                    <div className="heading">
                        Explore More
                    </div>

                    <div className="desc">
                        Discover more about our premium residences, the advantages of the Katraj location, modern lifestyle amenities, and why this project is an ideal choice for families looking for comfort, connectivity, and long-term value.
                    </div>

                </div>

                {/* NEWS CARDS */}
                <div className="bottom-news">

                    {newsData.map((news) => (
                        <Link
                            to={`/blog/${news.id}`}
                            className="card"
                            key={news.id}
                        >

                            <img
                                src={news.image}
                                alt={news.title}
                            />

                            <div className="content-box">

                                <div className="tag">
                                    {news.tag}
                                </div>

                                <div className="n-heading">
                                    {news.title}
                                </div>

                                <div className="n-desc">
                                    {truncateText(news.description, 90)}
                                </div>

                            </div>

                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default News;