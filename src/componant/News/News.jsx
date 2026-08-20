import React from "react";
import "./News.scss";

import { Link } from "react-router-dom";
import newsData from "../newsData";

const truncateText = (text, limit = 90) => {
    if (text.length <= limit) {
        return text;
    }

    return (
        text.substring(0, limit)
            .split(" ")
            .slice(0, -1)
            .join(" ") + "..."
    );
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
                        Discover more about our premium residences, the
                        advantages of the Katraj location, modern lifestyle
                        amenities, and why this project is an ideal choice
                        for families looking for comfort, connectivity, and
                        long-term value.
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