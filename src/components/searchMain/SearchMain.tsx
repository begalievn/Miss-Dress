import React from "react";

import style from "./SearchMain.module.scss";

const SearchMain = () => {
  return (
    <div className={style.container}>
      <input className={style.searchMain} placeholder="Поиск" type="text" />
    </div>
  );
};

export default SearchMain;