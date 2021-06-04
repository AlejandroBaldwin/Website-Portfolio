import React from 'react';
import './Description.styles.scss'

const Description = ({children, styles}) => {
    if (styles) {
        styles = styles.split(' ');
        styles = styles.map(style => `Description--${style}`);
        styles = styles.join(' ');
    } else {
        styles = '';
    }
    return (
        <p className={`Description ${styles}`} >{children}</p>
    );
};

export default Description;