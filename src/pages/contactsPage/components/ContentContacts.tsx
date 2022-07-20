import React, { useState } from "react";

import LinksDilivery from "../../deliveryPage/components/LinksDilivery";
import classes from "../Contacts.module.scss";

import {
  whatsappIcon,
  instagramIcon,
  telegramIcon,
} from "../../../assets/contactsPage";

const ContentContacts = () => {
  const [data, setData] = useState([
    {
      phone: "+996712345678, +996787654321",
      whatsApp: "+996712345678",
      telegram: "+996787654321",
      instagram: "@missdress",
      Email: "missdress@gmail.com",
      description: "Рабочие дни: Пн. - Пт.: с 10:00 до 20:00 ",
      title: "Выходные дни: Сб-Вс",
    },
  ]);

  return (
    <div className={classes.container}>
      <ul className={classes.li_container}>
        <LinksDilivery />
      </ul>
      <div className={classes.item_container}>
        {data.map((item, index) => (
          <>
            <h1 className={classes.text}>Контакты</h1>
            <ul className={classes.item}>
              <li className={classes.listItem}>Тел: {item.phone}</li>
              <li className={classes.listItem}>
                <a href="https://wa.me/0553404406" target="_blank">
                  <img className={classes.imageWhatsApp} src={whatsappIcon} />
                </a>
                <a href="tel:+996553404406">{item.whatsApp}</a>
              </li>
              <li className={classes.listItem}>
                <a href="https://t.me/double_absolute" target="_blank">
                  <img className={classes.imageTelegram} src={telegramIcon} />
                </a>
                <a href="tel:+996553404406">{item.telegram}</a>
              </li>
              <li className={classes.listItem}>
                <a href="https://www.instagram.com/missdress" target="_blank">
                  <img className={classes.imageInstagram} src={instagramIcon} />
                </a>
                {item.instagram}
              </li>
              <li>
                Email:{" "}
                <a href="mailto:missdress@gmail.com" target="_blank">
                  {item.Email}
                </a>
              </li>
              <li className={classes.description}>{item.description}</li>
              <li>{item.title}</li>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default ContentContacts;
