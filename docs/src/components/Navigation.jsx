import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation = () => {
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
                    <a href="#applications">Applications</a>
                    <a href="#compliance">Privacy & Compliance</a>
                    <a href="#technology">Technology</a>
                </div>

                <div className="nav-actions">
                    <a href="#contact" className="btn-primary">Contact Sales</a>
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
                <a href="#applications" onClick={() => setIsOpen(false)}>Applications</a>
                <a href="#compliance" onClick={() => setIsOpen(false)}>Privacy</a>
                <a href="#technology" onClick={() => setIsOpen(false)}>Technology</a>
                <a href="#contact" className="mobile-btn" onClick={() => setIsOpen(false)}>Contact Sales</a>
            </div>
        </nav>
    );
};

export default Navigation;
