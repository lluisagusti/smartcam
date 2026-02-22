import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Applications.css';

const Applications = () => {
    const { t } = useTranslation();

    const apps = [
        { key: 'app1', image: './images/parking-slot-monitoring/diagram.png' },
        { key: 'app2', image: './images/camera_features.webp' },
        { key: 'app3', image: './images/crowd-heat-map/diagram.png' },
        { key: 'app4', image: './images/object-detection/person-small.gif' },
        { key: 'app5', image: './images/remote-monitoring-halow/diagram.png' },
        { key: 'app6', image: './images/yolo-object-detection/dashboard2.png' },
    ];

    return (
        <div className="page-wrapper">
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
