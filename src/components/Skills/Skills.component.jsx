import React from 'react';
import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faUsers, faLaptopCode, faSmile } from '@fortawesome/free-solid-svg-icons';
import Line from '../Line/Line.component';
import Title from '../Title/Title.component';
import Subtitle from '../Subtitle/Subtitle.component';
import Description from '../Description/Description.component';

const Skills = (props, ref) => {

    const brain = <FontAwesomeIcon style={{color: 'rgba(0, 0, 0, 0.79)'}} className='fa-4x' icon={faBrain} />
    const team = <FontAwesomeIcon style={{color: 'rgba(0, 0, 0, 0.79)'}} className='fa-4x' icon={faUsers} />
    const laptop = <FontAwesomeIcon style={{color: 'rgba(0, 0, 0, 0.79)'}} className='fa-4x' icon={faLaptopCode} />
    const smile = <FontAwesomeIcon style={{color: 'rgba(0, 0, 0, 0.79)'}} className='fa-4x' icon={faSmile} />

    return (
        <section className='Skills' id='Skills' >
        <Title styles="skills" >Most Important Skills</Title>
            <Line styles='gray' />
            <section className='Skills__Grid' >
                <section className='Skills__Grid__Item' >
                    <section className='Skills__Grid__Item__Icon' >{brain}</section>
                    <Subtitle styles='gray' >Problem Solving</Subtitle>
                    <Description styles="skills gray" >Divide and conquer, utilizing this technique in an agile environment, I am able to solve the smaller tasks the make up the bigger issue at hand.</Description>
                </section>
                <section className='Skills__Grid__Item' >
                    <section className='Skills__Grid__Item__Icon' >{team}</section>
                    <Subtitle styles='gray' >Team Work</Subtitle>
                    <Description styles="skills gray" >Working with (and leading) teams is nothing new to me. I love to create meaningful relationships with coworkers to enchance the working experience.</Description>
                </section>
                <section className='Skills__Grid__Item' >
                    <section className='Skills__Grid__Item__Icon' >{laptop}</section>
                    <Subtitle styles='gray' >Ready To Learn</Subtitle>
                    <Description styles="skills gray" >I am always on the forums. Learning new technologies to know when and how to use them is my passion. I believe that focusing in the core concepts rather than the tools themselves, provides an unique advantage to stay current and keep up with our fast-paced world.</Description>
                </section>
                <section className='Skills__Grid__Item' >
                    <section className='Skills__Grid__Item__Icon' >{smile}</section>
                    <Subtitle styles='gray' >Creative Solutions</Subtitle>
                    <Description styles="skills gray" >Whenever a problem arises, I'll look for a solution in the most efficient way possible!</Description>
                </section>
                
            </section>
        </section>
    );
};

export default Skills;