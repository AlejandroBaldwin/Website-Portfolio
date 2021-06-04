import React from 'react';
import { Link } from 'react-router-dom';
import './PCards.styles.scss'

const PCards = ({image, title, href, border, link, odd}) => {
    if (link) {
        return (
            <Link to={href} className={border ? 'PCards__Item PCards__Item--Border odd' : 'PCards__Item'}>
                <img src={image} alt='preview' className='PCards__Item__BG' />
                <section className='PCards__Item__Hover' >
                    <p className='PCards__Item__Hover__Title' >{title}</p>
                </section>
            </Link>
        )
    } else {
        return (<a href={href} className={border ? `PCards__Item PCards__Item--Border ${odd ? 'odd' : ''}` : 'PCards__Item'}>
            <img src={image} alt='preview' className='PCards__Item__BG' />
            <section className='PCards__Item__Hover' >
                <p className='PCards__Item__Hover__Title' >{title}</p>
            </section>
        </a>)
    }
};

export default PCards;