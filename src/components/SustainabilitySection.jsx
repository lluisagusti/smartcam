import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Sun, Building2 } from 'lucide-react';
import '../styles/SustainabilitySection.css';

const SustainabilitySection = () => {
    const { t } = useTranslation();

    return (
        <section className="sustainability-section" id="sustainability">
            <div className="sustainability-container">
                <div className="sustainability-intro">
                    <h2>{t('sustainability.title')}</h2>
                    <p className="sustainability-subtitle">
                        {t('sustainability.subtitle')}
                    </p>
                </div>

                <div className="sustainability-grid">
                    <div className="sustainability-card">
                        <div className="sustainability-icon-wrapper">
                            <Building2 size={32} />
                        </div>
                        <h3>{t('sustainability.card1_title')}</h3>
                        <p>{t('sustainability.card1_desc')}</p>
                    </div>

                    <div className="sustainability-card">
                        <div className="sustainability-icon-wrapper">
                            <Sun size={32} />
                        </div>
                        <h3>{t('sustainability.card2_title')}</h3>
                        <p>{t('sustainability.card2_desc')}</p>
                    </div>

                    <div className="sustainability-card">
                        <div className="sustainability-icon-wrapper">
                            <Leaf size={32} />
                        </div>
                        <h3>{t('sustainability.card3_title')}</h3>
                        <p>{t('sustainability.card3_desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;
