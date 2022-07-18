import React from "react";

import styles from "./collection.module.scss";
import Block from "./components/block/Block";

function Collection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Коллекция</h1>
      <div className={styles.test}>Коллекция</div>
      {[1, 2, 3, 4].map((item) => {
        return <Block />;
      })}
    </div>
  );
}

export default Collection;
