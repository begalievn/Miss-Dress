import React, { useEffect } from "react";

import {useLocation} from "react-router-dom";

import classes from "../../adminPageMain.module.scss";


import AdminMenu from "../UI/adminMenu/AdminMenu";

import ProfileAva from "../UI/profileAva/ProfileAva";
import { AdminChart } from "../UI/adminChart/AdminChart";
import AdminContentContainer from "../UI/adminContentContainer/AdminContentContainer";
import AdminHeader from "../UI/adminHeader/AdminHeader";

import { adminCollectionApi } from "../../../../store/services/adminCollectionApi";

import LoaderCircular from "../../../../components/loader-circular/LoaderCircular";

import styles from "./adminPageSales.module.scss";

const AdminPageSales = () => {

  const location = useLocation();

  const bookId = location.pathname.split('/').slice(-1).join("");
  const { data, isLoading, isError } = adminCollectionApi.useGetBookByIdQuery(bookId);

  console.log(data);

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);



  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <AdminContentContainer>
        <AdminHeader />
        <h1 className={styles.title}>Детальная информация</h1>
        <div className={styles.content}>
          {
            isLoading ? <LoaderCircular /> :
              (<div className={styles.content_body}>
                <div className={styles.upper}>
                  <div className={styles.image_container}>
                    <img src={data?.data?.cover} alt="cover" />
                  </div>
                  <div className={styles.details}>
                    <h4>Название: {data?.data?.title || "Книга"}</h4>
                    <div className={styles.between_space}></div>
                    <p>Aвтор: {data?.data?.author?.fullName}</p>
                    <div className={styles.between_space}></div>
                    <p>Жанр: {data?.data?.genre?.name || 'Роман'}</p>
                    <div className={styles.between_space}></div>
                    <p>Количество: {data?.data?.count}</p>
                    <div className={styles.between_space}></div>
                    <p></p>
                  </div>
                </div>
                <div className={styles.description}>
                  {data?.data?.description}
                </div>
              </div>)
          }
        </div>
      </AdminContentContainer>
    </div>
  );
};

export default AdminPageSales;
