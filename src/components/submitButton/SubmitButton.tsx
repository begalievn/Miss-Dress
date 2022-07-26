import React from "react";

import styles from "./submintButton.module.scss";

const SubmitButton = () => {
  return (
    <button className={styles.button} type="submit">
      Привет
    </button>
  );
};

export default SubmitButton;
