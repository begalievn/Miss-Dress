// import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { IAdmin } from "../../../utils/types/types";

import classes from "../adminPageMain.module.scss";

const ContentAdminMain = ({ title, image, route }: IAdmin) => {
  const location = useLocation();

  return (
    <div className={classes.link}>
      <Link
        to={route}
        className={location.pathname === route ? classes.activeLink : ""}
      >
        <img src={image} alt="" /> {title}
      </Link>
    </div>
  );
};

export default ContentAdminMain;
