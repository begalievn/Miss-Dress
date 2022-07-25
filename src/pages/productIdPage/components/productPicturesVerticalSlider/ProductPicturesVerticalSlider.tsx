import React from "react";

import classes from "./productPicturesVerticalSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductPicturesVerticalSlider = () => {
  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        <Swiper>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductPicturesVerticalSlider;
