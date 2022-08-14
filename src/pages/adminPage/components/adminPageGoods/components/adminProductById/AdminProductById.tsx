import React from "react";

import { useNavigate } from "react-router-dom";

import AdminMenu from "../../../UI/adminMenu/AdminMenu";

import classes from "../../../../adminPageMain.module.scss";

import AdminProfile from "../../../adminProfile/AdminProfile";

import { goBackIcon } from "../../../../../../assets/adminPage/adminPageIcons";

import styles from "./adminProductById.module.scss";

import AdminProductByIdContent from "./components/AdminProductByIdContent";

function AdminProductById() {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div className={styles.container}>
        <div className={styles.mainTop}>
          <div onClick={goBack} className={styles.backPage}>
            <img className={styles.goBackIcon} src={goBackIcon} alt="" />
            <p className={styles.goBackText}>Вернуться ко всем товарам</p>
          </div>
          <AdminProfile />
        </div>
        <AdminProductByIdContent />
      </div>
    </div>
  );
}

export default AdminProductById;