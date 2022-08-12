import React from "react";

import { useParams } from "react-router-dom";

import AdminMenu from "../../../UI/adminMenu/AdminMenu";

import AdminPageGoodsTopInfo from "../adminPageGoodsTopInfo/AdminPageGoodsTopInfo";

import classes from "../../../../adminPageMain.module.scss";

import AdminPageAllSeasonProducts from "../adminPageAllProducts/AdminPageAllSeasonProducts";

import styles from "./adminCollectionById.module.scss";


function AdminCollectionById() {

  const {id}= useParams();

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div className={styles.container}>
        <AdminPageGoodsTopInfo  />
        <AdminPageAllSeasonProducts id={id} />
      </div>
    </div>
  );
}

export default AdminCollectionById;