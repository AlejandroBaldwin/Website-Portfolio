import React from 'react';
import './Portfolio.scss';
import Line from '../Line/Line.component';
import PGrid from '../PGrid/PGrid.component'
import Title from '../Title/Title.component';

//Cards Configuration//


const Portfolio = ({cards}) => {
    return (
        <section className='Portfolio' id='Portfolio' >
            <Title styles='portfolio' >Portfolio</Title>
            <Line styles='gray' />
            <PGrid cards={cards} />
        </section>
    );
};

export default Portfolio;