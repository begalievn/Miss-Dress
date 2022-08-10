import React from "react";

import { useNavigate } from "react-router-dom";

import AdminProfile from "../../../adminProfile/AdminProfile";

import AdminMenu from "../../../UI/adminMenu/AdminMenu";

import classes from "../../../../adminPageMain.module.scss";

import { goBackIcon } from "../../../../../../assets/adminPage/adminPageIcons";

import styles from "./adminPopularProducts.module.scss";

function AdminPopularProducts() {

  const navigate = useNavigate();
  const goBack = () => navigate("/goods");

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div className={styles.container}>
        <div className={styles.main_top}>
          <div onClick={goBack} className={styles.backPage}>
            <img className={styles.goBackIcon} src={goBackIcon} alt="" />
            <p className={styles.goBackText}>Вернуться ко всем товарам</p>
          </div>
          <AdminProfile />
        </div>
        
      </div>
    </div>
  );
}

export default AdminPopularProducts;