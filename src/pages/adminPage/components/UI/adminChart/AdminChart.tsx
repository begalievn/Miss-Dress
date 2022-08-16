import React from "react";

import { Chart } from "react-google-charts";

import styles from "./chart.module.scss";

const result: any = [
  {
    collection: "summer",
    sales: [
      {
        count: 20,
        month: "1",
      },
    ],
  },
  {
    collection: "autumn",
    sales: [
      {
        count: 60,
        month: "5",
      },
    ],
  },
  {
    collection: "winter",
    sales: [
      {
        count: 80,
        month: "9",
      },
    ],
  },
];

const newResult = result.map((item: any) => item);
console.log(newResult);
export const data = [
  [
    "Year",
    newResult[0].collection,
    newResult[1].collection,
    newResult[2].collection,
  ],
  ["Янв", newResult[0].sales[0].count, 10, newResult[0].sales[0].month],
  ["Фев", newResult[1].sales[0].count, 20, newResult[1].sales[0].month],
  ["Мар", newResult[2].sales[0].count, 30, newResult[2].sales[0].month],
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
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
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
