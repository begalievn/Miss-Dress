import React from "react";

import styles from "./submitButton.module.scss";

const SubmitButton = () => {
  return (
    <button className={styles.button} type="submit">
      Привет
    </button>
  );
};

export default SubmitButton;
