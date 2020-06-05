import React from 'react';

import './ErrorComponent.css'
import errorIcon from './darth-vader.png'

const ErrorComponent = () => {
    return(
        <div className= 'ErrorComponent'>
            <img src={errorIcon} alt="error icon"/>
           <p>
               <span>Something gone wrong</span>
                <span>Don't panic! Be happy!!!</span>
           </p> 
        </div>
    );
}

export default ErrorComponent;

