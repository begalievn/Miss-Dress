import React, { useEffect } from "react";

import classes from "../../adminPageMain.module.scss";
import AdminMenu from "../UI/adminMenu/AdminMenu";
import AdminContentContainer from "../UI/adminContentContainer/AdminContentContainer";
import AdminHeader from "../UI/adminHeader/AdminHeader";



const AdminPageDashboard = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <AdminContentContainer>
        <AdminHeader />
        <h2>Dashboard</h2>
      </AdminContentContainer>
    </div>
  );
};

export default AdminPageDashboard;
