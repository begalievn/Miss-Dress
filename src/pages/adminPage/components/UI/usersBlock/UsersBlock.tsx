import React, { FC } from "react";

import { IBlock } from "../../../../../utils/types/types";

import classes from "./usersBlock.module.scss";

const UsersBlock = ({ value, text }: IBlock) => {
  return (
    <div className={classes.newUsers}>
      <h3>{value}</h3>
      <h4>{text}</h4>
    </div>
  );
};

export default UsersBlock;
