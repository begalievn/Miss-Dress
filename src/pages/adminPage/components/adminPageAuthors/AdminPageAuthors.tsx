import React, { useEffect } from "react";

import classes from "../../adminPageMain.module.scss";

import AdminProfile from "../adminProfile/AdminProfile";

import AdminMenu from "../UI/adminMenu/AdminMenu";

import styles from "./adminPageAuthors.module.scss";

import AdminPageAdvertContent from "./components/AdminPageAdvertContent";

const AdminPageAuthors = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <>
      <div className={classes.container_parent}>
        <AdminMenu />
        <div className={styles.container}>
          <div className={styles.mainTop}>
            <AdminProfile />
          </div>
          {/*<AdminPageAdvertContent />*/}
          <h1>Book Authors</h1>
        </div>
      </div>
    </>
  );
};

export default AdminPageAuthors;
