import React from 'react';
import { Mail, Phone } from 'lucide-react';

const SoftwareSolutions = () => {
    return (
        <section className="software-section ideas-container pt-5" >
            <div className='container'>
                <div className="software-wrapper ">
                <div className="software-left">
                    <h1 className="software-heading">
                        Transforming your ideas into <span>Seamless Software Solutions</span>
                    </h1>
                    <p className="software-description">
                        Transform your ideas into innovative and scalable software solutions. Our expert <br/> team ensures a
                        seamless development process, from concept to deployment,<br/> delivering efficient, high-quality results
                        tailored to your business needs.
                    </p>

                    <ul className="software-list">
                        <li><span className='tick'>✔</span> Project Planning</li>
                        <li><span className='tick'>✔</span> Designing and Prototyping</li>
                        <li><span className='tick'>✔</span> Development and Testing</li>
                        <li><span className='tick'>✔</span> Deployment and Maintenance</li>
                    </ul>

                    <div className="contact-box">
                        <div className="contact-item">
                            <div className="icon-circle">
                                <Mail size={20} />
                            </div>
                            <div className="contact-text">
                                <p className="contact-label">Email</p>
                                <p className="contact-info">info@logixland.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-circle">
                                <Phone size={20} />
                            </div>
                            <div className="contact-text">
                                <p className="contact-label">Make A Call</p>
                                <p className="contact-info">+923014313201</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="software-right">
                    <img
                        style={{width: '70%'}}
                        src="/src/assets/software-development.webp"
                        alt="Software development"
                        className="software-image"
                    />
                </div>
            </div>
            </div>
        </section>
    );
};

export default SoftwareSolutions;
