import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import hero from "../../assets/header/hero.svg";
import { libraryIcon } from '../../assets/icons';

import style from "./Logo.module.scss";


const Logo = () => {
  const location = useLocation();
  const [styleLogo, setstyleLogo] = useState("logo");

  useEffect(() => {

    if (location.pathname === "/profile") {
      setstyleLogo("logo2");
    }else{
      setstyleLogo("logo");
    }



  }, [location.pathname]);


  return (
    <div className={style[styleLogo]} >AlaToo-lib </div> //<img src={hero} alt="hero" />
  );
};

export default Logo;
