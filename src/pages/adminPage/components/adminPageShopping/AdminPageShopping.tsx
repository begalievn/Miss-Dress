import React, { useEffect } from "react";

import classes from "../../adminPageMain.module.scss";
import AdminMenu from "../UI/adminMenu/AdminMenu";

import styles from "./adminPageCart.module.scss";
import ProfileAva from "../UI/profileAva/ProfileAva";
import AdminInput from "../UI/adminInput/AdminInput";
import CategoriesDropdowBtn from "../../../../components/categoriesDropdowButton/CategoriesDropdowBtn";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteButton from "../UI/deleteButton/DeleteButton";
import Paginations from "../../../../components/pagination/Paginations";
import { adminGetCartApi } from "../../../../store/services/adminGetCartApi";

const info = [
  {
    name: "Benito Kate Wrap Dress",
    code: "AD857",
    number: 12345678,
    sales: 2,
    income: 5,
    id: 1,
  },
  {
    name: "Benito Kate Wrap Dress",
    code: "AD857",
    number: 12345678,
    sales: 2,
    income: 5,
    id: 2,
  },
  {
    name: "Benito Kate Wrap Dress",
    code: "AD857",
    number: 12345678,
    sales: 2,
    income: 5,
    id: 3,
  },
  {
    name: "Benito Kate Wrap Dress",
    code: "AD857",
    number: 12345678,
    sales: 2,
    income: 5,
    id: 4,
  },
];

const AdminPageShopping = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  const { data = {} } = adminGetCartApi.useGetCartQuery("");

  const cards = data;

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div className={styles.right}>
        <div className={styles.top}>
          <ProfileAva />
        </div>
        <div className={styles.bot}>
          <div className={styles.product_card}>
            <h1>Товары корзины</h1>
            <div className={styles.features}>
              <AdminInput />
              <CategoriesDropdowBtn />
            </div>
          </div>
          <TableContainer className={styles.table}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={styles.title}>
                    Наименование товара
                  </TableCell>
                  <TableCell className={styles.title} align="right">
                    Артикул
                  </TableCell>
                  <TableCell className={styles.title} align="right">
                    Номер товара
                  </TableCell>
                  <TableCell className={styles.title} align="right">
                    Продажи
                  </TableCell>
                  <TableCell className={styles.title} align="right">
                    Доход
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={styles.table}>
                {info.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">{item.code}</TableCell>
                    <TableCell align="right">{item.number}</TableCell>
                    <TableCell align="right">{item.sales}</TableCell>
                    <TableCell align="right">{item.income}</TableCell>
                    <DeleteButton />
                    {/*<button>Удалить</button>*/}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Paginations />
        </div>
      </div>
    </div>
  );
};

export default AdminPageShopping;
