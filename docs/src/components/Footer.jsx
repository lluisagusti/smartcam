import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="/" className="footer-logo">
                            <strong>{t('nav.title_strong')}</strong>{t('nav.title_span')}
                        </a>
                        <p className="footer-desc">
                            {t('footer.desc')}
                        </p>
                    </div>


                    <div className="footer-contact">
                        <h4>{t('footer.ready_title')}</h4>
                        <p>{t('footer.ready_desc')}</p>
                        <a href="mailto:sales@smartcam.eu" className="btn-secondary">{t('footer.request_demo')}</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
                    <div className="legal-links">
                        <a href="/privacy-policy">{t('footer.privacy_policy')}</a>
                        <a href="#">{t('footer.terms')}</a>
                        <a href="/privacy-policy">{t('footer.gdpr')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
