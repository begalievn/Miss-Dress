import React from "react";


import jwt_decode from "jwt-decode";

import styles from "../../adminPageUsers/adminPageUsers.module.scss";
import {
  bellIcon,
  profileAva,
} from "../../../../../assets/adminPage/adminPageIcons";
import { adminAva } from '../../../../../assets/adminPage/adminPageIcons';

import classes from "./profileAva.module.scss";

const ProfileAva = () => {

  const token = localStorage.getItem("accessToken") || "";
  const decoded: any = jwt_decode(token);
  console.log("decoded", decoded);


  return (
    <div className={classes.profile}>
      <div className={classes.avatar}>
        <img src={adminAva} alt="avatar" />
      </div>
      <div className={classes.text}>
        <h4>Админ</h4>
        <p>{decoded?.sub || 'Админ'}</p>
      </div>
    </div>
  );
};

export default ProfileAva;
