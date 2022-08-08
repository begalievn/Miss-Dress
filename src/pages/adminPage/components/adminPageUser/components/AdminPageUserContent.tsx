import React from "react";

import classes from "./adminPageUserContent.module.scss";


export interface IAdminUserType {
  user: string;
  email: string;
  phone: number | string;
  address: string;
  sales: string;
  income: string;
  status: string;
  rating: string;
}

const adminUserContent = [
  {
    user: "Пользователь",
    email: "Адрес почты",
    phone: "Номер телефона",
    address: "Адрес",
    sales: "Продажи",
    income: "Доход",
    status: "Статус",
    rating: "Рейтинг",
      
  },
  {
    name: "Ророноа Зоро",
    email: "zoro@gmail.com",
    phone: "+996712345678",
    address: "Кыргызстан, г. Бишкек ул. Исанова, 79",
    sales: "104 продаж",
    income: "500k+ доход",
    status: "Проверен",
    rating: "87% Удалить пользователя",     
  },  
];

function AdminPageUserContent() {

  
  return (
    <div>
      <h2 className={classes.userTitle}>Информация о пользователе</h2>
      <section className={classes.userContent}>
        {adminUserContent.map((item, index)=>{
          return (
            <div key={index} className={classes.userContentList}>
              <p className={classes.userContentItem}>{item.name}</p>
              <p className={classes.userContentItem}>{item.email}</p>
              <p className={classes.userContentItem}>{item.phone}</p>
              <p className={classes.userContentItem}>{item.address}</p>
              <p className={classes.userContentItem}>{item.sales}</p>
              <p className={classes.userContentItem}>{item.income}</p>
              <p className={classes.userContentItem}>{item.status}</p>
              <p className={classes.userContentItem}>{item.rating}</p>
            </div>
          );
        })}
      </section>
    </div>
      
  );
}

export default AdminPageUserContent;