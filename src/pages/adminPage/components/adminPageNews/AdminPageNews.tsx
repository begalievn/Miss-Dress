import React from "react";

import NewsPage from "../../../newsPage/NewsPage";

import AdminMenu from "../UI/adminMenu/AdminMenu";

import classes from "../../adminPageMain.module.scss";

function AdminPageNews() {
  return (
    <div>
      <div className={classes.container_parent}>
        <AdminMenu />
        <NewsPage edit={true} />
      </div>
    </div>
  );
}

export default AdminPageNews;