import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/ServicesSection.css';

const ServicesSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById('services');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const services = [
        {
            id: 1,
            title: 'Strategic Digital Asset Advisory (SDAA)',
            to: 'digital',
            description: 'Future-proof your business with Web 3.0 technologies and strategies to stay ahead of the curve.',
            image: '/assets/images/funds.webp',
        },
        {
            id: 2,
            title: 'Education',
            to: 'education',
            description: 'Learn about digital assets and blockchain with our tailored educational programs.',
            image: '/assets/images/education.webp',
        },
        {
            id: 3,
            title: 'Strategic Web 3.0 Consultancy',
            to: 'WS',
            description: 'We provide end-to-end blockchain development services to build secure, transparent, and efficient decentralized solutions.',
            image: '/assets/images/blockchai.png',
        },
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">Our Services at a Glance</h2>
                <div className="services-grid">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="service-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                            transition={{ duration: 0.5, delay: service.id * 0.2 }}
                        >
                            <div
                                className="service-image"
                                style={{ backgroundImage: `url(${service.image})` }}
                                aria-label={service.title}
                            />
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description1">{service.description}</p>
                                <div className="button-container">
                                    <Link to={`/${service.to}`} className="ba-learn-more">
                                        <span>Learn More</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;