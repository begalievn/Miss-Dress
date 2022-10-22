import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import AdminMenu from "../UI/adminMenu/AdminMenu";

import classes from "../../adminPageMain.module.scss";

import { goBackIcon } from "../../../../assets/adminPage/adminPageIcons";

import AdminProfile from "../adminProfile/AdminProfile";


import AdminContentContainer from "../UI/adminContentContainer/AdminContentContainer";
import AdminHeader from "../UI/adminHeader/AdminHeader";

import styles from "./adminPageUser.module.scss";

function AdminPageUser() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  const { userId } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <AdminContentContainer>
        <AdminHeader />
        <h2>Content</h2>
      </AdminContentContainer>
    </div>
  );
}

export default AdminPageUser;
