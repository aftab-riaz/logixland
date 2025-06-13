import React, { useEffect } from 'react';
import { Hero } from '../component/about/Hero';
import GlobalClient from "../component/home/GlobalClient.jsx";
import ServicesSection from '../component/home/ServicesSection.jsx';

export const AboutPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#131313';

        return () => {
            document.body.style.backgroundColor = '#131313';
        };
    }, []);

    return (
        <>
            <Hero />
            <ServicesSection />
             <GlobalClient />
           </>
    );
};
