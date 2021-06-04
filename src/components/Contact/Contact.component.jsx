import React from 'react';
import './Contact.scss';
import Line from '../Line/Line.component';
import Title from '../Title/Title.component';
import Description from '../Description/Description.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const phone = <FontAwesomeIcon style={{color: "rgba(0, 0, 0, 0.75)"}} className='fa-3x grayed' icon={faPhone} />
    const envelope = <FontAwesomeIcon style={{color: "rgba(0, 0, 0, 0.75)"}} className='fa-3x grayed' icon={faEnvelope} />

    return (
        <section className='Contact' id='Contact' >
        <Title styles="contact" >Let's Get In Touch!</Title>
            <Line />
            <Description>Ready to start your next project? Give me a call or send me an email and I will get back to you as soon as possible!</Description>
            <section className="Contact__Methods">
                <a className="Contact__Methods__Item" href='tel: 239-747-3376' >
                    {phone}
                    <Description styles="contact" >+1 (239) 747 3376</Description>
                </a>
                <a className="Contact__Methods__Item" href='mailto:alejandro@baldwincorps.com' >
                    {envelope}
                    <Description styles="contact" >alejandro@baldwincorps.com</Description>
                </a>
            </section>
        </section>
    );
};

export default Contact;