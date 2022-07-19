import React, { useEffect, useState } from "react";

import classes from "./Main.module.scss";

import SliderContent from "./SliderContent";
import Dot from "./Dot";
import sliderImage from "./sliderImage";

const len = sliderImage.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className={classes.slider_container}>
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />

      <Dot
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex: number) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
