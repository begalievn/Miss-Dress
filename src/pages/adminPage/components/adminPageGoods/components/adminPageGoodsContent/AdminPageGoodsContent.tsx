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

  // const [counte, setCounte] = useState(1);
  // const limit = 7;

  // const Data = {
  //   limit: limit,
  //   counte: counte,
  // };

  // const { data = [] } = UserApi.useGetAllQuery(Data);

  // const cards = data.result?.data || [];

  // // console.log(cards);

  // const allPages = Math.ceil(data?.result?.count / 7);

  // const [deleteId, setDeleteId] = useState<any>(0);
  // // console.log("setState", deleteId);

  // const [deleteIdl, { isLoading, isError }] =
  //   adminDeleteUserApi.useDeleteAdminUserMutation(deleteId);
  // // adminDeleteUserApi.useFetchAdminDeleteUserApiMutation(deleteId);
  // // console.log(isError);

  // const handleDelete = (event: React.MouseEvent) => {
  //   event.stopPropagation();
  //   deleteIdl(deleteIdl);
  // };

  // const regularUsers = [
  //   {
  //     name: "Ророноа Зоро",
  //     sales: 104,
  //     income: 500,
  //   },
  //   {
  //     name: "Портгас Д. Эйс",
  //     sales: 85,
  //     income: 400,
  //   },
  //   {
  //     name: "Винсмок Санджи",
  //     sales: 25,
  //     income: 125,
  //   },
  // ];








  const [collection, setCollection]=useState<string|any>("");
  const {data:cards} = adminCollectionApi.useGetProductByCollectionQuery(collection);
  console.log(cards);
  
  // const navigateToSeasonProducts = useNavigate();

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
              <Link to={`/season-products/${item.path}`}>
                <img className={classes.collectionImage} src={item.image.image}  alt="" /> 
              </Link>
              {/* <img onClick={()=> setCollection(item.path)} className={classes.collectionImage} src={item.image.image}  alt="" />  */}
              {/* <img onClick={()=> navigateToSeasonProducts("season-products")} className={classes.collectionImage} src={item.image.image}  alt="" />  */}
              <p className={classes.collectionChangePhoto}>Изменить фото</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdminPageGoodsContent;