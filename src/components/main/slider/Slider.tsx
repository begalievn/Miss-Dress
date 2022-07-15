import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import sliderImage from "./sliderImage";
import classes from "../../../containers/main/Main.module.scss";

const len = sliderImage.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className={classes.slider_container}>
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />

      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex: number) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
