import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, ServerCrash, EyeOff } from 'lucide-react';
import '../styles/PrivacyExplanation.css';

const PrivacyExplanation = () => {
    const { t } = useTranslation();

    return (
        <section className="privacy-explanation" id="technology">
            <div className="privacy-container">
                <div className="privacy-intro">
                    <h2>{t('privacy_exp.title')}</h2>
                    <p className="privacy-subtitle">
                        {t('privacy_exp.subtitle')}
                    </p>
                </div>

                <div className="privacy-grid">
                    <div className="privacy-card">
                        <div className="icon-wrapper">
                            <EyeOff size={32} />
                        </div>
                        <h3>{t('privacy_exp.card1_title')}</h3>
                        <p dangerouslySetInnerHTML={{ __html: t('privacy_exp.card1_desc') }}></p>
                    </div>

                    <div className="privacy-card">
                        <div className="icon-wrapper">
                            <ServerCrash size={32} />
                        </div>
                        <h3>{t('privacy_exp.card2_title')}</h3>
                        <p>{t('privacy_exp.card2_desc')}</p>
                    </div>

                    <div className="privacy-card">
                        <div className="icon-wrapper">
                            <ShieldCheck size={32} />
                        </div>
                        <h3>{t('privacy_exp.card3_title')}</h3>
                        <p>{t('privacy_exp.card3_desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyExplanation;
