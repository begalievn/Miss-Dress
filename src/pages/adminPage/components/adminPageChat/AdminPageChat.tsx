import React from "react";

import classes from "../../adminPageMain.module.scss";

import AdminMenu from "../../AdminMenu";

const AdminPageChat = () => {
  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div>chat</div>
    </div>
  );
};

export default AdminPageChat;
