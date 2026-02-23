import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Applications.css';

const Applications = () => {
    const { t, i18n } = useTranslation();

    const apps = [
        { key: 'app1', image: 'https://raw.githubusercontent.com/jobautomation/assets/main/parking.jpg' },
        { key: 'app2', image: 'https://raw.githubusercontent.com/jobautomation/assets/main/traffic.jpg' },
        { key: 'app3', image: 'https://raw.githubusercontent.com/jobautomation/assets/main/crowd.jpg' },
        { key: 'app4', image: 'https://raw.githubusercontent.com/jobautomation/assets/main/people-counting.jpg' },
        { key: 'app5', image: 'https://raw.githubusercontent.com/jobautomation/assets/main/remote-monitoring.jpg' },
        { key: 'app6', image: 'https://raw.githubusercontent.com/jobautomation/assets/main/waste-detection.jpg' },
    ];

    return (
        <div className="page-wrapper">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.applications_title')}</title>
                <meta name="description" content={t('seo.applications_desc')} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://smartcamsolutions.io/applications" />
                <meta property="og:title" content={t('seo.applications_title')} />
                <meta property="og:description" content={t('seo.applications_desc')} />
                <meta property="og:image" content="https://raw.githubusercontent.com/jobautomation/assets/main/open-graph.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://smartcamsolutions.io/applications" />
                <meta name="twitter:title" content={t('seo.applications_title')} />
                <meta name="twitter:description" content={t('seo.applications_desc')} />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/jobautomation/assets/main/open-graph.jpg" />
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
                    <Link to="/contact" className="cta-button">{t('applications_page.cta_button')}</Link>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Applications;
