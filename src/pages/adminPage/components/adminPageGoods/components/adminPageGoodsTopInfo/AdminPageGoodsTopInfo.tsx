import React from "react";

import AdminPopularProducts from "../../../UI/adminPopularProducts/AdminPopularProducts";

import ProfileAva from "../../../UI/profileAva/ProfileAva";

import UsersBlock from "../../../UI/usersBlock/UsersBlock";

import classes from "./adminPageGoodsTopInfo.module.scss";

function AdminPageGoodsTopInfo() {
  return (
    <div className={classes.main}>
      <div className={classes.contentTop}>
        <div className={classes.topInfo}>
          <UsersBlock value={"1045"} text={"проданных товаров"} />
          <AdminPopularProducts />
        </div>
        <ProfileAva />
      </div>
    </div>    
  );
}

export default AdminPageGoodsTopInfo;