import { useEffect } from 'react';
import Solutions from "../component/home/Solutions.jsx";
import Ideas from "../component/home/Ideas.jsx";
import ServicesSection from "../component/home/ServicesSection.jsx";
import Skills from "../component/home/Skills.jsx";
import ContactForm from "../component/home/Contact.jsx";
import Projects from "../component/home/Project.jsx";
import BlogSection from "../component/home/BlogSection.jsx";
import GlobalClient from "../component/home/GlobalClient.jsx";

const App = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#131313'; 

        return () => {
            
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <>
            <Solutions />
            <Ideas />
            <ServicesSection />
            <Skills />
            <Projects />
            <ContactForm />
            <BlogSection />
            <GlobalClient />
        </>
    );
};

export default App;
