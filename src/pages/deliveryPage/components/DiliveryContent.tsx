import React, { useState } from "react";
import classes from "../dilivery.module.scss";
import LinksDilivery from "./LinksDilivery";

const DiliveryContent = () => {
  interface Data {
    description: string;
    title: string;
  }

  const [data, setData] = useState<Data[]>([
    {
      description:
        "После того, как Вы сделали заказ, наши менеджеры связываются с Вами для подтверждения заказа (обработка заказов происходит с понедельника по пятницу с 10:00 до 20:00)",
      title: " Заказ без оплаты остается в резерве 3 рабочих дня.",
    },
  ]);

  return (
    <div className={classes.container}>
      <ul className={classes.item}>
        <LinksDilivery />
      </ul>
      {data.map((item: Data) => (
        <div className={classes.item_container}>
          <h1 className={classes.text}>Доставка</h1>
          <span className={classes.title}>{item.description}</span>
          <br />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export { DiliveryContent };
