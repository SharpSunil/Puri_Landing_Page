import React from "react";
import "./news_details.scss";

import newsImage from "../../assets/news-details.jpg";

const News_details = () => {
    return (
        <div className="news-details-parent parent">
            <div className="news-details-cont cont">

                {/* Article Header */}
                <div className="news-details-header">

                    <h1>
                        Indonesia to Host ASEAN Climate Summit 2025
                    </h1>

                    <div className="news-meta">

                        <div className="author">
                            <span className="author-avatar">
                                R
                            </span>

                            <span className="author-name">
                                Rina Wulandari
                            </span>
                        </div>

                        <span className="dot">•</span>

                        <span>Politics</span>

                        <span className="dot">•</span>

                        <span>June 24, 2025</span>

                    </div>

                </div>

                {/* Featured Image */}
                <div className="news-featured-image">
                    <img
                        src={newsImage}
                        alt="Indonesia to Host ASEAN Climate Summit 2025"
                    />
                </div>

                {/* Article Content */}
                <article className="news-content">

                    <h2>
                        Jakarta, Indonesia –
                    </h2>

                    <p>
                        Indonesia has officially been selected as the host country
                        for the ASEAN Climate Summit 2025, marking a historic
                        milestone in the nation's diplomatic and environmental
                        efforts. This will be the first time a Southeast Asian
                        country leads the summit with a full green energy and
                        sustainability agenda.
                    </p>

                    <p>
                        The announcement was made during the ASEAN Ministerial
                        Meeting held in Kuala Lumpur last weekend. Indonesia's
                        proposal stood out for its ambitious commitment to
                        renewable energy, climate resilience programs, and
                        sustainable urban development.
                    </p>

                    <h3>
                        A Regional Focus on Climate Action
                    </h3>

                    <p>
                        The summit, scheduled for November 2025, will bring
                        together leaders and environmental ministers from all
                        10 ASEAN member states, along with invited observers
                        from the European Union, Japan, and Australia.
                    </p>

                    <p>
                        Key discussion topics will include:
                    </p>

                    <ul>
                        <li>
                            Renewable Energy Transition Roadmap for Southeast Asia
                        </li>

                        <li>
                            Cross-Border Climate Financing Initiatives
                        </li>

                        <li>
                            Sustainable Urban Development
                        </li>

                        <li>
                            Climate Resilience and Disaster Management
                        </li>
                    </ul>

                    <h3>
                        Indonesia's Commitment to Sustainability
                    </h3>

                    <p>
                        Indonesia has continued to strengthen its commitment
                        towards sustainable development and environmental
                        protection. The upcoming summit is expected to create
                        new opportunities for regional cooperation and
                        long-term climate initiatives.
                    </p>

                    <p>
                        With representatives from across the region expected
                        to attend, the event will provide an important platform
                        for ASEAN countries to discuss practical solutions to
                        some of the most pressing environmental challenges.
                    </p>

                </article>

            </div>
        </div>
    );
};

export default News_details;