import React from 'react';
import PCards from '../PCards/PCards.component';

import './PGrid.styles.scss'

//Portfolio Images//

import WSU from '../../assets/img/6.png';
import CLR from '../../assets/img/5.png';
import FND from '../../assets/img/4.png';
import KPM from '../../assets/img/7.png';
import SOS from '../../assets/img/3.jpg';

const cards = [
    {
        title: 'We Stocked Up',
        image: WSU,
        href: 'https://westockedup.com',
        border: false
    },
    {
        title: 'Clarify',
        image: CLR,
        href: 'https://lord-baldwin-of-kerry.github.io/Travel-Site/',
        border: true
    },
    {
        title: 'Smart Brain',
        image: FND,
        href: 'https://smart-brain98.herokuapp.com/',
        border: false
    },
    {
        title: 'Kopo Merch',
        image: KPM,
        href: 'https://kopoproductions.github.io/kopo-merch/#/',
        border: true
    },
    {
        title: 'Stoked On Solar',
        image: SOS,
        href: 'https://stokedonsolar.com',
        border: true,
        odd: true
    }
]

const PGrid = () => {
    return (
        <section className='PGrid'>
            {
                cards.map(({...attributes}) => {
                return <PCards {...attributes} />
                })
            }
        </section>
    )
};

export default PGrid;