import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../pictures/logo.jpeg';



function Header() {
    return (
        <header className={styles.header} id='header'>
            <div className="d-flex align-items-center justify-content-center">
                <a href='#header'>
                    <img src={logo} alt="Company Logo" className={styles.logo} />
                </a>
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        What we do
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownItem}>
                                Solutions
                                <div className={styles.submenu}>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Chatbot Devlopment</div>
                                        <div className={styles.submenuItem}>Voice bot Solutions</div>
                                        <div className={styles.submenuItem}>Language Model Tuning</div>
                                        <div className={styles.submenuItem}>Custem GTP Applictions</div>
                                        <div className={styles.submenuItem}>Algorith Devlopment</div>
                                        <div className={styles.submenuItem}>Retrieval-Augmented  Gentation</div>
                                        <div className={styles.submenuItem}>Machine Learning Devlopment</div>
                                        <div className={styles.submenuItem}>Nutural Language Processing</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Supply Chain AI</div>
                                        <div className={styles.submenuItem}>Market Research AI</div>
                                        <div className={styles.submenuItem}>AI for Sustainability</div>
                                        <div className={styles.submenuItem}>Prompt Enginnering</div>
                                        <div className={styles.submenuItem}>Predictive Analytics</div>
                                        <div className={styles.submenuItem}>Financial Forecasdting</div>
                                        <div className={styles.submenuItem}>Business Automation</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>AI Training</div>
                                        <div className={styles.submenuItem}>Ethical AI</div>
                                        <div className={styles.submenuItem}>Data Mining</div>
                                        <div className={styles.submenuItem}>Healthcare AI</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.dropdownItem}>
                                Industries
                                <div className={styles.submenu}>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Agriculture</div>
                                        <div className={styles.submenuItem}>Automotive</div>
                                        <div className={styles.submenuItem}>Banking</div>
                                        <div className={styles.submenuItem}>Consumer Goods & Services</div>
                                        <div className={styles.submenuItem}>Education</div>
                                        <div className={styles.submenuItem}>Finance</div>
                                        <div className={styles.submenuItem}>Government & Public Sector</div>
                                        <div className={styles.submenuItem}>Healthcare</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Hospitality & Tourism</div>
                                        <div className={styles.submenuItem}>Insurance</div>
                                        <div className={styles.submenuItem}>Manufacrturing</div>
                                        <div className={styles.submenuItem}>Media & Entertainment</div>
                                        <div className={styles.submenuItem}>Real Estate</div>
                                        <div className={styles.submenuItem}>Retail</div>
                                        <div className={styles.submenuItem}>Software & Platforms</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Telecommuinications</div>
                                        <div className={styles.submenuItem}>Transportation & Logistics</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.dropdownItem}>
                                Case Study
                                <div className={styles.submenu}>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Hypnosis Script Generator</div>
                                        <div className={styles.submenuItem}>AI Autonomous Recruiter Agent</div>
                                        <div className={styles.submenuItem}>Market Sentiment Analysis</div>
                                        <div className={styles.submenuItem}>Tutor GTP</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>AI Multi-Trading Bot</div>
                                        <div className={styles.submenuItem}>E-Commerace Voice-bot</div>
                                        <div className={styles.submenuItem}>Advances NBA Betting Application</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                    
                    <li className={styles.navItem}>
                        What we think
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownItem}>
                                Solutions
                                <div className={styles.submenu}>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Chatbot Devlopment</div>
                                        <div className={styles.submenuItem}>Voice bot Solutions</div>
                                        <div className={styles.submenuItem}>Language Model Tuning</div>
                                        <div className={styles.submenuItem}>Custem GTP Applictions</div>
                                        <div className={styles.submenuItem}>Algorith Devlopment</div>
                                        <div className={styles.submenuItem}>Retrieval-Augmented  Gentation</div>
                                        <div className={styles.submenuItem}>Machine Learning Devlopment</div>
                                        <div className={styles.submenuItem}>Nutural Language Processing</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Supply Chain AI</div>
                                        <div className={styles.submenuItem}>Market Research AI</div>
                                        <div className={styles.submenuItem}>AI for Sustainability</div>
                                        <div className={styles.submenuItem}>Prompt Enginnering</div>
                                        <div className={styles.submenuItem}>Predictive Analytics</div>
                                        <div className={styles.submenuItem}>Financial Forecasdting</div>
                                        <div className={styles.submenuItem}>Business Automation</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>AI Training</div>
                                        <div className={styles.submenuItem}>Ethical AI</div>
                                        <div className={styles.submenuItem}>Data Mining</div>
                                        <div className={styles.submenuItem}>Healthcare AI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li className={styles.navItem}>
                        What we Are
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownItem}>
                                Case Study
                                <div className={styles.submenu}>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Chatbot Devlopment</div>
                                        <div className={styles.submenuItem}>Voice bot Solutions</div>
                                        <div className={styles.submenuItem}>Language Model Tuning</div>
                                        <div className={styles.submenuItem}>Custem GTP Applictions</div>
                                        <div className={styles.submenuItem}>Algorith Devlopment</div>
                                        <div className={styles.submenuItem}>Retrieval-Augmented  Gentation</div>
                                        <div className={styles.submenuItem}>Machine Learning Devlopment</div>
                                        <div className={styles.submenuItem}>Nutural Language Processing</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Supply Chain AI</div>
                                        <div className={styles.submenuItem}>Market Research AI</div>
                                        <div className={styles.submenuItem}>AI for Sustainability</div>
                                        <div className={styles.submenuItem}>Prompt Enginnering</div>
                                        <div className={styles.submenuItem}>Predictive Analytics</div>
                                        <div className={styles.submenuItem}>Financial Forecasdting</div>
                                        <div className={styles.submenuItem}>Business Automation</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>AI Training</div>
                                        <div className={styles.submenuItem}>Ethical AI</div>
                                        <div className={styles.submenuItem}>Data Mining</div>
                                        <div className={styles.submenuItem}>Healthcare AI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li className={styles.navItem}>
                        Contact Us
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownItem}>Leadership</div>
                            <div className={styles.dropdownItem}>Contact Us</div>
                            <div className={styles.dropdownItem}>
                                About Us
                                <div className={styles.submenu}>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Corporate Sustainability</div>
                                        <div className={styles.submenuItem}>Diversity and Equily</div>
                                        <div className={styles.submenuItem}>Inclusion</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Corporate Social Responsibility</div>
                                        <div className={styles.submenuItem}>The PGAGI Way</div>
                                    </div>
                                    <div className={styles.column}>
                                        <div className={styles.submenuItem}>Sports Sponsorships</div>
                                        <div className={styles.submenuItem}>Alliances</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;