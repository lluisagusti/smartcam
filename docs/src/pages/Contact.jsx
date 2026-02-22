import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [sector, setSector] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Append the sector to the organization field before sending
        const originalOrg = form.current.organization.value;
        if (sector) {
            form.current.organization.value = `[${sector}] ${originalOrg}`;
        }

        // Using provided credentials: service_m5j4ynp, template_drhmf6q
        // Note: To work completely, a public key is usually required by EmailJS, 
        // but the user only provided service and template IDs. We will pass a placeholder 
        // or let it assume it's initialized globally in index.html (if we had the key).
        // The standard signature is sendForm(serviceID, templateID, form.current, publicKey)
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
                                <input type="text" name="user_name" required placeholder={t('contact.name_ph')} />
                            </div>

                            <div className="form-group">
                                <label>{t('contact.email')}</label>
                                <input type="email" name="user_email" required placeholder={t('contact.email_ph')} />
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
                                <input type="text" name="organization" required placeholder={t('contact.org_ph')} />
                            </div>

                            <div className="form-group">
                                <label>{t('contact.details')}</label>
                                <textarea name="message" required rows="5" placeholder={t('contact.details_ph')}></textarea>
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
