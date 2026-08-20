import React from "react";
import { useParams, Link } from "react-router-dom";
import "./news_details.scss";

import newsData from "../newsData";

const News_details = () => {
    const { id } = useParams();

    // Find selected property/news
    const news = newsData.find(
        (item) => item.id === Number(id)
    );

    // ------------------------------------------
    // NEWS NOT FOUND
    // ------------------------------------------
    if (!news) {
        return (
            <section className="news-not-found parent">

                <div className="news-not-found-cont cont">

                    <h2>
                        Property Not Found
                    </h2>

                    <p>
                        Sorry, the property you are looking for
                        could not be found.
                    </p>

                    <Link
                        to="/#properties"
                        className="back-btn"
                    >
                        Back to Properties
                    </Link>

                </div>

            </section>
        );
    }

    return (
        <section className="news-details-parent parent">

            <div className="news-details-cont cont">

                {/* ==========================================
                    ARTICLE HEADER
                ========================================== */}

                <div className="news-details-header">

                    {/* Tag */}
                    <div className="news-tag">
                        {news.tag}
                    </div>

                    {/* Title */}
                    <h1>
                        {news.title}
                    </h1>

                    {/* Meta */}
                    <div className="news-meta">

                        <span>
                            Puri
                        </span>

                        <span className="dot">
                            •
                        </span>

                        <span>
                            Real Estate
                        </span>

                        <span className="dot">
                            •
                        </span>

                        <span>
                            August 20, 2026
                        </span>

                    </div>

                </div>


                {/* ==========================================
                    FEATURED IMAGE
                ========================================== */}

                <div className="news-featured-image">

                    <img
                        src={news.image}
                        alt={news.title}
                    />

                </div>


                {/* ==========================================
                    ARTICLE CONTENT
                ========================================== */}

                <article className="news-content">

                    {/* Main heading */}
                    <h2>
                        {news.title}
                    </h2>

                    {/* Introduction */}
                    <p className="intro">
                        {news.description}
                    </p>


                    {/* Content Sections */}
                    {news.content?.map(
                        (section, index) => (

                            <div
                                className="content-section"
                                key={index}
                            >

                                {/* Section Heading */}
                                <h3>
                                    {section.heading}
                                </h3>


                                {/* Paragraphs */}
                                {section.paragraphs?.map(
                                    (
                                        paragraph,
                                        paragraphIndex
                                    ) => (

                                        <p
                                            key={paragraphIndex}
                                        >
                                            {paragraph}
                                        </p>

                                    )
                                )}

                            </div>

                        )
                    )}


                    {/* ==========================================
                        LOCATION BUTTON
                    ========================================== */}

                    {news.location && (
                        <div className="location-wrapper">

                            <a
                                href={news.location}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="location-btn"
                            >
                                View Property Location
                            </a>

                        </div>
                    )}


                    {/* ==========================================
                        BACK TO PROPERTIES
                    ========================================== */}

                    <div className="back-wrapper">

                        <Link
                            to="/#properties"
                            className="back-btn"
                        >
                            ← Back to Properties
                        </Link>

                    </div>

                </article>

            </div>

        </section>
    );
};

export default News_details;