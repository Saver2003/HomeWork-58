import React from 'react';
import './Alert.css';

const Alert = props => {
    return (
        <div className={props.type}>
            {props.children}
            {props.dismiss ? <span> X </span> : undefined}
            
        </div>
    )
};

export default Alert;