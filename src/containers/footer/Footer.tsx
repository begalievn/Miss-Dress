import { SecurityRounded } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

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
    first: {
      text: "Как оформить заказ",
      link: "/how-order",
    },
    second: {
      text: "Способы оплаты",
      link: "/payment"
    },
    third: {
      text: "Доставка",
      link: "/delivery",
    },
  },
  {
    title: "Покупателям",
    first: {
      text: "Возврат товара",
      link: "/return-product",
    },
    second: {
      text: "Вопросы и ответы",
      link: "/faq",
    },
    third: {
      text: "Публичная оферта",
      link: "/public-offer",
    },
  },
  {
    title: "Компания",
    first: {
      text: "О нас",
      link: "/about",
    },
    second: {
      text: "Реквизиты",
      link: "/requisite"
    },
    third: {
      text: "Контакты",
      link: "/contacts",
    },
  },
  {
    title: "Контакты",
    first: {
      text: "+996712345678",
      link: "/",
    },
    second: {
      text: "missdress@gmail.com",
      link: "/",
    },
    third: {
      text: "Исанова, 79",
      link: "/",
    },
  },
];

const mobileContent = {
  title: "О нас",
  first: {
    text: "+996712345678",
  },
  second: {
    text: "missdress@gmail.com",
  },
  third: {
    text: "Исанова, 79",
  },
};

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.social_medias_container}>       
        <a href="https://wa.me/0553404406" target="_blank" rel="noreferrer">
          <img className={classes.imageWhatsApp} src={whatsappIcon} alt="" />
        </a>

        <a href="https://www.facebook.com/missdress" target="_blank" rel="noreferrer">
          <img className={classes.imageFacebook} src={facebookIcon} alt="" />
        </a>

        <a href="https://www.instagram.com/missdress" target="_blank" rel="noreferrer">
          <img className={classes.imageInstagram} src={instagramIcon} alt="" />
        </a>

        <a href="https://t.me/double_absolute" target="_blank" rel="noreferrer">
          <img className={classes.imageTelegram} src={telegramIcon} alt="" />
        </a>
      </div>
      <div className={classes.content}>
        {footerContent.map((item, index) => (
          <div key={index} className={classes.content_block}>
            <h4>{item.title}</h4>

            {item.first.text === "+996712345678" ? (
              <a className={classes.linkToCall} href="tel:+996712345678">
                {item.first.text}
              </a>
            ) : (
              <Link to={item.first.link}>
                <p>{item.first.text}</p>
              </Link>
            )}

            {item.second.text === "missdress@gmail.com" ? (
              <a
                className={classes.linkToMail}
                target={"_blank"}
                href="https://gmail.com" rel="noreferrer"
              >
                {item.second.text}
              </a>
            ) : (
              <Link to={item.second.link}>
                <p>{item.second.text}</p>
              </Link>
            )}

            {item.third.text === "Исанова, 79" ? (
              <a
                className={classes.linkToMap}
                target={"_blank"}
                href="https://2gis.kg/bishkek/search/%D0%B8%D1%81%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0%2079/firm/70000001036409659/74.592026%2C42.874238?floor=1&m=74.592042%2C42.874223%2F17.63" rel="noreferrer"
              >
                {item.third.text}
              </a>
            ) : (
              <Link to={item.third.link}>
                <p>{item.third.text}</p>
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className={classes.content_mobile}>
        <h4>{mobileContent.title}</h4>
        <a href="tel:+996712345678">
          <p>{mobileContent.first.text}</p>
        </a>
        <a target={"_blank"} href="https://gmail.com" rel="noreferrer">
          <p>{mobileContent.second.text}</p>
        </a>
        <a
          target={"_blank"}
          href="https://2gis.kg/bishkek/search/%D0%B8%D1%81%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0%2079/firm/70000001036409659/74.592026%2C42.874238?floor=1&m=74.592042%2C42.874223%2F17.63" rel="noreferrer"
        >
          <p>{mobileContent.third.text}</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
