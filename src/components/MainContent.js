import React from 'react';
import styles from '../styles/MainContent.module.css';

// Import images
import call from '../pictures/call.jpeg';

import ais from '../pictures/ais.png';
import aixl from '../pictures/aixl.png';
import ciek from '../pictures/ciek.png';
import hx from '../pictures/hx.jpeg';
import social27 from '../pictures/social27.png';

import image1 from '../pictures/image1.png';
import image2 from '../pictures/image2.png';
import image3 from '../pictures/image3.png';
import image4 from '../pictures/image4.png';

import phase0 from '../pictures/phase0.png';
import phase1 from '../pictures/phase1.png';
import phase2 from '../pictures/phase2.png';
import phase3 from '../pictures/phase3.png';
import phase4 from '../pictures/phase4.png';
import phase5 from '../pictures/phase5.png';
import phase6 from '../pictures/phase6.png';
import calendar from '../pictures/calendar.png';

function MainContent() {
    const companyLogos = [ais, aixl, ciek, hx, social27];
    const trendingImages = [image1, image2, image3, image4];
    const phaseImages = [phase0, phase1, phase2, phase3, phase4, phase5, phase6, calendar];

    return (
        <div className={styles.mainContent}>
            <div className={styles.heroSection}>
                <div className={styles.content}>
                    <h1>Start Your AI Journey with Us</h1>
                    <h3>Your go-to AI Consultancy for</h3>
                    <h5>AI Solutions</h5>
                    <div className={styles.buttons}>
                        <button className={styles.actionButton}>Book a Call</button>
                        <button className={styles.actionButton}>See Case Studies</button>
                    </div>
                    <span>Partnered with innovators like</span>
                    <div className={styles.logoContainer}>
                        {companyLogos.map((logo, index) => (
                            <img key={index} src={logo} alt={`Company Logo ${index + 1}`} className={styles.logo} />
                        ))}
                    </div>
                </div>
                <img src={call} alt="Call Us" className={styles.callIcon} />
            </div>
            <h2 className={styles.trendingTitle}>What's Trending</h2>
            <div className={styles.imageGrid}>
                {trendingImages.map((img, index) => (
                    <img key={index} src={img} alt={`Trending Imag ${index + 1}`} className={styles.images} />
                ))}
            </div>
            <div className={styles.verticalImages}>
                {phaseImages.map((img, index) => (
                    <div key={index} className={styles.imageCard}>
                        <img src={img} alt={`Phase Imag ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainContent;