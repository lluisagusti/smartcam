import React, { useState, useEffect } from 'react';
import '../styles/HeroSlideshow.css';

const slides = [
    {
        id: 1,
        image: './images/parking-slot-monitoring/ai-parking-banner.png',
        title: 'Smart Cities, Built on Privacy',
        subtitle: 'EU-compliant Edge AI cameras that process data locally, eliminating cloud privacy risks while delivering powerful real-time insights.',
        cta: 'Explore Solutions'
    },
    {
        id: 2,
        image: './images/crowd-heat-map/grafana-dashboard.png',
        title: 'The Ethical Choice for AI',
        subtitle: 'No facial recognition. No cloud data brokerage. Our open-source hardware deletes raw video instantly, processing only anonymous metadata to keep your city safe and compliant.',
        cta: 'Read Our Privacy Pledge'
    },
    {
        id: 3,
        image: './images/object-detection/output.jpg', // Using people counting image as a general representation
        title: 'Complete Urban Intelligence',
        subtitle: 'Alleviate traffic jams, manage smart parking, and count foot traffic accurately. One camera architecture for endless municipal applications.',
        cta: 'See All Features'
    }
];

const HeroSlideshow = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero-slideshow">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === current ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                            <a href="/#applications" className="btn-primary hero-btn">{slide.cta}</a>
                        </div>
                    </div>
                </div>
            ))}

            <div className="slide-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlideshow;
