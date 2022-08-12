import React, { useEffect, useState } from "react";

import classes from "../../adminPageMain.module.scss";

import AdminMenu from "../UI/adminMenu/AdminMenu";

import CategoriesDropdowBtn from "../../../../components/categoriesDropdowButton/CategoriesDropdowBtn";

import ProfileAva from "../UI/profileAva/ProfileAva";

import UsersBlock from "../UI/usersBlock/UsersBlock";
import { UserApi } from "../../../../store/services/UserApi";

import LinearProgress from "@mui/material/LinearProgress";
import Paginations from "../../../../components/pagination/Paginations";
import DeleteButton from "../UI/deleteButton/DeleteButton";

import styles from "./adminPageUsers.module.scss";
import ViewMoreButton from "../UI/viewMoreButton/ViewMoreButton";
import { useNavigate, useParams } from "react-router-dom";
import { adminDeleteUserApi } from "../../../../store/services/adminDeleteUserApi";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

const AdminPageUsers = () => {
  const navigate = useNavigate();

  const [counte, setCounte] = useState(1);
  const limit = 7;

  const Data = {
    limit: limit,
    counte: counte,
    // name: "privet",
  };

  const { data = [], refetch } = UserApi.useGetAllQuery(Data);

  const cards = data.result?.data || [];

  const allPages = Math.ceil(data?.result?.count / 7);

  const [deleteIdl, { isLoading, isError, isSuccess, data: deleteInfo }] =
    adminDeleteUserApi.useDeleteAdminUserMutation();

  useEffect(() => {
    if (isSuccess) refetch();
  }, [deleteInfo]);

  const handleDelete = (event: React.MouseEvent, id: number) => {
    event.stopPropagation();
    deleteIdl(id);
  };

  const regularUsers = [
    {
      name: "Ророноа Зоро",
      sales: 104,
      income: 500,
    },
    {
      name: "Портгас Д. Эйс",
      sales: 85,
      income: 400,
    },
    {
      name: "Винсмок Санджи",
      sales: 25,
      income: 125,
    },
  ];

  const [value, setValue] = useState("");

  function handleSearch(event: any) {
    setValue(event.target.value);
    // Data.name = event.target.value;
  }

  // console.log(Data);

  return (
    <div className={styles.users_container}>
      <AdminMenu />
      <div className={styles.main}>
        <div className={styles.content_top}>
          <div className={styles.users}>
            <UsersBlock value={"230"} text={"новых пользователей"} />
            <div className={styles.regularUsers}>
              <h2>Постоянные пользователи</h2>
              {regularUsers.map((item) => (
                <div className={styles.inner}>
                  <h5>{item.name}</h5>
                  <p>{item.sales} продаж</p>
                  <p>{item.income}k+ доход</p>
                </div>
              ))}
              <button className={styles.view_more}>Посмотреть все</button>
            </div>
          </div>
          <ProfileAva />
        </div>
        <div className={styles.content_bot}>
          <h2>Все пользователи</h2>
          <div className={styles.search_parent}>
            <div className={styles.search}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_362_873)">
                  <path
                    d="M25.6821 24.1508L19.2157 17.6843C20.9779 15.5292 21.8443 12.7791 21.6357 10.003C21.4271 7.22696 20.1595 4.63725 18.0951 2.76957C16.0306 0.901894 13.3273 -0.100859 10.5443 -0.0312743C7.76127 0.0383101 5.11145 1.17491 3.14293 3.14342C1.17442 5.11194 0.0378219 7.76176 -0.0317626 10.5448C-0.101347 13.3278 0.901406 16.0311 2.76908 18.0956C4.63676 20.16 7.22647 21.4276 10.0025 21.6362C12.7786 21.8448 15.5287 20.9784 17.6839 19.2162L24.1503 25.6826C24.3546 25.8799 24.6282 25.9891 24.9123 25.9867C25.1963 25.9842 25.4681 25.8703 25.6689 25.6694C25.8698 25.4685 25.9837 25.1968 25.9862 24.9128C25.9886 24.6287 25.8794 24.3551 25.6821 24.1508ZM10.8329 19.5C9.11875 19.5 7.44314 18.9917 6.01791 18.0394C4.59269 17.0871 3.48186 15.7336 2.8259 14.1499C2.16994 12.5663 1.99831 10.8237 2.33271 9.14256C2.66712 7.46139 3.49254 5.91714 4.70459 4.70508C5.91665 3.49303 7.4609 2.66761 9.14207 2.3332C10.8232 1.9988 12.5658 2.17043 14.1494 2.82639C15.7331 3.48234 17.0866 4.59317 18.0389 6.0184C18.9912 7.44363 19.4995 9.11924 19.4995 10.8333C19.4969 13.1311 18.583 15.334 16.9583 16.9588C15.3335 18.5835 13.1306 19.4974 10.8329 19.5Z"
                    fill="#372E24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_362_873">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input
                value={value}
                onChange={handleSearch}
                placeholder={"Поиск пользователей"}
                type="text"
              />
            </div>
            <CategoriesDropdowBtn />
          </div>
        </div>
        <TableContainer className={styles.table}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.title}>Пользователь</TableCell>
                <TableCell className={styles.title} align="center">
                  Адрес почты
                </TableCell>
                <TableCell className={styles.title} align="right">
                  Номер телефона
                </TableCell>
                <TableCell className={styles.title} align="right">
                  Продажи
                </TableCell>
                <TableCell className={styles.title} align="center">
                  Доход
                </TableCell>
                <TableCell className={styles.title} align="left">
                  Статус
                </TableCell>
                <TableCell className={styles.title} align="left">
                  Рейтинг
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={styles.table}>
              {cards.map((item: any) => (
                <TableRow
                  className={styles.table_row}
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.firstName} {item.lastName}
                  </TableCell>
                  <TableCell align="right">zoro@gmail.com</TableCell>
                  <TableCell align="right">+996712345678</TableCell>
                  <TableCell align="right">{item.id} продаж</TableCell>
                  <TableCell align="right">{item.id}k+ доход</TableCell>

                  {item.status == 1 ? (
                    <TableCell align={"left"}>
                      <span className={styles.verified}>Проверен</span>
                    </TableCell>
                  ) : (
                    <TableCell align={"left"}>
                      <span className={styles.notVerified}>Не проверен</span>
                    </TableCell>
                  )}

                  <TableCell align="right">
                    {item.id == "Рейтинг не подтвержден" ? (
                      <TableCell
                        align="right"
                        className={classes.confirmRating}
                      >
                        Рейтинг не подтвержден
                      </TableCell>
                    ) : (
                      <div className={classes.content}>
                        <LinearProgress
                          className={classes.progress}
                          variant="determinate"
                          value={+item.id}
                          color={"inherit"}
                        />
                      </div>
                    )}
                  </TableCell>
                  <DeleteButton />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Paginations
          onChange={(event: any, page: number) => setCounte(page)}
          count={allPages}
        />
      </div>
    </div>
  );
};

export default AdminPageUsers;
