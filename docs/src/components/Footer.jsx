import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="/" className="footer-logo">
                            <strong>Smart</strong>Cam Solutions
                        </a>
                        <p className="footer-desc">
                            Providing cutting-edge, privacy-first Edge AI solutions for modern European cities and councils.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Solutions</h4>
                        <ul>
                            <li><a href="/#applications">Smart Parking</a></li>
                            <li><a href="/#applications">Crowd Analytics</a></li>
                            <li><a href="/#applications">Off-grid Monitoring</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/#compliance">EU Compliance</a></li>
                            <li><a href="/#technology">Technology & AI</a></li>
                            <li><a href="/contact">Contact Sales</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Ready to Upgrade?</h4>
                        <p>Deploy our open-source powered hardware in your municipality.</p>
                        <a href="mailto:sales@smartcam.eu" className="btn-secondary">Request a Demo</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} SmartCam Solutions. All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">GDPR Statement</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
