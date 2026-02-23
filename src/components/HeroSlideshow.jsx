import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/HeroSlideshow.css';

// We'll map the translations inside the component because we need the `t` function
const getSlides = (t) => [
    {
        id: 1,
        image: 'https://raw.githubusercontent.com/jobautomation/assets/main/people-counting-hero.jpg',
        title: t('hero.slide1_title'),
        subtitle: t('hero.slide1_subtitle'),
        cta: t('hero.slide1_cta'),
        link: '/#applications'
    },
    {
        id: 2,
        image: 'https://raw.githubusercontent.com/jobautomation/assets/main/ethical-ai.jpg',
        title: t('hero.slide2_title'),
        subtitle: t('hero.slide2_subtitle'),
        cta: t('hero.slide2_cta'),
        link: '/#technology'
    },
    {
        id: 3,
        image: 'https://raw.githubusercontent.com/jobautomation/assets/main/privacy.jpg',
        title: t('hero.slide3_title'),
        subtitle: t('hero.slide3_subtitle'),
        cta: t('hero.slide3_cta'),
        link: '/applications'
    }
];

const HeroSlideshow = () => {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);
    const slides = getSlides(t);

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
                            <Link to={slide.link} className="btn-primary hero-btn">{slide.cta}</Link>
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
