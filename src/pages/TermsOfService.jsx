import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/LegalPrivacy.css';

const TermsOfService = () => {
    const { t, i18n } = useTranslation();

    const sections = [
        { key: 's1', hasDetails: true },
        { key: 's2' }, { key: 's3' }, { key: 's4' },
        { key: 's5' }, { key: 's6' }, { key: 's7' },
        { key: 's8' }, { key: 's9' }, { key: 's10' },
        { key: 's11' }, { key: 's12' }, { key: 's13' },
        { key: 's14' },
    ];

    return (
        <div className="page-wrapper">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.terms_title')}</title>
                <meta name="description" content={t('seo.terms_desc')} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://smartcamsolutions.io/terms-of-service" />
                <meta property="og:title" content={t('seo.terms_title')} />
                <meta property="og:description" content={t('seo.terms_desc')} />
                <meta property="og:image" content="https://raw.githubusercontent.com/jobautomation/assets/main/open-graph.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={window.location.href} />
                <meta name="twitter:title" content={t('terms_page.seo_title')} />
                <meta name="twitter:description" content={t('terms_page.seo_desc')} />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/jobautomation/assets/main/open-graph.jpg" />
            </Helmet>
            <Navigation />

            <main className="legal-main">
                <div className="legal-container">
                    <header className="legal-header">
                        <h1>{t('terms_of_service.title')}</h1>
                    </header>

                    <section className="legal-content">
                        {sections.map(({ key, hasDetails }) => (
                            <div className="legal-block" key={key}>
                                <h2>{t(`terms_of_service.${key}_title`)}</h2>
                                <p>{t(`terms_of_service.${key}_body`)}</p>
                                {hasDetails && (
                                    <>
                                        <p>{t(`terms_of_service.${key}_company`)}</p>
                                        <p>{t(`terms_of_service.${key}_cif`)}</p>
                                        <p>{t(`terms_of_service.${key}_address`)}</p>
                                        <p>{t(`terms_of_service.${key}_email`)}</p>
                                    </>
                                )}
                            </div>
                        ))}
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
