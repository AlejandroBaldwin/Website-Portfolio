import React from 'react';
import './Title.styles.scss'

const Title = ({children, styles}) => {
    if (styles) {
        styles = styles.split(' ');
        styles = styles.map(style => `Title--${style}`);
        styles = styles.join(' ');
    } else {
        styles = '';
    }
    return (
        <p className={`Title ${styles}`}>{children}</p>
    );
};

export default Title;