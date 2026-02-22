import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/LegalPrivacy.css';

const TermsOfService = () => {
    const { t } = useTranslation();

    const sections = [
        { key: 's1', hasDetails: true },
        { key: 's2' }, { key: 's3' }, { key: 's4' },
        { key: 's5' }, { key: 's6' }, { key: 's7' },
        { key: 's8' }, { key: 's9' }, { key: 's10' },
        { key: 's11' }, { key: 's12' }, { key: 's13' },
        { key: 's14' },
    ];

    return (
        <div className="page-wrapper">
            <Navigation />

            <main className="legal-main">
                <div className="legal-container">
                    <header className="legal-header">
                        <h1>{t('terms_of_service.title')}</h1>
                    </header>

                    <section className="legal-content">
                        {sections.map(({ key, hasDetails }) => (
                            <div className="legal-block" key={key}>
                                <h2>{t(`terms_of_service.${key}_title`)}</h2>
                                <p>{t(`terms_of_service.${key}_body`)}</p>
                                {hasDetails && (
                                    <>
                                        <p>{t(`terms_of_service.${key}_company`)}</p>
                                        <p>{t(`terms_of_service.${key}_cif`)}</p>
                                        <p>{t(`terms_of_service.${key}_address`)}</p>
                                        <p>{t(`terms_of_service.${key}_email`)}</p>
                                    </>
                                )}
                            </div>
                        ))}
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
