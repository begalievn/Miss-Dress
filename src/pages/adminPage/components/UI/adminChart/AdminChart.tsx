import React from "react";

import { Chart } from "react-google-charts";

import styles from "./chart.module.scss";

export const data = [
  [" ", "Зимняя коллекция", "Летняя коллекция", "Осенняя коллекция"],
  ["Янв", 70, 40, 41.8],
  ["Фев", 50, 50, 32.4],
  ["Мар", 50, 40, 25.7],
  ["Апр", 40, 50, 20.5],
  ["Май", 40, 60, 10.4],
  ["Июн", 40, 80, 7.7],
  ["Июл", 30, 80, 9.6],
  ["Авг", 12.3, 60, 10.6],
  ["Сен", 40, 60, 14.8],
  ["Окт", 40, 60, 11.6],
  ["Ноя", 60, 55, 4.7],
  ["Дек", 70, 50, 5.2],
];

export const options = {
  chart: {
    title: "Статистика продаж",
  },
};

export function AdminChart() {
  return (
    <Chart
      className={styles.chart}
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
