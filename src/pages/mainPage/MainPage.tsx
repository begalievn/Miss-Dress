import React from "react";

import PhotoCardContainer from "../../components/main-page/photo-card-container/PhotoCardContainer";

import Collection from "./collection/Collection";

import classes from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {/* <PhotoCardContainer /> */}
        <Collection/>
      </div>
      
    </div>
  );
};

export default MainPage;
