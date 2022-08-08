import React from "react";

import classes from "./profileAva.module.scss";
import styles from "../../adminPageUsers/adminPageUsers.module.scss";
import {
  bellIcon,
  profileAva,
} from "../../../../../assets/adminPage/adminPageIcons";

const ProfileAva = () => {
  return (
    <div className={classes.profile}>
      <img src={profileAva} alt="avatar" />
      <div className={classes.text}>
        <h4>Манки Д. Луффи</h4>
        <p>Админ</p>
      </div>
      <img src={bellIcon} alt="bellIcon" />
    </div>
  );
};

export default ProfileAva;
