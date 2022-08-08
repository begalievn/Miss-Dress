import React, { FC, useState } from "react";

import Rating from "@mui/material/Rating";

import { ratingApi } from "../../store/services/RatingApi";

export interface IRate {
  rate: number | any;
}

export const RatingComponent: FC<IRate> = ({ rate }) => {
  const [setRate, { data }] = ratingApi.useSetRatingMutation();

  const [rating, setRating] = useState<number | any>(rate);

  const handleChange = (event: any) => {
    setRating(event.target.value);
    const obj = {
      rate: Number(event.target.value),
      productId: 4,
      status: 1,
    };
    setRate(obj);
  };

  return (
    <>
      <Rating
        value={+rating}
        name="simple-controlled"
        onChange={handleChange}
      />
    </>
  );
};
