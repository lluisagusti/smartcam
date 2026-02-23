import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ApplicationGrid.css';

const getApplications = (t) => [
    {
        title: t('applications.app1_title'),
        description: t('applications.app1_desc'),
        image: '/images/applications/parking.jpg',
    },
    {
        title: t('applications.app2_title'),
        description: t('applications.app2_desc'),
        image: '/images/applications/traffic.jpg',
    },
    {
        title: t('applications.app3_title'),
        description: t('applications.app3_desc'),
        image: '/images/applications/crowd.jpg',
    },
    {
        title: t('applications.app4_title'),
        description: t('applications.app4_desc'),
        image: '/images/applications/people-counting.jpg',
    },
    {
        title: t('applications.app5_title'),
        description: t('applications.app5_desc'),
        image: '/images/applications/remote-monitoring.jpg',
    },
    {
        title: t('applications.app6_title'),
        description: t('applications.app6_desc'),
        image: '/images/applications/waste-detection.jpg',
    }
];

const ApplicationGrid = () => {
    const { t } = useTranslation();
    const applications = getApplications(t);

    return (
        <section className="applications-section" id="applications">
            <div className="container">
                <div className="section-header">
                    <h2>{t('applications.header_title')}</h2>
                    <p>{t('applications.header_subtitle')}</p>
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
