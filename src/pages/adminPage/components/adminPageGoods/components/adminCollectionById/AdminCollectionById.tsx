import React from "react";

import AdminMenu from "../../../UI/adminMenu/AdminMenu";

import AdminPageGoodsTopInfo from "../adminPageGoodsTopInfo/AdminPageGoodsTopInfo";

import classes from "../../../../adminPageMain.module.scss";

import AdminPageAllSeasonProducts from "../adminPageAllProducts/AdminPageAllSeasonProducts";

import styles from "./adminCollectionById.module.scss";


function AdminCollectionById() {
  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div className={styles.container}>
        <AdminPageGoodsTopInfo  />
        <AdminPageAllSeasonProducts />
      </div>
    </div>
  );
}

export default AdminCollectionById;