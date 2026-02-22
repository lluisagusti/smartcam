import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/FeatureCollapsible.css';

const privacyFeatures = [
    {
        title: '100% Edge AI Processing',
        content: 'All video feeds are processed locally on the reCamera. No video streams are sent to the cloud, ensuring total citizen privacy.',
    },
    {
        title: 'Strict EU Compliance',
        content: 'Designed from the ground up to comply with GDPR and European privacy laws. We do not use facial recognition or track individuals.',
    },
    {
        title: 'Open Source Synergy',
        content: 'Integrates beautifully with platforms like Grafana and n8n, allowing councils to own their data and automate municipal workflows securely.',
    }
];

const FeatureCollapsible = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="collapsible-section" id="compliance">
            <div className="collapsible-container">
                <div className="collapsible-header">
                    <h2>Privacy First. Always.</h2>
                    <p>The foundation of a smart city is trust. Our solutions guarantee anonymity while delivering critical operational insights.</p>
                </div>

                <div className="collapsible-list">
                    {privacyFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`collapsible-item ${openIndex === index ? 'open' : ''}`}
                        >
                            <button
                                className="collapsible-trigger"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                aria-expanded={openIndex === index}
                            >
                                <h3>{feature.title}</h3>
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <div className="collapsible-content-wrapper">
                                <div className="collapsible-content">
                                    <p>{feature.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureCollapsible;
