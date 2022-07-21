import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import classes from "../dilivery.module.scss";

const LinksDilivery = () => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <>
      <li className={classes.li}>
        <NavLink className={classes.link} to={"/delivery"}>
          <span
            className={
              location.pathname === "/delivery" ? classes.active : classes.link
            }
          >
            Доставка
          </span>
        </NavLink>
        <NavLink className={classes.link} to={"/contacts"}>
          <span
            className={
              location.pathname === "/contacts" ? classes.active : classes.link
            }
          >
            Контакты
          </span>
        </NavLink>
      </li>
    </>
  );
};

export default LinksDilivery;
