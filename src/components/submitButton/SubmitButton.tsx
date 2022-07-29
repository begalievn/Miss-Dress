import React, { FC } from "react";

import styles from "./submitButton.module.scss";

interface ISubmitButton {
  onClick: (e: React.SyntheticEvent) => void;
  text: string;
}

const SubmitButton: FC<ISubmitButton> = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={(e) => onClick(e)} type="submit">
      {text}
    </button>
  );
};
export default SubmitButton;
