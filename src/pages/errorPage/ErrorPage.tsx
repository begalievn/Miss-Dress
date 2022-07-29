import React from "react";


import errorImage from "../../assets/error/errorImages.png";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Logo from "../../components/logo/Logo";

import style from "./ErrorPage.module.scss";


const ErrorPage = () => {
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