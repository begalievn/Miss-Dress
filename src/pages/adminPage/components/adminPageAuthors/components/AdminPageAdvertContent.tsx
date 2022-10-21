import React from "react";

import {
  advertContentLeft,
  advertContentRight,
} from "../../../../../utils/consts/admin-page-advert/adminPageAdvert";

import classes from "./adminPageAdvertContent.module.scss";

function AdminPageAdvertContent() {
  return (
    <>
      <h3 className={classes.advertTitle}>Архив рекламы</h3>
      <div className={classes.advertContent}>
        <div className={classes.advertContentLeft}>
          {advertContentLeft.map((item) => {
            return (
              <div className={classes.advertLeftContent}>
                <div className={classes.advertTop}>
                  <h4 className={classes.advertSubTitle}>{item.title}</h4>
                  <h4 className={classes.advertSubText}>{item.text}</h4>
                </div>
                <div className={classes.advertLeftImgList}>
                  <img
                    className={classes.advertLeftImg}
                    src={item.image}
                    alt=""
                  />
                  <p className={classes.advertEdit}>{item.edit}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={classes.advertContentRight}>
          {advertContentRight.map((item) => {
            return (
              <>
                <h3 className={classes.advertTitle}>{item.upperTitle}</h3>
                <div className={classes.advertTop}>
                  <h4 className={classes.advertSubTitle}>{item.title}</h4>
                  <h4 className={classes.advertSubText}>{item.text}</h4>
                </div>
                <img
                  className={classes.advertRightImg}
                  src={item.image}
                  alt=""
                />
                <p className={classes.advertEdit}>{item.edit}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AdminPageAdvertContent;
