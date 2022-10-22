import React, { useEffect } from "react";

import NewsPage from "../../../newsPage/NewsPage";

import AdminMenu from "../UI/adminMenu/AdminMenu";

import classes from "../../adminPageMain.module.scss";
import AdminContentContainer from "../UI/adminContentContainer/AdminContentContainer";
import AdminHeader from "../UI/adminHeader/AdminHeader";

function AdminPageNews() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <div className={classes.container_parent}>
      {/*<AdminMenu />*/}
      {/*<NewsPage edit={true} />*/}
      <AdminMenu />
      <AdminContentContainer>
        <AdminHeader />
        <h2>Content</h2>
      </AdminContentContainer>
    </div>
  );
}

export default AdminPageNews;

