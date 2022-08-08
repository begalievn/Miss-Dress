import React from 'react'

import { bellIcon, profileAva } from "../../../../assets/adminPage/adminPageIcons";

import classes from "./adminProfile.module.scss";

function AdminProfile() {
  return (
    <div className={classes.profile}>
      <img src={profileAva} alt="avatar" />
      <div className={classes.profile_text}>
        <h4>Манки Д. Луффи</h4>
        <p>Админ</p>
      </div>
      <img src={bellIcon} alt="bellIcon" />
    </div>
  );
}

export default AdminProfile;