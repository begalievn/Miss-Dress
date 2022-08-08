import React from "react";

import styles from "./select.module.scss";

const Select = () => {
  return (
    <div className={styles.select}>
      <select>
        <option>--Select--</option>
        <option>Hello 1</option>
        <option>Hello 2</option>
        <option>Hello 3</option>
        <option>Hello 4</option>
      </select>
      <div className="select_arrow"></div>
    </div>
  );
};

export default Select;
