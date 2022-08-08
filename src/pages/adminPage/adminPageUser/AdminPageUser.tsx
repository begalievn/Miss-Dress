import React from 'react'

import { useNavigate } from "react-router-dom";

import AdminMenu from "../adminPageMain/AdminMenu";

import classes from "../adminPageMain/adminPageMain.module.scss";

import {goBackIcon} from "../../../assets/adminPage/adminPageIcons";

import AdminProfile from "../components/adminProfile/AdminProfile";

import styles from "./adminPageUser.module.scss";

import AdminPageUserContent from "./components/AdminPageUserContent";


function AdminPageUser() {

  const navigate = useNavigate();
  const goBack = () => navigate("/users");

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div className={styles.container}>
        <div className={styles.main_top}>
          <div onClick={goBack} className={styles.backPage}>
            <img className={styles.goBackIcon} src={goBackIcon} alt="" />
            <p className={styles.goBackText}>Вернуться ко всем пользователям</p>
          </div>

          <AdminProfile />

          {/* <div className={styles.profile}>
            <img src={profileAva} alt="avatar" />
            <div className={styles.profile_text}>
              <h4>Манки Д. Луффи</h4>
              <p>Админ</p>
            </div>
            <img src={bellIcon} alt="bellIcon" />
          </div> */}
        </div>

        <AdminPageUserContent />
      </div>
      
    </div>
  );
}

export default AdminPageUser;