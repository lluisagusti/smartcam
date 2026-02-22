import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Applications.css';

const Applications = () => {
    const { t, i18n } = useTranslation();

    const apps = [
        { key: 'app1', image: './images/applications/parking.jpg' },
        { key: 'app2', image: './images/applications/traffic.jpg' },
        { key: 'app3', image: './images/applications/crowd.jpg' },
        { key: 'app4', image: './images/applications/people-counting.jpg' },
        { key: 'app5', image: './images/applications/remote-monitoring.jpg' },
        { key: 'app6', image: './images/applications/waste-detection.jpg' },
    ];

    return (
        <div className="page-wrapper">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.applications_title')}</title>
                <meta name="description" content={t('seo.applications_desc')} />
                <link rel="canonical" href="https://smartcam.eu/applications" />
            </Helmet>
            <Navigation />

            <main className="applications-page">
                <section className="applications-hero">
                    <h1>{t('applications_page.hero_title')}</h1>
                    <p>{t('applications_page.hero_subtitle')}</p>
                </section>

                {apps.map((app, index) => (
                    <React.Fragment key={app.key}>
                        <div className="app-block">
                            <div className="app-block-image">
                                <img src={app.image} alt={t(`applications_page.${app.key}_title`)} loading="lazy" />
                            </div>
                            <div className="app-block-content">
                                <span className="app-block-badge">{t(`applications_page.${app.key}_badge`)}</span>
                                <h2>{t(`applications_page.${app.key}_title`)}</h2>
                                <p>{t(`applications_page.${app.key}_body`)}</p>
                            </div>
                        </div>
                        {index < apps.length - 1 && (
                            <div className="app-divider"><hr /></div>
                        )}
                    </React.Fragment>
                ))}

                <section className="applications-cta">
                    <h2>{t('applications_page.cta_title')}</h2>
                    <p>{t('applications_page.cta_subtitle')}</p>
                    <a href="/contact" className="cta-button">{t('applications_page.cta_button')}</a>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Applications;
