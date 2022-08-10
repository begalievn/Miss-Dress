import React from "react";

import { useNavigate } from "react-router-dom";

import AdminMenu from "../UI/adminMenu/AdminMenu";

import classes from "../../adminPageMain.module.scss";

import { goBackIcon } from "../../../../assets/adminPage/adminPageIcons";

import AdminProfile from "../adminProfile/AdminProfile";

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
        </div>
        <AdminPageUserContent />
      </div>     
    </div>
  );
}

export default AdminPageUser;