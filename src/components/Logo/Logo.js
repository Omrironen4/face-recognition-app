import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css'
import brain from './brain.png'


const Logo = () => {
    return (
        <div>
            <Tilty className="tilty">
                <div className="inner"><img alt='brain' src={brain}/></div>
            </Tilty>
        </div>
    );
}

export default Logo;