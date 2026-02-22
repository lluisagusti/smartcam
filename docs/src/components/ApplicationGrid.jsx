import React from 'react';
import '../styles/ApplicationGrid.css';

const applications = [
    {
        title: 'Smart Parking Management',
        description: 'Real-time slot monitoring using Edge AI. Reduce city congestion and commuter frustration by directing drivers instantly to open spots.',
        image: './images/parking-slot-monitoring/diagram.png',
    },
    {
        title: 'Crowd Heatmaps & Analytics',
        description: 'Integrates with Grafana to visualize high-traffic areas in real-time. Optimize public transport and urban planning while preserving anonymity.',
        image: './images/crowd-heat-map/diagram.png',
    },
    {
        title: 'Remote Environmental Monitoring',
        description: 'Powered by WiFi HaLow & Meshtastic, monitor remote locations like national parks for safety, wildlife, and trespassing without cellular networks.',
        image: './images/remote-monitoring-halow/diagram.png',
    }
];

const ApplicationGrid = () => {
    return (
        <section className="applications-section" id="applications">
            <div className="container">
                <div className="section-header">
                    <h2>Transform Your City</h2>
                    <p>Deploy highly effective, specialized AI applications designed for modern council needs.</p>
                </div>

                <div className="app-grid">
                    {applications.map((app, index) => (
                        <div key={index} className="app-card">
                            <div className="card-image-wrap">
                                <img src={app.image} alt={app.title} loading="lazy" />
                            </div>
                            <div className="card-content">
                                <h3>{app.title}</h3>
                                <p>{app.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApplicationGrid;
