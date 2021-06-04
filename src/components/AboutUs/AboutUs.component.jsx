import React from 'react';
import './AboutUs.scss';
import CTA from '../CTA/CTA.component';
import Title from '../Title/Title.component';
import Description from '../Description/Description.component';

const AboutUs = () => {
    return (
        <section className='AboutUs' id='AboutUs' >
            <Title styles='white' >Who am I?</Title>
            <Description styles='white' >I'm a self taught full stack developer looking for challenges</Description>
            <CTA link='#Skills' >CHECK OUR SKILLS</CTA>
        </section>
    );
};

export default AboutUs;