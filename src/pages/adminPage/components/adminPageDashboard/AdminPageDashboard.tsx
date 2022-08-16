import React, { useEffect } from "react";

import classes from "../../adminPageMain.module.scss";

import AdminPageMain from "../../AdminPageMain";

const AdminPageDashboard = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <div className={classes.container_parent}>
      <AdminPageMain />
    </div>
  );
};

export default AdminPageDashboard;
