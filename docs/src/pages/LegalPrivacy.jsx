import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/LegalPrivacy.css';

const LegalPrivacy = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="page-wrapper">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.legal_title')}</title>
                <meta name="description" content={t('seo.legal_desc')} />
                <link rel="canonical" href="https://smartcam.eu/legal-privacy" />
            </Helmet>
            <Navigation />

            <main className="legal-main">
                <div className="legal-container">
                    <header className="legal-header">
                        <h1>{t('legal_privacy.title')}</h1>
                    </header>

                    <section className="legal-content">
                        <div className="legal-block">
                            <h2>{t('legal_privacy.s1_title')}</h2>
                            <p>{t('legal_privacy.s1_company')}</p>
                            <p>{t('legal_privacy.s1_cif')}</p>
                            <p>{t('legal_privacy.s1_address')}</p>
                            <p>{t('legal_privacy.s1_email')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s2_title')}</h2>
                            <p>{t('legal_privacy.s2_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s3_title')}</h2>
                            <p>{t('legal_privacy.s3_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s4_title')}</h2>
                            <p>{t('legal_privacy.s4_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s5_title')}</h2>
                            <p>{t('legal_privacy.s5_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s6_title')}</h2>
                            <p>{t('legal_privacy.s6_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s7_title')}</h2>
                            <p>{t('legal_privacy.s7_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s8_title')}</h2>
                            <p>{t('legal_privacy.s8_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s9_title')}</h2>
                            <p>{t('legal_privacy.s9_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s10_title')}</h2>
                            <p>{t('legal_privacy.s10_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s11_title')}</h2>
                            <p>{t('legal_privacy.s11_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s12_title')}</h2>
                            <p>{t('legal_privacy.s12_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s13_title')}</h2>
                            <p>{t('legal_privacy.s13_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s14_title')}</h2>
                            <p>{t('legal_privacy.s14_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s15_title')}</h2>
                            <p>{t('legal_privacy.s15_body')}</p>
                        </div>

                        <div className="legal-block">
                            <h2>{t('legal_privacy.s16_title')}</h2>
                            <p>{t('legal_privacy.s16_body')}</p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LegalPrivacy;
