import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import HeroSlideshow from '../components/HeroSlideshow';
import FeatureCollapsible from '../components/FeatureCollapsible';
import ApplicationGrid from '../components/ApplicationGrid';
import PrivacyExplanation from '../components/PrivacyExplanation';
import Footer from '../components/Footer';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // Small delay to ensure the DOM has rendered
            setTimeout(() => {
                const element = document.querySelector(location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);
    return (
        <>
            <Navigation />
            <main>
                <HeroSlideshow />
                <FeatureCollapsible />
                <ApplicationGrid />
                <PrivacyExplanation />
            </main>
            <Footer />
        </>
    );
};

export default Home;
