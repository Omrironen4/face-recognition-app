import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css'
import brain from './brain.png'


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilty className="tilty"  style={{ scale: 1.05 }}>
                <div className="inner"><img alt='brain' src={brain}/></div>
            </Tilty>
        </div>
    );
}

export default Logo;