import React, { useEffect } from "react";


import errorImage from "../../assets/error/errorImages.png";
import Logo from "../../components/logo/Logo";

import style from "./ErrorPage.module.scss";


const ErrorPage = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <Logo />
        </div>
        <img className={style.image_error} src={errorImage} alt="" />
      </div>
    </>
  );
};

export default ErrorPage;
