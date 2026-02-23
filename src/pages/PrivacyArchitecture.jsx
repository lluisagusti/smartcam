import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Cpu, Eye, EyeOff, Database, Scale, ArrowRight, Lock, CloudOff, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/PrivacyArchitecture.css';

const PrivacyArchitecture = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="page-wrapper">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.privacy_arch_title')}</title>
                <meta name="description" content={t('seo.privacy_arch_desc')} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://smartcamsolutions.io/privacy-architecture" />
                <meta property="og:title" content={t('seo.privacy_arch_title')} />
                <meta property="og:description" content={t('seo.privacy_arch_desc')} />
                <meta property="og:image" content="https://smartcamsolutions.io/images/social/open-graph.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://smartcamsolutions.io/privacy-architecture" />
                <meta name="twitter:title" content={t('seo.privacy_arch_title')} />
                <meta name="twitter:description" content={t('seo.privacy_arch_desc')} />
                <meta name="twitter:image" content="https://smartcamsolutions.io/images/social/open-graph.jpg" />
            </Helmet>
            <Navigation />

            {/* Hero Section */}
            <section className="pp-hero">
                <div className="pp-hero-container">
                    <div className="pp-hero-badge">{t('privacy_policy_page.badge')}</div>
                    <h1>{t('privacy_policy_page.title')}</h1>
                    <p className="pp-hero-subtitle">{t('privacy_policy_page.intro')}</p>
                    <p className="pp-hero-updated">{t('privacy_policy_page.last_updated')}</p>
                </div>
            </section>

            {/* How It Works - Visual Flow */}
            <section className="pp-flow-section">
                <div className="pp-section-container">
                    <div className="pp-section-header">
                        <h2>{t('privacy_policy_page.flow_title')}</h2>
                        <p>{t('privacy_policy_page.flow_subtitle')}</p>
                    </div>
                    <div className="pp-flow-image">
                        <img src="/images/privacy/data-flow.jpg" alt="Privacy Data Flow" className="pp-flow-img" />
                    </div>
                    <div className="pp-flow-grid">
                        <div className="pp-flow-step">
                            <div className="pp-flow-icon">
                                <Eye size={32} />
                            </div>
                            <h3>{t('privacy_policy_page.flow_step1_title')}</h3>
                            <p>{t('privacy_policy_page.flow_step1_desc')}</p>
                        </div>
                        <div className="pp-flow-arrow">
                            <ArrowRight size={28} />
                        </div>
                        <div className="pp-flow-step">
                            <div className="pp-flow-icon">
                                <Cpu size={32} />
                            </div>
                            <h3>{t('privacy_policy_page.flow_step2_title')}</h3>
                            <p>{t('privacy_policy_page.flow_step2_desc')}</p>
                        </div>
                        <div className="pp-flow-arrow">
                            <ArrowRight size={28} />
                        </div>
                        <div className="pp-flow-step">
                            <div className="pp-flow-icon">
                                <EyeOff size={32} />
                            </div>
                            <h3>{t('privacy_policy_page.flow_step3_title')}</h3>
                            <p>{t('privacy_policy_page.flow_step3_desc')}</p>
                        </div>
                        <div className="pp-flow-arrow">
                            <ArrowRight size={28} />
                        </div>
                        <div className="pp-flow-step">
                            <div className="pp-flow-icon">
                                <Database size={32} />
                            </div>
                            <h3>{t('privacy_policy_page.flow_step4_title')}</h3>
                            <p>{t('privacy_policy_page.flow_step4_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy Cards Grid */}
            <section className="pp-cards-section">
                <div className="pp-section-container">
                    <div className="pp-section-header">
                        <h2>{t('privacy_policy_page.details_title')}</h2>
                        <p>{t('privacy_policy_page.details_subtitle')}</p>
                    </div>
                    <div className="pp-cards-grid">
                        <div className="pp-card">
                            <div className="pp-card-icon">
                                <CloudOff size={32} />
                            </div>
                            <h3>{t('privacy_policy_page.s1_title')}</h3>
                            <p>{t('privacy_policy_page.s1_body')}</p>
                        </div>
                        <div className="pp-card">
                            <div className="pp-card-icon">
                                <Cpu size={32} />
                            </div>
                            <h3>{t('privacy_policy_page.s2_title')}</h3>
                            <p>{t('privacy_policy_page.s2_body')}</p>
                        </div>
                        <div className="pp-card">
                            <div className="pp-card-icon">
                                <Database size={32} />
                            </div>
                            <h3>{t('privacy_policy_page.s3_title')}</h3>
                            <p>{t('privacy_policy_page.s3_body')}</p>
                        </div>
                        <div className="pp-card">
                            <div className="pp-card-icon">
                                <Scale size={32} />
                            </div>
                            <h3>{t('privacy_policy_page.s4_title')}</h3>
                            <p>{t('privacy_policy_page.s4_body')}</p>
                        </div>
                        <div className="pp-card">
                            <div className="pp-card-icon">
                                <Lock size={32} />
                            </div>
                            <h3>{t('privacy_policy_page.s5_title')}</h3>
                            <p>{t('privacy_policy_page.s5_body')}</p>
                        </div>
                        <div className="pp-card">
                            <div className="pp-card-icon">
                                <Users size={32} />
                            </div>
                            <h3>{t('privacy_policy_page.s6_title')}</h3>
                            <p>{t('privacy_policy_page.s6_body')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="pp-cta-section">
                <div className="pp-section-container">
                    <div className="pp-cta-content">
                        <ShieldCheck size={48} />
                        <h2>{t('privacy_policy_page.cta_title')}</h2>
                        <p>{t('privacy_policy_page.contact')}</p>
                        <a href="/contact" className="btn-primary">{t('nav.contact')}</a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyArchitecture;
