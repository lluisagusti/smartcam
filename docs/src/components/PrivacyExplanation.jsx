import React from 'react';
import { ShieldCheck, ServerCrash, EyeOff } from 'lucide-react';
import '../styles/PrivacyExplanation.css';

const PrivacyExplanation = () => {
    return (
        <section className="privacy-explanation" id="technology">
            <div className="privacy-container">
                <div className="privacy-intro">
                    <h2>Why Edge AI is the Ethical Choice</h2>
                    <p className="privacy-subtitle">
                        A non-technical guide to how our cameras protect citizen identities while keeping your city smart.
                    </p>
                </div>

                <div className="privacy-grid">
                    <div className="privacy-card">
                        <div className="icon-wrapper">
                            <EyeOff size={32} />
                        </div>
                        <h3>What Happens in the Camera, Stays in the Camera</h3>
                        <p>
                            Traditional security cameras stream raw video showing people's faces all day long. Our "Edge AI" cameras are different. They act like an eye and a brain combined. The camera looks at the street, counts the cars or detects a problem, and then <strong>immediately deletes the video</strong>. It only sends an anonymous text alert (like "3 cars in the junction") back to the council. No faces are ever recorded or transmitted.
                        </p>
                    </div>

                    <div className="privacy-card">
                        <div className="icon-wrapper">
                            <ServerCrash size={32} />
                        </div>
                        <h3>Immune to Cloud Data Leaks</h3>
                        <p>
                            We've all seen the news about massive companies suffering data breaches, exposing the private information of millions. Because our cameras process everything locally on the device (the "edge") and never send raw video to a central cloud server, there is no high-value database for hackers to steal. You can't leak what you don't store.
                        </p>
                    </div>

                    <div className="privacy-card">
                        <div className="icon-wrapper">
                            <ShieldCheck size={32} />
                        </div>
                        <h3>Zero Data Brokerage</h3>
                        <p>
                            Big tech corporations have a long history of collecting your data to sell to advertisers or third-party data brokers. Our solution is built on open-source technology. The council owns the hardware, and the council owns the anonymous data. There are no hidden backdoors, no secretive advertising profiles, and absolute compliance with European GDPR laws.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyExplanation;
