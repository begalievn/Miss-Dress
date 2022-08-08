import React from "react";

import { useAppSelector } from "../../utils/app/hooks";

import style from "./Breadcrumbs.module.scss";
const Breadcrumbs = () => {
  const breadcrumbs = useAppSelector((state) => state.Breadcrumbs.breadcrumbs);

  return (
    <div className={style.mainBlock}>
      <div>Главная</div>
      <div>/</div>
      {breadcrumbs.map((item) => (
        <>
          <div>{item}</div>
          <div>/</div>
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
