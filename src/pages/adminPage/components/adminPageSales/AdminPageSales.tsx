import React from "react";

import classes from "../../adminPageMain.module.scss";

import styles from "./adminPageSales.module.scss";

import AdminMenu from "../UI/adminMenu/AdminMenu";

import ProfileAva from "../UI/profileAva/ProfileAva";
import { AdminChart } from "../UI/adminChart/AdminChart";

const AdminPageSales = () => {
  const info = [
    {
      incomeWeek: "354k+",
      incomeMonth: "1.5m",
      incomeSum: "257m+",
    },
  ];

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div className={styles.container_right}>
        <div>
          <ProfileAva />
        </div>
        <div className={styles.container}>
          {info.map((item) => (
            <div>
              <h2>Информация о доходах</h2>
              <div className={styles.block}>
                <h4>Доход за неделю</h4>
                <span>{item.incomeWeek}</span>
              </div>
              <div className={styles.block}>
                <h4>Доход за месяц</h4>
                <span>{item.incomeMonth}</span>
              </div>
              <div className={styles.block}>
                <h4>Общая сумма дохода за год</h4>
                <span>{item.incomeSum}</span>
              </div>
            </div>
          ))}
        </div>

        <AdminChart />
      </div>
    </div>
  );
};

export default AdminPageSales;
