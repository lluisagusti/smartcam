import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className="page-wrapper">
            <Navigation />

            <main className="privacy-policy-main">
                <div className="privacy-policy-container">
                    <header className="privacy-policy-header">
                        <h1>{t('privacy_policy_page.title')}</h1>
                        <p className="last-updated">{t('privacy_policy_page.last_updated')}</p>
                    </header>

                    <section className="privacy-policy-content">
                        <p className="policy-intro">{t('privacy_policy_page.intro')}</p>

                        <div className="policy-section">
                            <h2>{t('privacy_policy_page.s1_title')}</h2>
                            <p>{t('privacy_policy_page.s1_body')}</p>
                        </div>

                        <div className="policy-section">
                            <h2>{t('privacy_policy_page.s2_title')}</h2>
                            <p>{t('privacy_policy_page.s2_body')}</p>
                        </div>

                        <div className="policy-section">
                            <h2>{t('privacy_policy_page.s3_title')}</h2>
                            <p>{t('privacy_policy_page.s3_body')}</p>
                        </div>

                        <div className="policy-section">
                            <h2>{t('privacy_policy_page.s4_title')}</h2>
                            <p>{t('privacy_policy_page.s4_body')}</p>
                        </div>

                        <div className="policy-section">
                            <h2>{t('privacy_policy_page.s5_title')}</h2>
                            <p>{t('privacy_policy_page.s5_body')}</p>
                        </div>

                        <div className="policy-contact">
                            <p>{t('privacy_policy_page.contact')}</p>
                            <a href="/contact" className="btn-primary">{t('nav.contact')}</a>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
