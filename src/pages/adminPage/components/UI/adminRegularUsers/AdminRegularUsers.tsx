import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminRegularUsersApi } from "../../../../../store/services/adminRegularUsersApi";
import ViewMoreButton from "../viewMoreButton/ViewMoreButton";

import classes from "./adminRegularUsers.module.scss";


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



function AdminRegularUsers() {

  const navigate = useNavigate();
  
  const {data:regularUsers = []} = adminRegularUsersApi.useFetchGetRegularUsersQuery("");
//   console.log(regularUsers?.result);  

  return (
    <div>
      <div className={classes.regularUsers}>
        <h2>Постоянные пользователи</h2>
        {regularUsers?.result?.filter((_elem:any, index:number)=>index<3).map((item:any) => (
          <div className={classes.inner}>
            <h5>{item.user_first_name} {item.user_last_name}</h5>
            <p>{item.amount} продаж</p>
            <p>{item.totalCount}k+ доход</p>
          </div>
        ))}
        <div className={classes.viewMoreBtn} onClick={()=> navigate("/user")}>
          <ViewMoreButton />
        </div>
      </div>
    </div>
  );
}

export default AdminRegularUsers;