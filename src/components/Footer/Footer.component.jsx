import React from 'react';
import './Footer.styles.scss';
import Description from '../Description/Description.component';

const Footer = () => {
    return (
        <footer className='Footer' >
            <Description styles='footer' >Copyright © {(new Date()).getFullYear()} - Alejandro Baldwin, alejandrosbaldwin.com</Description>
        </footer>
    );
};

export default Footer;