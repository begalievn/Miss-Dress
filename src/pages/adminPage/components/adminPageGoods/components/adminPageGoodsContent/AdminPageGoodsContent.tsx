import React from "react";

import { 
  autumnCollection,
  winterCollection,
  springCollection,
  summerCollection
} from "../../../../../../assets/adminPage/adminPageIcons";

import classes from "./adminPageGoodsContent.module.scss";

interface IAdminCollection {
  title: string;
  editTitle: string;
  img: string;
}

// const adminCollectionProducts:IAdminCollection = [
//   {
//     title: "Зимняя коллекция",
//     editTitle: "Редактировать",
//     img: {winterCollection}
//   },
//   {
//     title: "Весенняя коллекция",
//     editTitle: "Редактировать",
//     img: {winterCollection}
//   },
//   {
//     title: "Летняя коллекция",
//     editTitle: "Редактировать",
//     img: {winterCollection}
//   },
//   {
//     title: "Осенняя коллекция",
//     editTitle: "Редактировать",
//     img: {winterCollection}
//   },
// ];


function AdminPageGoodsContent() {
  return (
    <div>
      <h2>Зимняя коллекция</h2>
      <p>Редактировать</p>
      <img src={winterCollection} alt="" />
    </div>
  );
}

export default AdminPageGoodsContent;