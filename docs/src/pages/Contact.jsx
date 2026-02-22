import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [status, setStatus] = useState('');
    const [sector, setSector] = useState('');
    const [captchaAnswer, setCaptchaAnswer] = useState('');
    const [captchaNums, setCaptchaNums] = useState({ a: 0, b: 0 });
    const [captchaError, setCaptchaError] = useState(false);

    const generateCaptcha = useCallback(() => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        setCaptchaNums({ a, b });
        setCaptchaAnswer('');
        setCaptchaError(false);
    }, []);

    useEffect(() => {
        generateCaptcha();
    }, [generateCaptcha]);

    const sendEmail = (e) => {
        e.preventDefault();

        // Honeypot check
        if (form.current.website && form.current.website.value) {
            return;
        }

        // Captcha check
        if (parseInt(captchaAnswer) !== captchaNums.a + captchaNums.b) {
            setCaptchaError(true);
            generateCaptcha();
            return;
        }

        setStatus('sending');

        // Append the sector to the organization field before sending
        const originalOrg = form.current.organization.value;
        if (sector) {
            form.current.organization.value = `[${sector}] ${originalOrg}`;
        }

        // EmailJS: service_m5j4ynp, template_drhmf6q, public key: Yez--sSgdi9ETP4fw
        emailjs.sendForm('service_m5j4ynp', 'template_drhmf6q', form.current, 'Yez--sSgdi9ETP4fw')
            .then((result) => {
                setStatus('success');
                // Restore the original organization value just in case
                form.current.organization.value = originalOrg;
                form.current.reset();
                setSector('');
            }, (error) => {
                form.current.organization.value = originalOrg;
                console.error(error.text);
                setStatus('error');
                generateCaptcha();
            });
    };

    return (
        <>
            <Navigation />
            <main className="contact-page">
                <section className="contact-hero">
                    <h1>{t('contact.title')}</h1>
                    <p>{t('contact.subtitle')}</p>
                </section>

                <section className="contact-form-section">
                    <div className="form-container">
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <div className="form-group">
                                <label>{t('contact.name')}</label>
                                <input type="text" name="user_name" required />
                            </div>

                            <div className="form-group">
                                <label>{t('contact.email')}</label>
                                <input type="email" name="user_email" required />
                            </div>

                            <div className="form-group">
                                <label>{t('contact.sector')}</label>
                                <select
                                    name="sector"
                                    value={sector}
                                    onChange={(e) => setSector(e.target.value)}
                                    className="sector-select"
                                >
                                    <option value="" disabled>{t('contact.sector_select')}</option>
                                    <option value={t('contact.sector_public')}>{t('contact.sector_public')}</option>
                                    <option value={t('contact.sector_private')}>{t('contact.sector_private')}</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>{t('contact.org')}</label>
                                <input type="text" name="organization" required />
                            </div>

                            <div className="form-group">
                                <label>{t('contact.details')}</label>
                                <textarea name="message" required rows="5" placeholder={t('contact.details_ph')}></textarea>
                            </div>

                            {/* Honeypot - hidden from humans */}
                            <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                            {/* Captcha */}
                            <div className="captcha-box">
                                <div className="captcha-challenge">
                                    <span className="captcha-icon">🔒</span>
                                    <span className="captcha-question">
                                        {t('contact.captcha_question', { a: captchaNums.a, b: captchaNums.b })}
                                    </span>
                                    <input
                                        type="number"
                                        value={captchaAnswer}
                                        onChange={(e) => { setCaptchaAnswer(e.target.value); setCaptchaError(false); }}
                                        className={`captcha-input ${captchaError ? 'captcha-error' : ''}`}
                                        required
                                        placeholder="?"
                                    />
                                </div>
                                {captchaError && <p className="captcha-error-msg">{t('contact.captcha_wrong')}</p>}
                            </div>

                            <button
                                type="submit"
                                className="btn-primary submit-btn"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? t('contact.btn_sending') : t('contact.btn_send')}
                            </button>

                            {status === 'success' && <p className="status-message success">{t('contact.msg_success')}</p>}
                            {status === 'error' && <p className="status-message error">{t('contact.msg_error')}</p>}
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
