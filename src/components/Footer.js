import React from 'react';
import styles from '../styles/Footer.module.css';
import logo from '../pictures/logo.jpeg';



function Footer() {
    return (
        <footer className={styles.footer}>
            <div class="container-fluid mt-5">
                <div className={styles.card} class="mx-5">
                    <div class="row mb-4 ">
                        <div class="col-md-4 col-sm-11 col-xs-11">
                            <div class="footer-text pull-left">
                                <div className="d-flex align-items-center justify-content-center">
                                    <a href='#header'>
                                        <img src={logo} alt="Company Logo" className={styles.logo} />
                                    </a>
                                </div>
                                <div className={styles.social} class="mt-2 mb-3">
                                    <i class="fa fa-facebook-official fa-lg" ></i>
                                    <i class="fa fa-instagram fa-lg" ></i>
                                    <i class="fa fa-twitter fa-lg" ></i>
                                    <i class="fa fa-linkedin-square fa-lg" ></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
                        <div class="col-md-2 col-sm-4 col-xs-4">
                            <h5 className={styles.heading}>Usefull Links</h5>
                            <ul class="card-text">
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>GitHub</li>
                                <li>Free Products</li>
                            </ul>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-4">
                            <h5 className={styles.heading}>Industries</h5>
                            <ul class="card-text">
                                <li>Finance</li>
                                <li>Public Sector</li>
                                <li>Smart Office</li>
                                <li>Retail</li>
                            </ul>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-4">
                            <h5 className={styles.heading}>Other Resources</h5>
                            <ul >
                                <li>MIT License</li>
                                <li>Terms & Conditions</li>
                                <li>privacy Policy</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row">
                        <hr/>   
                        <p>CopyRight <span class="fa fa-copyright"></span> 2024 PG-AGI</p>    
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;