import React, { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";


const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isComplete = Object.values(formData).every((val) => val.trim() !== '');

    return (
        <div className="contact-container">
            <div className="left-panel">
                <h4 style={{ color: ' #aaaaaa' }}>Get In Touch</h4>
                <h1 style={{ fontSize: '45px'}}>
                    Let’s Talk For your <br />
                    <span className="highlight">Next Projects</span>
                </h1>
                <p className="subtext">
                    Ready to turn your ideas into reality? Drop us a line <br/> and let's make magic happen!
                </p>
                <ul className="feature-list">
                    <li> <span className='tick-list'><IoMdCheckmark  /></span> Proven Track Record in Software Development</li>
                    <li> <span className='tick-list'><IoMdCheckmark /></span> Expertise in DevOps & Cloud Infrastructure</li>
                    <li> <span className='tick-list'><IoMdCheckmark /></span> Innovative Solutions in Software Architecture</li>
                </ul>
            
            </div>

            <form className="right-form">
                <div className="form-group">
                    <div className="input-field">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="e.g., John Doe"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="e.g., support@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-field">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="e.g., +1 (555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="e.g., Project Proposal"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="input-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button className="form-button" type="submit" disabled={!isComplete}>
                    Send Us Message
                </button>
            </form>

        </div>
    );
};

export default ContactForm;
