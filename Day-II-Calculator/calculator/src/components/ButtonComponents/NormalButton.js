import React from 'react';
import './Button.css';

const NormalButton = props => {
    return (
        <button className={`${props.className}`}>
            {props.text}
        </button>
    );
};

export default NormalButton;
