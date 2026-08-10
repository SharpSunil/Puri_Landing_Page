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
        tag: "PROPERTY",
        title: "Lorem ipsum dolor sit amet.",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laudantium hic nisi sunt! Nisi quo cum deserunt perspiciatis.",
    },
    {
        id: 2,
        image: img2,
        tag: "REAL ESTATE",
        title: "Latest trends in real estate.",
        description:
            "Discover the latest property trends and opportunities available in the modern real estate market.",
    },
    {
        id: 3,
        image: img3,
        tag: "INVESTMENT",
        title: "Smart property investment tips.",
        description:
            "Learn useful tips and strategies to make better property investment decisions for your future.",
    },
    {
        id: 4,
        image: img3,
        tag: "INVESTMENT",
        title: "Smart property investment tips.",
        description:
            "Learn useful tips and strategies to make better property investment decisions for your future.",
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
                        Recent News
                    </div>

                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil
                        neque eligendi animi mollitia eius numquam voluptatum, fuga ullam
                        totam tempore consequatur! Distinctio libero a voluptate optio
                        illo inventore quas.
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