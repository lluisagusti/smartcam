import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Using provided credentials: service_m5j4ynp, template_drhmf6q
        // Note: To work completely, a public key is usually required by EmailJS, 
        // but the user only provided service and template IDs. We will pass a placeholder 
        // or let it assume it's initialized globally in index.html (if we had the key).
        // The standard signature is sendForm(serviceID, templateID, form.current, publicKey)
        emailjs.sendForm('service_m5j4ynp', 'template_drhmf6q', form.current, 'Yez--sSgdi9ETP4fw')
            .then((result) => {
                setStatus('success');
                form.current.reset();
            }, (error) => {
                console.error(error.text);
                setStatus('error');
            });
    };

    return (
        <>
            <Navigation />
            <main className="contact-page">
                <section className="contact-hero">
                    <h1>Get in Touch</h1>
                    <p>Ready to deploy ethical Edge AI in your municipality? Contact our sales engineering team today.</p>
                </section>

                <section className="contact-form-section">
                    <div className="form-container">
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="user_name" required placeholder="John Doe" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="user_email" required placeholder="john@council.gov.eu" />
                            </div>

                            <div className="form-group">
                                <label>Municipality / Organization</label>
                                <input type="text" name="organization" required placeholder="City Council of..." />
                            </div>

                            <div className="form-group">
                                <label>Project Details</label>
                                <textarea name="message" required rows="5" placeholder="Tell us about the areas you want to monitor..."></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary submit-btn"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && <p className="status-message success">Message sent successfully! We will be in touch soon.</p>}
                            {status === 'error' && <p className="status-message error">Failed to send message. Please ensure your EmailJS public key is configured.</p>}
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
