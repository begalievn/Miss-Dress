import React from "react";

import classes from "../../adminPageMain.module.scss";
import AdminMenu from "../UI/adminMenu/AdminMenu";

const AdminPageGoods = () => {
  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div>products</div>
    </div>
  );
};

export default AdminPageGoods;
