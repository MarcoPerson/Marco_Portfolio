import React, { useEffect } from 'react';
import './News.css';
import { useContent } from '../hooks/useContent';
import AOS from 'aos';
import 'aos/dist/aos.css';

function News() {
    const content = useContent();
    const { news } = content;

    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    return (
        <div className='news'>
            <div className="news-container">
                <h1 className="news-title" data-aos="fade-down">{news.title}</h1>
                <div className="news-timeline">
                    {news.items.map((item, index) => (
                        <div
                            key={index}
                            className="news-item"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <div className="news-dot"></div>
                            <div className="news-content">
                                <span className="news-date">[{item.date}]</span>
                                <p className="news-text">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;
