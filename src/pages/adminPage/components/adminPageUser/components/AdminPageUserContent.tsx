import React, { useState } from "react";


import { useParams } from "react-router-dom";

import { adminUserOneApi } from "../../../../../store/secondary/adminUserOneApi";

import classes from "./adminPageUserContent.module.scss";

function AdminPageUserContent() {
  const [counte, setCounte] = useState(1);
  const { userId } = useParams();
  const { isLoading, isError, data } =
    adminUserOneApi.useFetchAdminUserOneApiQuery(userId);

  return (
    <div>
      <h2 className={classes.userTitle}>Информация о пользователе</h2>
      <section className={classes.userContent}>
        <div key={data?.id} className={classes.userContentList}>
          <p className={classes.userContentItem}>
            <p>Пользователь</p>
            {data?.firstName} {data?.lastName}
          </p>
          <p className={classes.userContentItem}>
            <p>Адрес почты</p>
            example@gmail.com
          </p>
          <p className={classes.userContentItem}>
            <p>Номер телефона</p> {data?.phoneNumber}
          </p>
          <p className={classes.userContentItem}>
            <p>Адрес</p> Кыргызстан, г. Бишкек <br /> ул. Исанова, 79
          </p>
          <p className={classes.userContentItem}>
            <p>Продажи</p> 104 продаж
          </p>
          <p className={classes.userContentItem}>
            <p>Доход</p> 50k+ доход
          </p>
          <p className={classes.userContentItem}>
            <p>Статус</p> {data?.status}
          </p>
          <p className={classes.userContentItem}>
            <p>Рейтинг</p> {data?.role}
          </p>
        </div>
      </section>
    </div>
  );
}

export default AdminPageUserContent;
