import React from "react";

import classes from "./deleteButton.module.scss";

const DeleteButton = (props: any) => {
  console.log("props", props.id);

  return (
    <div className={classes.delete}>
      <button onClick={() => props.handleClick(props.id)}>Удалить</button>
    </div>
  );
};

export default DeleteButton;
