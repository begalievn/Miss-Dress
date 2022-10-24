/* eslint-disable indent */
import React, { useEffect, useState } from "react";

import LinearProgress from "@mui/material/LinearProgress";








import { useNavigate, useParams } from "react-router-dom";

import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";


import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import AdminRegularUsers from "../UI/adminRegularUsers/AdminRegularUsers";
import { adminDeleteUserApi } from "../../../../store/secondary/adminDeleteUserApi";
import ViewMoreButton from "../UI/viewMoreButton/ViewMoreButton";
import DeleteButton from "../UI/deleteButton/DeleteButton";
import Paginations from "../../../../components/pagination/Paginations";
import { UserApi } from "../../../../store/services/UserApi";
import UsersBlock from "../UI/usersBlock/UsersBlock";
import ProfileAva from "../UI/profileAva/ProfileAva";
import CategoriesDropdowBtn from "../../../../components/categoriesDropdowButton/CategoriesDropdowBtn";
import AdminMenu from "../UI/adminMenu/AdminMenu";
import classes from "../../adminPageMain.module.scss";
import AdminContentContainer from "../UI/adminContentContainer/AdminContentContainer";
import AdminHeader from "../UI/adminHeader/AdminHeader";

import styles from "./adminPageUsers.module.scss";

const AdminPageUsers = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const userStatus = (item: number) => {
    let statusNum = {
      text: "В ожидании",
      color: "#F1F2C1",
    };
    switch (item) {
      case 0:
        statusNum = {
          text: "В ожидании",
          color: "#F1F2C1",
        };
        break;
      case 1:
        statusNum = {
          text: "Проверен",
          color: "#C1F2D8",
        };
        break;
      case 2:
        statusNum = {
          text: "Не проверен",
          color: "#ECCFB5",
        };
        break;
      case 3:
        statusNum = {
          text: "Забанен",
          color: "#e56471",
        };
        break;
      default:
        statusNum = {
          text: "В ожидании",
          color: "#F1F2C1",
        };
    }
    return statusNum;
  };

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

  const handleDelete = (userId: number): void => {
    deleteIdl(userId);
  };

  const [name, setName] = useState("");

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name !== "") {
      navigate(`/users/name=${name}`);
    }
  };

  function userMore(userId: any) {
    navigate(`/users/${userId}`);
  }

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <AdminContentContainer>
        <AdminHeader />
        <h2>Content</h2>
      </AdminContentContainer>
    </div>
  );
};

export default AdminPageUsers;


