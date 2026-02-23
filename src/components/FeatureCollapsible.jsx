import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/FeatureCollapsible.css';

const getPrivacyFeatures = (t) => [
    {
        title: t('features.item1_title'),
        content: t('features.item1_content'),
    },
    {
        title: t('features.item2_title'),
        content: t('features.item2_content'),
    },
    {
        title: t('features.item3_title'),
        content: t('features.item3_content'),
    }
];

const FeatureCollapsible = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(0);
    const privacyFeatures = getPrivacyFeatures(t);

    return (
        <section className="collapsible-section" id="compliance">
            <div className="collapsible-container">
                <div className="collapsible-header">
                    <h2>{t('features.header_title')}</h2>
                    <p>{t('features.header_subtitle')}</p>
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
