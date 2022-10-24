import React, {useState} from 'react';
import {Box, Modal} from "@mui/material";

import axios from "axios";

import { adminCollectionApi } from "../../../../../../store/services/adminCollectionApi";
import { adminGetCartApi } from "../../../../../../store/services/adminGetCartApi";

import classes from "../../../adminPageAuthors/components/createAuthModal/createAuthorModal.module.scss";
import SelectButton from "../select-button/SelectButton";

const style = {
  width: '500px',
  height: '350px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#F1DAC5',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

const ModalGiveBook = ({open, handleClose}) => {
  const [userId, setUserId] = useState(0);
  const [bookId, setBookId] = useState(0);
  
  const handleUserSelect = (e) => {
    const { value } = e.target;
    setUserId(value);
  };
  
  const handleBookSelect = (e) => {
    const { value } = e.target;
    setBookId(value);
  };
  
  const { data: users, isLoading: usersLoading, isError: usersError } = adminCollectionApi.useGetAllUsersQuery("");
  const { data: books, isLoading: booksLoading, isError: booksError } = adminGetCartApi.useGetAllBooksQuery(1);
  
  console.log("users", users);
  console.log("books", books);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('bookId', bookId);
    const response = await axios.post('http://67.207.94.104:9080/api/v1/admin/give-book', formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
    handleClose();
    console.log('response', response);
  };
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={classes.container}>
          <h2 className={classes.title}>Дать книгу</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="files" className={classes.upload_file}>Пользователь</label>
            {
              usersError ? null :
                usersLoading ? "Загрузка" :
                  (<SelectButton listData={users?.data} text={"Пользователь"} value={userId} onChange={handleUserSelect}  />)
                  
            }
            <div className={classes.blank_space}></div>
            <label htmlFor="files" className={classes.upload_file}>Книга</label>
            {
              booksError ? null :
                booksLoading ? 'Загрузка' :
                  (<SelectButton listData={books?.data?.results} text={"Книга"} value={bookId} onChange={handleBookSelect} />)
            }
            <button className={classes.submit} type="submit" onClick={handleSubmit}>Дать книгу</button>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalGiveBook;
