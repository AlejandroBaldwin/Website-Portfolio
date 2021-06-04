import React from 'react';
import './CTA.scss';

const CTA = React.forwardRef(({ customStyles, children, link, onClick }, ref) => {

        if (customStyles) {
            customStyles = customStyles.split(' ');
            customStyles = customStyles.map(element => {
                return `CTA--${element}`
            });
            customStyles = customStyles.join(" ");
        }
        return (
            <a onClick={onClick} href={link} className={`CTA ${customStyles}`} >{children}</a>
        );

        
    }
)

export default CTA;