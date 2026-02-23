import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <strong>{t('nav.title_strong')}</strong>{t('nav.title_span')}
                        </Link>
                        <p className="footer-desc">
                            {t('footer.desc')}
                        </p>
                    </div>


                    <div className="footer-contact">
                        <h4>{t('footer.ready_title')}</h4>
                        <p>{t('footer.ready_desc')}</p>
                        <Link to="/contact" className="btn-primary footer-cta">{t('footer.request_demo')}</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
                    <div className="legal-links">
                        <Link to="/legal-privacy">{t('footer.privacy_policy')}</Link>
                        <Link to="/terms-of-service">{t('footer.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
