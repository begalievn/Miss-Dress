import React from "react";

import hero from "../../assets/header/hero.svg";

import style from "./Logo.module.scss";


const Logo = () => {

  return (    
    <div className={style.logo} >MissDress <img src={hero} alt="hero" /></div>
            
  );
};

export default Logo;