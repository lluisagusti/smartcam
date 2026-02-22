import React from 'react';
import Navigation from '../components/Navigation';
import HeroSlideshow from '../components/HeroSlideshow';
import FeatureCollapsible from '../components/FeatureCollapsible';
import ApplicationGrid from '../components/ApplicationGrid';
import PrivacyExplanation from '../components/PrivacyExplanation';
import Footer from '../components/Footer';

const Home = () => {
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
