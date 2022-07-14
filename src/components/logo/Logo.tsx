import React from 'react';

import style from './Logo.module.scss'
import hero from '../../assets/header/hero.svg'
const Logo = () => {
    return (
        
            <div className={style.logo} >MissDress <img src={hero} alt="hero" /></div>
            
    );
};

export default Logo;