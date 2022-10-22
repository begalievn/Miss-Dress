import React, { useEffect, useState } from "react";

import axios from "axios";

import {CircularProgress} from "@mui/material";

import {useNavigate} from "react-router-dom";

import classes from "../../adminPageMain.module.scss";

import AdminMenu from "../UI/adminMenu/AdminMenu";

import AdminContentContainer from "../UI/adminContentContainer/AdminContentContainer";

import AdminHeader from "../UI/adminHeader/AdminHeader";

import { returnBook, giveBook, addBook } from '../../../../assets/adminPage/adminPageIcons';


import { adminGetCartApi } from "../../../../store/services/adminGetCartApi";

import ModalRegistration from "../../../../containers/mainModal/ModalRegistration";

import LoaderCircular from "../../../../components/loader-circular/LoaderCircular";

import AdminPageGoodsTopInfo from "./components/adminPageGoodsTopInfo/AdminPageGoodsTopInfo";

import AdminPageGoodsContent from "./components/adminPageGoodsContent/AdminPageGoodsContent";


import styles from "./adminPageGoods.module.scss";
import ModalAddBooks from "./components/modal-add-book/ModalAddBooks";
import ModalGiveBook from "./components/modal-give-book/ModalGiveBook";
import ModalReturnBook from "./components/modal-return-book/ModalReturnBook";
import BookCard from "./components/book-card/BookCard";

const AdminPageGoods = () => {

  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = adminGetCartApi.useGetAllBooksQuery(page);

  const [openGiveModal, setOpenGiveModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openReturnModal, setOpenReturnModal] = useState(false);

  console.log("books data", data);

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleOpenGiveModal = () => {
    setOpenGiveModal(true);
  };

  const handleOpenReturnModal = () => {
    setOpenReturnModal(true);
  };

  const handleCardClick = (book: any) => {
    console.log(book);
    navigate(`${book.id}`);
  };

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <div className={classes.container_parent}>

      <AdminMenu />
      <AdminContentContainer>
        <AdminHeader />
        <div className={styles.actions}>
          <button onClick={handleOpenAddModal} className={styles.button}>Добавить книгу + </button>
          <button onClick={handleOpenGiveModal} className={styles.button}>Дать книгу </button>
          <button onClick={handleOpenReturnModal} className={styles.button}>Вернуть книгу </button>
        </div>
        <h2 className={styles.title}>Список книг</h2>
        <div className={styles.books_list}>
          {
            isLoading ? (<LoaderCircular />) :
              data.data.results.map((book: any) => (
                <div className={styles.card} onClick={() => handleCardClick(book)}>
                  <BookCard book={book} />
                </div>
              ))
          }
        </div>


      </AdminContentContainer>
      { openAddModal && <ModalAddBooks open={openAddModal} handleClose={() => setOpenAddModal(false)} />}
      { openGiveModal && <ModalGiveBook open={openGiveModal} handleClose={() => setOpenGiveModal(false)} />}
      { openReturnModal && <ModalReturnBook open={openReturnModal} handleClose={() => setOpenReturnModal(false)} />}
    </div>
  );
};

export default AdminPageGoods;
