import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import ImagesVerticalSlider from "../../../../containers/images-vertical-slider/ImagesVerticalSlider";

import classes from "./productPicturesSlider.module.scss";

interface IProductPicturesSlider {
  images: string[];
}

interface ImageCardTypes {
  image: string;
}

const ImageCard = ({ image }: ImageCardTypes) => {
  return (
    <div className={classes.image_card}>
      <img src={image} />
    </div>
  );
};

const ProductPicturesSlider = ({ images }: IProductPicturesSlider) => {
  console.log(images);
  return (
    <div className={classes.container}>
      <div className={classes.arrow_left}></div>
      <div className={classes.carousel}>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((item, index) => (
            <SwiperSlide>
              <ImageCard image={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={classes.arrow_right}></div>
    </div>
  );
};

export default ProductPicturesSlider;
