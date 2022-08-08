import React from 'react';

import AdminProfile from "../../../components/adminProfile/AdminProfile";

import classes from "./adminPageGoodsTopInfo.module.scss";

function AdminPageGoodsTopInfo() {
  return (
    <section className={classes.topInfo}>
      <div className={classes.totalSalesGoods}></div>
      <div className={classes.popularGoods}></div>
      <div className={classes.popularGoods}></div>
      <AdminProfile />
    </section>
  );
}

export default AdminPageGoodsTopInfo;