import React, { useEffect } from 'react';

import { bellIcon, profileAva, adminAva } from "../../../../assets/adminPage/adminPageIcons";

import classes from "./adminProfile.module.scss";

function AdminProfile() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <div className={classes.profile}>
      <img src={adminAva} alt="avatar" />
      <div className={classes.profile_text}>
        <h4>Админ</h4>
        <p>Админ</p>
      </div>
      {/*<img src={bellIcon} alt="bellIcon" />*/}
    </div>
  );
}

export default AdminProfile;
