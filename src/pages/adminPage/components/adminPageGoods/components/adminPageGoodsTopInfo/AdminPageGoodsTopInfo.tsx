import React from "react";
import { useNavigate } from "react-router-dom";

import AdminProfile from "../../../adminProfile/AdminProfile";

import PopularProducts from "../../../UI/popularProducts/PopularProducts";

import UsersBlock from "../../../UI/usersBlock/UsersBlock";
import ViewMoreButton from "../../../UI/viewMoreButton/ViewMoreButton";

import classes from "./adminPageGoodsTopInfo.module.scss";

function AdminPageGoodsTopInfo() {

  const navigate = useNavigate();

  return (
    <section className={classes.topInfo}>
      <UsersBlock value={"1045"} text={"проданных товаров"} />
      <div>
        <PopularProducts />
        <div onClick={()=> navigate("/popular-products")}>
          <ViewMoreButton />
        </div>
      </div>
      <div className={classes.popularGoods}></div>
      <AdminProfile />
    </section>
  );
}

export default AdminPageGoodsTopInfo;