import React, { useEffect, useState } from "react";

import classes from "./productPicturesVerticalSlider.module.scss";

interface IProductPicturesVerticalSlider {
  cards: string[];
}

interface ImageCardTypes {
  card: string;
}

const ImageCard = ({ card }: ImageCardTypes) => {
  return (
    <div className={classes.image_card}>
      <img src={card} alt="" />
    </div>
  );
};

const ProductPicturesVerticalSlider = ({
  cards,
}: IProductPicturesVerticalSlider) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sliderCards, setSliderCards] = useState<any>([]);

  useEffect(() => {
    let arrCards: any = [];

    if (cards === undefined) return;

    Array.isArray(cards) ? (arrCards = [...cards]) : (arrCards = [cards]);

    // Here I add additional cards if there isn't necessary value
    let i = 0;
    while (arrCards.length <= 7) {
      arrCards.push(arrCards[i]);
      i++;
    }

    console.log("Array Cards: ", arrCards);
    setSliderCards([...arrCards]);
  }, [cards]);

  let leftIndex = activeIndex ? activeIndex - 1 : sliderCards.length - 1;
  let rightIndex = activeIndex === sliderCards.length - 1 ? 0 : activeIndex + 1;
  let rightmostIndex =
    rightIndex === sliderCards.length - 1 ? 0 : rightIndex + 1;

  let hiddenLeftIndex = leftIndex ? leftIndex - 1 : sliderCards.length - 1;
  let hiddenRightIndex =
    rightmostIndex === sliderCards.length - 1 ? 0 : rightmostIndex + 1;

  // Mobile version carousel indexes

  function prev() {
    setActiveIndex((prev: number) =>
      prev ? prev - 1 : sliderCards.length - 1
    );
  }

  function next() {
    setActiveIndex((prev: number) =>
      prev === sliderCards.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.arrow_up} onClick={prev}></div>
      <div className={classes.carousel}>
        <div
          key={hiddenLeftIndex}
          className={[classes.hiddenLeft, classes.card].join(" ")}
        >
          <ImageCard card={sliderCards[hiddenLeftIndex]} />
        </div>
        <div key={leftIndex} className={[classes.left, classes.card].join(" ")}>
          <ImageCard card={sliderCards[leftIndex]} />
        </div>
        <div
          key={activeIndex}
          className={[classes.active, classes.card].join(" ")}
        >
          <ImageCard card={sliderCards[activeIndex]} />
        </div>
        <div
          key={rightIndex}
          className={[classes.right, classes.card].join(" ")}
        >
          <ImageCard card={sliderCards[rightIndex]} />
        </div>
        <div
          key={rightmostIndex}
          className={[classes.rightmost, classes.card].join(" ")}
        >
          <ImageCard card={sliderCards[rightmostIndex]} />
        </div>
        <div
          key={hiddenRightIndex}
          className={[classes.hiddenRight, classes.card].join(" ")}
        >
          <ImageCard card={sliderCards[hiddenRightIndex]} />
        </div>
      </div>
      <div className={classes.arrow_down} onClick={next}></div>
    </div>
  );
};

export default ProductPicturesVerticalSlider;
