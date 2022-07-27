import React, { FC } from "react";

import styles from "./submitButton.module.scss";

interface ISubmitButton {
  onClick: (e: React.SyntheticEvent) => void;
}

const SubmitButton: FC<ISubmitButton> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={(e) => onClick(e)} type="submit">
      Привет
    </button>
  );
};

export default SubmitButton;
