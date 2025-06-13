import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="text-white pt-5" style={{ backgroundColor: 'black' }}>
            <div className="container">
                <div className="row align-items-start">

                    <div className="col-md-4 mb-4">
                        <a href="/" className="d-flex align-items-center mb-3">
                            <img src="/src/assets/LogixLand.svg" alt="LogixLand Software Solutions" style={{ maxHeight: '50px' }} />
                        </a>
                    </div>


                    <div className="col-md-4 mb-4 text-center">
                        <h5 className="fw-semibold mb-3">Quick Links</h5>
                        <div className="d-flex justify-content-center gap-3 mb-3">
                            <a href="/" className="footer-link">Service</a>
                            <a href="/about" className="footer-link">Projects</a>
                            <a href="/about" className="footer-link">Faqs</a>
                            <a href="/about" className="footer-link">Contact</a>

                        </div>
                        <p className="fw-bold text-white m-0">
                            Where Innovation Meets Execution: Building Cutting-Edge Software Solutions
                        </p>
                    </div>


                    <div className="col-md-4 mb-4 text-md-end">
                        <h5 className="fw-semibold mb-3">Contact Info</h5>
                        <ul className="list-unstyled">
                            <li className="py-1"><FaPhone color='#c9f31d' size={20}/><a href="tel:+923014313201" className="footer-link"> +92 301 4313201</a></li>
                            <li className="py-1"><CiMail color='#c9f31d' size={20}/><a href="mailto:info@logixland.com" className="footer-link"> info@logixland.com</a></li>
                            <li className="py-1"><CiLocationOn color='#c9f31d' size={20} /> <span className="text-white"> Model Town, Lahore</span></li>
                        </ul>
                    </div>
                </div>


                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top border-secondary pt-3 mt-4">

                    <div className="text-start mb-2 mb-md-0">
                        <small className="text-white">© 2025 LogixLand. All Rights Reserved.</small>
                    </div>


                    <div className="mb-2 mb-md-0">
                        <button onClick={scrollToTop} className="scroll-up" style={{ backgroundColor: '#c9f31d', color: 'black' }}>
                           <FaAngleDoubleUp size={20} style={{marginBottom: '40px',  }} />
                        </button>
                    </div>


                    <div className="text-end d-flex flex-wrap justify-content-end gap-3">
                        <a href="#" className="footer-link">Upwork</a>
                        <a href="#" className="footer-link">Github</a>
                        <a href="#" className="footer-link">LinkedIn</a>
                        <a href="#" className="footer-link">Schedule a Meeting</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
