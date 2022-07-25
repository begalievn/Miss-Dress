import React, { useState } from "react";

import classes from "../aboutPage.module.scss";

import {
  CAUCASIAN_DESING,
  FASHION1,
  FASHION2,
  FASHION3,
  PHOTO_LEFT,
  PHOTO_RIGHT,
} from "../../../assets/about/aboutImages";

const AboutContent = () => {
  const [data, setData] = useState({
    header1: "О нас. Кто мы?",
    description1:
      "Мы верим в мир, в котором у вас есть полная свобода быть собой без осуждения. Экспериментировать. Чтобы выразить себя. Быть смелым и воспринимать жизнь как необыкновенное приключение. Поэтому мы позаботились о том, чтобы у всех были равные шансы открыть для себя все удивительные вещи, на которые они способны. Мы существуем, чтобы дать вам уверенность быть тем, кем вы хотите быть.",
    img1: { CAUCASIAN_DESING },

    header2: "Выбор для всех",
    description2:
      "Наша аудитория (также известная как вы) удивительно уникальна, и мы делаем все возможное, чтобы помочь вам найти себя. Мы предлагаем наши бренды в более чем 30 размерах — и мы стремимся предоставить все размеры по одинаковой цене — поэтому вы можете быть уверены, что у нас есть идеальная вещь для вас.",
    img2_left: PHOTO_LEFT,
    img2_right: PHOTO_RIGHT,

    header3: "Бодипозитив",
    description3:
      "Для нас важно продвигать образ здорового тела – мы не стремимся соответствовать каким-либо стереотипам – поэтому мы работаем с более чем 200 моделями, которые представляют нашу аудиторию.",
    img3_1: FASHION1,
    img3_2: FASHION2,
    img3_3: FASHION3,

    header4: "Экология",
    description4:
      "Мы поставили перед собой амбициозные цели по уменьшению воздействия, которое мы оказываем на планету, и мы всегда ищем новые способы стать лучше. Мы также прилагаем все усилия, чтобы животные не страдали из-за моды, и придерживаемся строгих правил в отношении источников материалов животного происхождения и производства продуктов без животных животных.",
  });

  return (
    <>
      <div className={classes.container}>
        <div className={classes.title1}>
          <h1 className={classes.title_text}> {data.header1}</h1>{" "}
          <p className={classes.description1}>{data.description1}</p>
        </div>
        <div className={classes.photo1}>
          <img className={classes.photo_img} src={CAUCASIAN_DESING} alt="" />
        </div>

        <div className={classes.block2}>
          <div className={classes.title2}>
            <h1 className={classes.text_font}> {data.header2}</h1>
            <p className={classes.description2}>{data.description2}</p>
          </div>

          <div className={classes.img_container2}>
            <img className={classes.img_left} src={PHOTO_LEFT} alt="" />
            <img className={classes.img_right} src={PHOTO_RIGHT} alt="" />
          </div>
        </div>

        <div className={classes.title3}>
          <h1 className={classes.text_font}> {data.header3}</h1>{" "}
          <p className={classes.description3}>{data.description3}</p>
        </div>
        <div className={classes.img_container3}>
          <img className={classes.img_content} src={FASHION1} alt="" />
          <img className={classes.img_content} src={FASHION2} alt="" />
          <img src={FASHION3} alt="" />
        </div>
        <div className={classes.title4}>
          <h1 className={classes.text_font}> {data.header4}</h1>{" "}
          <p className={classes.description4}>{data.description4}</p>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
