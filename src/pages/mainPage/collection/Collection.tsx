import React from "react";

import styles from "./collection.module.scss"

function Collection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Коллекция
      </h1>
      <div className={styles.test}>
        Коллекция
      </div>
    </div>
    
  );
}

export default Collection;