import React from "react";

import {
  whatsappIcon,
  facebookIcon,
  instagramIcon,
  telegramIcon,
} from "../../assets/footer/";

import classes from "./footer.module.scss";

const socialMediaIcons = [
  whatsappIcon,
  facebookIcon,
  instagramIcon,
  telegramIcon,
];

const footerContent = [
  {
    title: "Покупателям",
    first: "Как сделать заказ",
    second: "Способы оплаты",
    third: "Способы оплаты",
  },
  {
    title: "Покупателям",
    first: "Возврат товара",
    second: "Вопросы и ответы",
    third: "Публичная оферта",
  },
  {
    title: "Компания",
    first: "О нас",
    second: "Реквизиты",
    third: "Контакты",
  },
  {
    title: "Контакты",
    first: "Номер телефона",
    second: "Email",
    third: "Адрес",
  },
];

const mobileContent = {
  title: "О нас",
  first: "+996712345678",
  second: "missdress@gmail.com",
  third: "Исанова, 79",
};

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.social_medias_container}>
        {socialMediaIcons.map((icon, index) => (
          <img key={index} src={icon} alt="icon" />
        ))}
      </div>
      <div className={classes.content}>
        {footerContent.map((item, index) => (
          <div key={index} className={classes.content_block}>
            <h4>{item.title}</h4>
            <p>{item.first}</p>
            <p>{item.second}</p>
            <p>{item.third}</p>
          </div>
        ))}
      </div>
      <div className={classes.content_mobile}>
        <h4>{mobileContent.title}</h4>
        <p>{mobileContent.first}</p>
        <p>{mobileContent.second}</p>
        <p>{mobileContent.third}</p>
      </div>
    </footer>
  );
};

export default Footer;
