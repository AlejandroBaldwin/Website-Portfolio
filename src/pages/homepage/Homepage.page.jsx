import React from 'react';

import NavBar from '../../components/NavBar/NavBar.component';
import Hero from '../../components/Hero/Hero.component';
import Portfolio from '../../components/Portfolio/Portfolio.component';
import AboutUs from '../../components/AboutUs/AboutUs.component';
import Skills from '../../components/Skills/Skills.component';
import Contact from '../../components/Contact/Contact.component';
import Footer from '../../components/Footer/Footer.component';

import './Homepage.styles.scss';



const Homepage = () => {
    return (
        <section className='homepage' >
            <NavBar />
            <Hero />
            <Portfolio />
            <AboutUs />
            <Skills />
            <Contact />
            <Footer />
        </section>
    );
};

export default Homepage;