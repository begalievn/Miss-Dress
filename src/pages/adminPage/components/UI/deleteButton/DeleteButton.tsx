import React from "react";

import classes from "./deleteButton.module.scss";

const DeleteButton = () => {
  return (
    <div className={classes.delete}>
      <button>Удалить</button>
    </div>
  );
};

export default DeleteButton;
