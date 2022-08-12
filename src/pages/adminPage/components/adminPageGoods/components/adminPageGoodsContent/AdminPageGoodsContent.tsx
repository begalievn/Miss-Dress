import { LinearProgress } from "@mui/material";

import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// import { Link, useParams } from "react-router-dom";

import CategoriesDropdowBtn from "../../../../../../components/categoriesDropdowButton/CategoriesDropdowBtn";

import Paginations from "../../../../../../components/pagination/Paginations";

import { adminCollectionApi } from "../../../../../../store/services/adminCollectionApi";

import { adminDeleteUserApi } from "../../../../../../store/services/adminDeleteUserApi";

import { UserApi } from "../../../../../../store/services/UserApi";

import { adminCollectionProducts } from "../../../../../../utils/consts/admin-page-collection-seasons/adminPageConsts";

import { IAdminCollection } from "../../../../../../utils/types/typesAdminCollection";

import DeleteButton from "../../../UI/deleteButton/DeleteButton";

import classes from "./adminPageGoodsContent.module.scss";

function AdminPageGoodsContent() {

  const [collection, setCollection]=useState<string|any>("");
  const {data:cards} = adminCollectionApi.useGetProductByCollectionQuery(collection);
  console.log(cards);

  return (
    <div className={classes.container}>  
      {adminCollectionProducts.map((item:IAdminCollection)=> {
        return (
          <div className={classes.collectionDark} key={item.id}>
            <div  className={classes.collectionContent}>
              <div className={classes.collectionText}>
                <h2 className={classes.collectionTitle}>{item.title}</h2>
                <p className={classes.collectionEdit}>Редактировать</p>
              </div> 
              <Link className={classes.link} to={`/season-products/${item.path}`}>
                <img className={classes.collectionImage} src={item.image.image}  alt="" /> 
              </Link>
              <p className={classes.collectionChangePhoto}>Изменить фото</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdminPageGoodsContent;