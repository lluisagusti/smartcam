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

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="nav-container">
                <a href="/" className="nav-logo">
                    <strong>Smart</strong>Cam
                </a>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <a href="/#applications">{t('nav.applications')}</a>
                    <a href="/#compliance">{t('nav.privacy')}</a>
                    <a href="/#technology">{t('nav.technology')}</a>
                </div>

                <div className="nav-actions">
                    <LanguageSelector />
                    <a href="/contact" className="btn-primary">{t('nav.contact')}</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu (Shoptimizer clean style) */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-nav-top">
                    <LanguageSelector />
                </div>
                <a href="/#applications" onClick={() => setIsOpen(false)}>{t('nav.applications')}</a>
                <a href="/#compliance" onClick={() => setIsOpen(false)}>{t('nav.privacy')}</a>
                <a href="/#technology" onClick={() => setIsOpen(false)}>{t('nav.technology')}</a>
                <a href="/contact" className="mobile-btn" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
            </div>
        </nav>
    );
};

export default Navigation;
