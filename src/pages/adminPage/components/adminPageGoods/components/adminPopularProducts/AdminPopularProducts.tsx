import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import AdminProfile from "../../../adminProfile/AdminProfile";

import AdminMenu from "../../../UI/adminMenu/AdminMenu";

import classes from "../../../../adminPageMain.module.scss";

import { goBackIcon } from "../../../../../../assets/adminPage/adminPageIcons";

import styles from "./adminPopularProducts.module.scss";
import AdminPopularProductsContent from "./components/AdminPopularProductsContent";

function AdminPopularProducts() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div className={styles.container}>
        <div className={styles.mainTop}>
          <div onClick={goBack} className={styles.backPage}>
            <img className={styles.goBackIcon} src={goBackIcon} alt="" />
            <p className={styles.goBackText}>Вернуться ко всем товарам</p>
          </div>
          <AdminProfile />
        </div>
        <AdminPopularProductsContent />
      </div>
    </div>
  );
}

export default AdminPopularProducts;