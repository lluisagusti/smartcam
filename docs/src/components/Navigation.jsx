import React, { useState, useEffect, useRef } from 'react';
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
                    <a href="/" className="nav-logo">
                        <strong>Smart</strong>Cam
                    </a>

                    {/* Desktop Menu */}
                    <div className="nav-links">
                        <a href="/privacy-policy">{t('nav.architecture')}</a>
                        <a href="/#applications">{t('nav.applications')}</a>
                        <a href="/#technology">{t('nav.ethical_edge')}</a>
                    </div>

                    <div className="nav-actions">
                        <LanguageSelector />
                        <a href="/contact" className="btn-primary">{t('nav.contact')}</a>
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
            </nav>
            {/* iOS Style Mobile Menu Overlay */}
            <div className={`mobile-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>

            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <div className="mobile-menu-brand">
                        <img src="/logo.png" alt="SmartCam Logo" className="mobile-menu-logo" />
                    </div>
                    <button className="mobile-close-btn" onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>
                <div className="mobile-menu-scroll">
                    <a href="/privacy-policy" onClick={() => setIsOpen(false)}>{t('nav.architecture')}</a>
                    <a href="/#applications" onClick={() => setIsOpen(false)}>{t('nav.applications')}</a>
                    <a href="/#technology" onClick={() => setIsOpen(false)}>{t('nav.ethical_edge')}</a>
                    <a href="/contact" className="mobile-btn" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
                </div>
            </div>
        </>
    );
};

export default Navigation;
