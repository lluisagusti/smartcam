import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PrivacyArchitecture from './pages/PrivacyArchitecture';
import LegalPrivacy from './pages/LegalPrivacy';
import TermsOfService from './pages/TermsOfService';
import Applications from './pages/Applications';
import './styles/global.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-architecture" element={<PrivacyArchitecture />} />
                    <Route path="/legal-privacy" element={<LegalPrivacy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/applications" element={<Applications />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
