import React from "react";

import classes from "../adminPageMain/adminPageMain.module.scss";

import AdminMenu from "../adminPageMain/AdminMenu";

import AdminPageGoodsTopInfo from "./components/adminPageGoodsTopInfo/AdminPageGoodsTopInfo";

import AdminPageGoodsContent from "./components/adminPageGoodsContent/AdminPageGoodsContent";

import styles from "./adminPageGoods.module.scss";

const AdminPageGoods = () => {
  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div className={styles.container}>
        <AdminPageGoodsTopInfo />
        {/* <AdminPageGoodsContent /> */}
      </div>
    </div>
  );
};

export default AdminPageGoods;
