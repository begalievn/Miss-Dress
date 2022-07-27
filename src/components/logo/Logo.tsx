import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import hero from "../../assets/header/hero.svg";

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
    <div className={style[styleLogo]} >MissDress <img src={hero} alt="hero" /></div>

  );
};

export default Logo;