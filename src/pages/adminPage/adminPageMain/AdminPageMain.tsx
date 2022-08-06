import React from "react";
import AdminMenu from "./AdminMenu";

import classes from "./adminPageMain.module.scss";

const AdminPageMain = () => {
  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div>qwe</div>
    </div>
  );
};

export default AdminPageMain;
