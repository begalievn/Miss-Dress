import React from "react";


import styles from "../../adminPageUsers/adminPageUsers.module.scss";
import {
  bellIcon,
  profileAva,
} from "../../../../../assets/adminPage/adminPageIcons";
import { adminAva } from '../../../../../assets/adminPage/adminPageIcons';

import classes from "./profileAva.module.scss";

const ProfileAva = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.avatar}>
        <img src={adminAva} alt="avatar" />
      </div>
      <div className={classes.text}>
        <h4>Админ</h4>
        <p>Админ</p>
      </div>
    </div>
  );
};

export default ProfileAva;
