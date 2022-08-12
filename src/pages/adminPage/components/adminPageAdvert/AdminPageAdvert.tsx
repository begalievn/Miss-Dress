import React from "react";

import classes from "../../adminPageMain.module.scss";

import AdminProfile from "../adminProfile/AdminProfile";

import AdminMenu from "../UI/adminMenu/AdminMenu";

import styles from "./adminPageAdvert.module.scss";

import AdminPageAdvertContent from "./components/AdminPageAdvertContent";

const AdminPageAdvert = () => {
  return (
    <>
      <div className={classes.container_parent}>
        <AdminMenu />
        <div className={styles.container}>
          <div className={styles.mainTop}>
            <AdminProfile />
          </div>
          <AdminPageAdvertContent />
        </div>
      </div>   
    </>
  );
};

export default AdminPageAdvert;
