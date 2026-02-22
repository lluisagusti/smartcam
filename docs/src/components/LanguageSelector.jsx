import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import '../styles/LanguageSelector.css';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'ca', label: 'Català' }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const changeLanguage = (lngCode) => {
        i18n.changeLanguage(lngCode);
        setIsOpen(false);
    };

    return (
        <div className="language-selector" ref={dropdownRef}>
            <button
                className="lang-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select Language"
                aria-expanded={isOpen}
            >
                <Globe size={18} />
                <span className="lang-code">{currentLang.code.toUpperCase()}</span>
                <ChevronDown size={14} className={`chevron ${isOpen ? 'open' : ''}`} />
            </button>

            <div className={`lang-dropdown ${isOpen ? 'show' : ''}`}>
                {languages.map((lng) => (
                    <button
                        key={lng.code}
                        className={`lang-option ${i18n.language === lng.code ? 'active' : ''}`}
                        onClick={() => changeLanguage(lng.code)}
                    >
                        {lng.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;
