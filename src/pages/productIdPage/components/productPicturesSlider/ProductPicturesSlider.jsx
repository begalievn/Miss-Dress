import React, { useEffect, useState } from "react";

import classes from "./productPicturesSlider.module.scss";
//
// interface IProductPicturesSlider {
//   cards: string[];
// }
//
// interface ImageCardTypes {
//   card: string;
// }

const ImageCard = ({ card }) => {
  return (
    <div className={classes.image_card}>
      <img src={card} alt="" />
    </div>
  );
};

const ProductPicturesSlider = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderCards, setSliderCards] = useState([]);
  console.log(cards);
  useEffect(() => {
    let arrCards = [];

    if (cards === undefined) return;

    Array.isArray(cards) ? (arrCards = [...cards]) : (arrCards = [cards]);

    let i = 0;
    while (arrCards.length <= 6) {
      arrCards.push(arrCards[i]);
      i++;
    }
    console.log(arrCards);
    setSliderCards([...arrCards]);
  }, [cards]);

  let leftIndex = activeIndex ? activeIndex - 1 : sliderCards.length - 1;
  let rightIndex = activeIndex === sliderCards.length - 1 ? 0 : activeIndex + 1;
  let rightmostIndex =
    rightIndex === sliderCards.length - 1 ? 0 : rightIndex + 1;

  let hiddenLeftIndex = leftIndex ? leftIndex - 1 : sliderCards.length - 1;
  let hiddenRightIndex =
    rightmostIndex === sliderCards.length - 1 ? 0 : rightmostIndex + 1;

  function prev() {
    setActiveIndex((prev) => (prev ? prev - 1 : sliderCards.length - 1));
    console.log("prev");
  }

  function next() {
    setActiveIndex((prev) => (prev === sliderCards.length - 1 ? 0 : prev + 1));
    console.log("next");
  }

  return (
    <div className={classes.container}>
      <div className={classes.arrow_left} onClick={prev}></div>
      <div className={classes.carousel}>
        <div
          key={hiddenLeftIndex}
          className={[classes.hiddenLeft, classes.card].join(" ")}
        >
          <ImageCard card={sliderCards[hiddenLeftIndex]} />
        </div>
        <div
          key={leftIndex}
          className={[classes.left, classes.card].join(" ")}
          onClick={prev}
        >
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
          onClick={next}
        >
          <ImageCard card={sliderCards[rightIndex]} />
        </div>
        <div
          key={rightmostIndex}
          className={[classes.rightmost, classes.card].join(" ")}
          onClick={next}
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
      <div className={classes.arrow_right} onClick={next}></div>
    </div>
  );
};

export default ProductPicturesSlider;