// <div className={styles.users_container}>
//   <AdminMenu />
//   <div className={styles.main}>
//     <div className={styles.content_top}>
//       <div className={styles.users}>
//         <UsersBlock value={"230"} text={"новых пользователей"} />
//         <AdminRegularUsers />
//       </div>
//       <ProfileAva />
//     </div>
//     <div className={styles.content_bot}>
//       <h2>Все пользователи</h2>
//       <div className={styles.search_parent}>
//         <div className={styles.search}>
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 26 26"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g clipPath="url(#clip0_362_873)">
//               <path
//                 d="M25.6821 24.1508L19.2157 17.6843C20.9779 15.5292 21.8443 12.7791 21.6357 10.003C21.4271 7.22696 20.1595 4.63725 18.0951 2.76957C16.0306 0.901894 13.3273 -0.100859 10.5443 -0.0312743C7.76127 0.0383101 5.11145 1.17491 3.14293 3.14342C1.17442 5.11194 0.0378219 7.76176 -0.0317626 10.5448C-0.101347 13.3278 0.901406 16.0311 2.76908 18.0956C4.63676 20.16 7.22647 21.4276 10.0025 21.6362C12.7786 21.8448 15.5287 20.9784 17.6839 19.2162L24.1503 25.6826C24.3546 25.8799 24.6282 25.9891 24.9123 25.9867C25.1963 25.9842 25.4681 25.8703 25.6689 25.6694C25.8698 25.4685 25.9837 25.1968 25.9862 24.9128C25.9886 24.6287 25.8794 24.3551 25.6821 24.1508ZM10.8329 19.5C9.11875 19.5 7.44314 18.9917 6.01791 18.0394C4.59269 17.0871 3.48186 15.7336 2.8259 14.1499C2.16994 12.5663 1.99831 10.8237 2.33271 9.14256C2.66712 7.46139 3.49254 5.91714 4.70459 4.70508C5.91665 3.49303 7.4609 2.66761 9.14207 2.3332C10.8232 1.9988 12.5658 2.17043 14.1494 2.82639C15.7331 3.48234 17.0866 4.59317 18.0389 6.0184C18.9912 7.44363 19.4995 9.11924 19.4995 10.8333C19.4969 13.1311 18.583 15.334 16.9583 16.9588C15.3335 18.5835 13.1306 19.4974 10.8329 19.5Z"
//                 fill="#372E24"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0_362_873">
//                 <rect width="26" height="26" fill="white" />
//               </clipPath>
//             </defs>
//           </svg>
//
//           <form onSubmit={handleSave} className={styles.container}>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className={styles.searchMain}
//               placeholder="Поиск пользователей"
//               type="text"
//             />
//             <button
//               style={{ display: "none", visibility: "hidden" }}
//               type={"submit"}
//             ></button>
//           </form>
//         </div>
//         <CategoriesDropdowBtn />
//       </div>
//     </div>
//
//     <TableContainer className={styles.table}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className={styles.title}>Пользователь</TableCell>
//             <TableCell className={styles.title} align="center">
//               Адрес почты
//             </TableCell>
//             <TableCell className={styles.title} align="right">
//               Номер телефона
//             </TableCell>
//             <TableCell className={styles.title} align="right">
//               Продажи
//             </TableCell>
//             <TableCell className={styles.title} align="center">
//               Доход
//             </TableCell>
//             <TableCell className={styles.title} align="left">
//               Статус
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody className={styles.table}>
//           {cards.map((item: any) => (
//             <TableRow
//               className={styles.table_row}
//               key={item.id}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell
//                 style={{ cursor: "pointer" }}
//                 onClick={() => userMore(item.id)}
//                 component="th"
//                 scope="row"
//               >
//                 {item.firstName} {item.lastName}
//               </TableCell>
//               <TableCell align="right">zoro@gmail.com</TableCell>
//               <TableCell align="right">{item.phoneNumber}</TableCell>
//               <TableCell align="right">{item.id} продаж</TableCell>
//               <TableCell align="right">{item.id}k+ доход</TableCell>
//               <TableCell>
//                 <div>
//                   <Button
//                     // eslint-disable-next-line indent
//                     style={{
//                       borderRadius: "20px",
//                       backgroundColor: `${userStatus(item.status).color}`,
//                       fontSize: "12px",
//                     }}
//                     aria-describedby={id}
//                     variant="contained"
//                     onClick={handleClick}
//                   >
//                     {userStatus(item.status).text}
//                   </Button>
//                   <Popover
//                     id={id}
//                     open={open}
//                     anchorEl={anchorEl}
//                     onClose={handleClose}
//                     anchorOrigin={{
//                       vertical: "bottom",
//                       horizontal: "left",
//                     }}
//                   >
//                     <Typography
//                       style={{ backgroundColor: "#C1F2D8" }}
//                       sx={{ p: 2 }}
//                     >
//                       Проверен
//                     </Typography>{" "}
//                     <Typography
//                       style={{ backgroundColor: "#ECCFB5" }}
//                       sx={{ p: 2 }}
//                     >
//                       Не проверен.
//                     </Typography>{" "}
//                     <Typography
//                       style={{ backgroundColor: "#F1F2C1" }}
//                       sx={{ p: 2 }}
//                     >
//                       В ожидании
//                     </Typography>{" "}
//                   </Popover>
//                 </div>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     <Paginations
//       onChange={(event: any, page: number) => setCounte(page)}
//       count={allPages}
//     />
{/*  </div>*/}
{/*</div>*/}

