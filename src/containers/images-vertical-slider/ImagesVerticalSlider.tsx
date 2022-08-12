import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper";

import "swiper/css";

import classes from "./images-Vertical-Slider.module.scss";

const ImagesVerticalSlider = () => {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  return (
    <div className="App">
      <section className="slider">
        <div className="slider__flex">
          <div className="slider__col">
            <div className="slider__prev">Prev</div>

            <div className="slider__thumbs">
              <Swiper
                // onSwiper={setImagesNavSlider}
                // direction="vertical"
                spaceBetween={24}
                slidesPerView={3}
                navigation={{
                  nextEl: ".slider__next",
                  prevEl: ".slider__prev",
                }}
                className="swiper-container1"
                breakpoints={{
                  0: {
                    direction: "horizontal",
                  },
                  768: {
                    direction: "vertical",
                  },
                }}
                modules={[Navigation, Thumbs]}
              ></Swiper>
            </div>

            <div className="slider__next">Next</div>
          </div>

          <div className="slider__images">
            <Swiper
              thumbs={{ swiper: imagesNavSlider }}
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={32}
              mousewheel={true}
              navigation={{
                nextEl: ".slider__next",
                prevEl: ".slider__prev",
              }}
              breakpoints={{
                0: {
                  direction: "horizontal",
                },
                768: {
                  direction: "horizontal",
                },
              }}
              className="swiper-container2"
              modules={[Navigation, Thumbs, Mousewheel]}
            ></Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImagesVerticalSlider;
