import React from 'react';
import './Subtitle.styles.scss';

const Subtitle = ({children, styles}) => {
    if (styles) {
        styles = styles.split(' ');
        styles = styles.map(style => `Subtitle--${style}`);
        styles = styles.join(' ');
    } else {
        styles = '';
    }
    return (
        <p className={`Subtitle ${styles}`} >{children}</p>
    );
};

export default Subtitle;