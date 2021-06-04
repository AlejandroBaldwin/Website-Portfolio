import React from 'react';
import './Hero.styles.scss';
import Title from '../Title/Title.component';
import Description from '../Description/Description.component';

import Line from '../Line/Line.component';
import CTA from '../CTA/CTA.component';

const Hero = () => {
    return (
        <section className={`Hero`} id='Hero' >
            <section className='Hero__Container' >
                <Title styles='hero white' >Your Trustworthy<br/>Full Stack Developer</Title>
                <Line />
                <Description styles='hero white' >For all your web development needs</Description>
                <CTA customStyles='Inverted' >Find more</CTA>
            </section>
        </section>
    )
}

export default Hero;