import React, { useEffect, useState } from "react";

import classes from "./similarProductsSlider.module.scss";

interface ISimilarProductsSlider {
  children: React.ReactNode;
}

const SimilarProductsSlider = ({ children }: ISimilarProductsSlider) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderCards, setSliderCards] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    let arrCards: React.ReactNode[] = [];

    if (children === undefined) return;

    Array.isArray(children)
      ? (arrCards = [...children])
      : (arrCards = [children]);

    let i = 0;
    while (arrCards.length <= 6) {
      arrCards.push(arrCards[i]);
      i++;
    }
    setSliderCards([...arrCards]);
  }, [children]);

  let leftIndex = activeIndex ? activeIndex - 1 : sliderCards.length - 1;
  let rightIndex = activeIndex === sliderCards.length - 1 ? 0 : activeIndex + 1;

  let hiddenLeftIndex = leftIndex ? leftIndex - 1 : sliderCards.length - 1;
  let hiddenRightIndex =
    rightIndex === sliderCards.length - 1 ? 0 : rightIndex + 1;

  function prev() {
    setActiveIndex((prev) => (prev ? prev - 1 : sliderCards.length - 1));
  }

  function next() {
    setActiveIndex((prev) => (prev === sliderCards.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className={classes.container}>
      <div className={classes.arrow_left} onClick={prev}></div>
      <div className={classes.carousel}>
        <div
          key={hiddenLeftIndex}
          className={[classes.hiddenLeft, classes.card].join(" ")}
        >
          {sliderCards[hiddenLeftIndex]}
        </div>
        <div key={leftIndex} className={[classes.left, classes.card].join(" ")}>
          {sliderCards[leftIndex]}
        </div>
        <div
          key={activeIndex}
          className={[classes.active, classes.card].join(" ")}
        >
          {sliderCards[activeIndex]}
        </div>
        <div
          key={rightIndex}
          className={[classes.right, classes.card].join(" ")}
        >
          {sliderCards[rightIndex]}
        </div>

        <div
          key={hiddenRightIndex}
          className={[classes.hiddenRight, classes.card].join(" ")}
        >
          {sliderCards[hiddenRightIndex]}
        </div>
      </div>
      <div className={classes.arrow_right} onClick={next}></div>
    </div>
  );
};

export default SimilarProductsSlider;
