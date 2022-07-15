import React from "react";

import PhotoCardContainer from "../../components/main-page/photo-card-container/PhotoCardContainer";

import classes from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <PhotoCardContainer />
      </div>
    </div>
  );
};

export default MainPage;
