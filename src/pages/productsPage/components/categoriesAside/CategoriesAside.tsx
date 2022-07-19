import React, { useState } from "react";

import classes from "./categoriesAside.module.scss";

const data = [
  {
    id: 1,
    title: "Верхняя одежда",
    children: [
      {
        id: 10,
        title: "Куртка",
        children: [],
      },
      {
        id: 11,
        title: "Пальто",
        children: [],
      },
    ],
  },
  {
    id: 2,
    title: "Юбки",
    children: [],
  },
  {
    id: 3,
    title: "Джинсы",
    children: [],
  },
  {
    id: 4,
    title: "Брюки",
    children: [],
  },
  {
    id: 5,
    title: "Футболки",
    children: [],
  },
  {
    id: 6,
    title: "Шорты",
    children: [],
  },
  {
    id: 7,
    title: "Топы",
    children: [],
  },
  {
    id: 8,
    title: "Пижамы",
    children: [],
  },
];

const CategoriesAside = () => {
  const [isVisibleNested, setVisibleNested] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>Категория</h3>
      </div>
      <div className={classes.categories}>
        <ul>
          {data.map((item, index) => {
            if (item.children.length === 0) {
              return <li>{item.title}</li>;
            } else {
              return (
                <li>
                  <li>{item.title}</li>
                  <ul className={""}>
                    {item.children.map((childItem, childIndex) => (
                      <li>{childItem.title}</li>
                    ))}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesAside;
