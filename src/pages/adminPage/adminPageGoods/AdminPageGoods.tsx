import React from "react";

import classes from "../adminPageMain/adminPageMain.module.scss";
import AdminMenu from "../adminPageMain/AdminMenu";

const AdminPageGoods = () => {
  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div>products</div>
    </div>
  );
};

export default AdminPageGoods;
