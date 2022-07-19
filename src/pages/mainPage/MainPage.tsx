import React from "react";
import PhotoCard from "../../components/main-page/photo-card/PhotoCard";

import Slider from "../../components/main/slider/Slider";



import classes from "./mainPage.module.scss";

const MainPage = () => {
  return (
   

  <div className={classes.container}>
        <Slider/>
        <div className={classes.content}>
        </div>
      </div>
    
  );
};

export default MainPage;
