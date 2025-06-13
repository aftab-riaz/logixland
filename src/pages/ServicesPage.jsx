import React, { useEffect } from 'react';
import { HeroServices } from '../component/services/HeroServices';
import ServicesSection from '../component/home/ServicesSection';


export const ServicesPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#131313';

        return () => {
            document.body.style.backgroundColor = '#131313';
        };
    }, []);

    return (
        <>
        <HeroServices />
        
          
           </>
    );
};
