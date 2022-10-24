import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { adminRegularUsersApi } from "../../../../../store/secondary/adminRegularUsersApi";
import ViewMoreButton from "../viewMoreButton/ViewMoreButton";

import classes from "./adminRegularUsers.module.scss";

function AdminRegularUsers() {
  const navigate = useNavigate();

  const { data: regularUsers = [] } =
    adminRegularUsersApi.useFetchGetRegularUsersQuery("");
  //   console.log(regularUsers?.result);

  return (
    <div className={classes.regularUsers}>
      <h2 className={classes.users}>Постоянные пользователи</h2>
      {regularUsers?.result
        ?.filter((_elem: any, index: number) => index < 3)
        .map((item: any) => (
          <div key={item.id} className={classes.inner}>
            <h5>
              {item.user_first_name} {item.user_last_name}
            </h5>
            <p>{item.amount} продаж</p>
            <p>{item.totalCount}k+ доход</p>
          </div>
        ))}
      <div className={classes.viewMoreBtn} onClick={() => navigate("/user")}>
        <ViewMoreButton />
      </div>
    </div>
  );
}

export default AdminRegularUsers;
