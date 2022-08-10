// import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { IAdmin } from "../../../utils/types/types";


import classes from "../adminPageMain.module.scss";

// import style from "../../../containers/header/Header.module.scss";

const ContentAdminMain = ({ title, image, route }: IAdmin) => {
  const location = useLocation();
  // const [color, setColor] = useState("red");
  // const [textColor, setTextColor] = useState("white");

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
