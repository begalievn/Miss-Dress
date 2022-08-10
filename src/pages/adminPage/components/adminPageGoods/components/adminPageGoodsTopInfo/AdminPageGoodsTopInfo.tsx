import React from "react";

import AdminProfile from "../../../adminProfile/AdminProfile";

import PopularProducts from "../../../UI/popularProducts/PopularProducts";

import UsersBlock from "../../../UI/usersBlock/UsersBlock";
import ViewMoreButton from "../../../UI/viewMoreButton/ViewMoreButton";

import classes from "./adminPageGoodsTopInfo.module.scss";

function AdminPageGoodsTopInfo() {
  return (
    <section className={classes.topInfo}>
      <UsersBlock value={"1045"} text={"проданных товаров"} />
      <div>
        <PopularProducts />
        <ViewMoreButton />
      </div>
      <div className={classes.popularGoods}></div>
      <AdminProfile />
    </section>
  );
}

export default AdminPageGoodsTopInfo;