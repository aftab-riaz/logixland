import React, { useEffect } from 'react';
import { ContactHero } from '../component/contactus/ContactHero';
import ContactForm from '../component/contactus/ContactForm';


export const ContactUsPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#131313';

        return () => {
            document.body.style.backgroundColor = '#131313';
        };
    }, []);

    return (
        <>
        <ContactHero />
        <ContactForm />
        
        
           
           </>
    );
};
