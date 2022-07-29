import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./photoCard.module.scss";

interface IPhotoCard {
  image?: string;
  category?: string;
  id: number;
  width?: string;
}

const PhotoCard: FC<IPhotoCard> = ({ image, category, id, width }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/category");
  };

  return (
    <div className={classes.container}>
      <img src={image} alt="" />
      <button className={classes.button} onClick={clickHandler}>
        {"Смотреть"}
      </button>
    </div>
  );
};

export default PhotoCard;
