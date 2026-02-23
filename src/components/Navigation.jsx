import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import '../styles/Navigation.css';

const Navigation = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <>
            <nav className="navbar" ref={navRef}>
                <div className="nav-container">
                    <Link to="/" className="nav-logo">
                        <strong>Smart</strong>Cam
                    </Link>

                    {/* Desktop Menu */}
                    <div className="nav-links">
                        <Link to="/">{t('nav.home')}</Link>
                        <Link to="/#sustainability">{t('nav.sustainability')}</Link>
                        <Link to="/#technology">{t('nav.ethical_edge')}</Link>
                        <Link to="/applications">{t('nav.applications')}</Link>
                    </div>

                    <div className="nav-actions">
                        <LanguageSelector />
                        <Link to="/contact" className="btn-primary">{t('nav.contact')}</Link>
                    </div>

                    {/* Mobile Controls (Menu Toggle & Language) */}
                    <div className="mobile-controls">
                        <div className="mobile-lang">
                            <LanguageSelector />
                        </div>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav >
            {/* iOS Style Mobile Menu Overlay */}
            < div className={`mobile-overlay ${isOpen ? 'open' : ''}`
            } onClick={() => setIsOpen(false)}></div >

            <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
                <div className="mobile-menu-header">
                    <div className="mobile-menu-brand">
                        <img src="https://raw.githubusercontent.com/jobautomation/assets/main/logo.png" alt="SmartCam Logo" className="mobile-menu-logo" />
                    </div>
                    <button className="mobile-close-btn" onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>
                <div className="mobile-menu-scroll">
                    <Link to="/" onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
                    <Link to="/#sustainability" onClick={() => setIsOpen(false)}>{t('nav.sustainability')}</Link>
                    <Link to="/#technology" onClick={() => setIsOpen(false)}>{t('nav.ethical_edge')}</Link>
                    <Link to="/applications" onClick={() => setIsOpen(false)}>{t('nav.applications')}</Link>
                    <Link to="/contact" className="mobile-btn" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
                </div>
            </div>
        </>
    );
};

export default Navigation;
