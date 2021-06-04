import React from 'react';
import './Line.styles.scss';

const Line = ({ styles }) => {
    
    if (styles) {
        styles = styles.split(' ');
        styles = styles.map(element => {
            return `Line--${element}`
        });
        styles = styles.join(" ");
    }

    return (
        <section className={`Line ${styles}`} />
    );
};

export default Line;