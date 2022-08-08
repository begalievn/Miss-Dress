import React from "react";

import classes from "../../adminPageMain.module.scss";
import AdminMenu from "../../AdminMenu";
import AdminPageMain from "../../AdminPageMain";

const AdminPageDashboard = () => {
  return (
    <div className={classes.container_parent}>
      <AdminPageMain />
    </div>
  );
};

export default AdminPageDashboard;
