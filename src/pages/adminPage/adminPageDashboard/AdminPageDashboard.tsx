import React from "react";

import classes from "../adminPageMain/adminPageMain.module.scss";
import AdminMenu from "../adminPageMain/AdminMenu";

const AdminPageDashboard = () => {
  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      dashboard
    </div>
  );
};

export default AdminPageDashboard;
