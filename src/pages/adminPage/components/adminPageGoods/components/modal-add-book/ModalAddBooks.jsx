import {Box, Modal} from "@mui/material";

import {useState} from "react";

import axios from "axios";

import classes from "../../../adminPageAuthors/components/createAuthModal/createAuthorModal.module.scss";
import UserSearch from "../user-search/UserSearch";
import SelectButton from "../select-button/SelectButton";
import { adminGetCartApi } from "../../../../../../store/services/adminGetCartApi";
import { adminCollectionApi } from "../../../../../../store/services/adminCollectionApi";

const ModalAddBooks = ({open, handleClose}) => {
  
  const [authorId, setAuthorId] = useState(0);
  const [genresId, setGenresId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(0);
  
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('Choose File');
  
  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };
  
  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  };
  
  const handleCountChange = (evt) => {
    setCount(evt.target.value);
  };
  
  const handleGenresSelect = (e) => {
    const { value } = e.target;
    setGenresId(value);
  };
  
  const handleAuthorSelect = (e) => {
    const { value } = e.target;
    setAuthorId(value);
  };
  
  const { data: authors, isLoading: authorsLoading, isError: authorsError} = adminCollectionApi.useGetAllAuthorsQuery("");
  const { data: genres, isLoading: genresLoading, isError: genresError} = adminCollectionApi.useGetAllGengresQuery("");
  
  
  
  
  
  const handlePhotoSelect = (evt) => {
    setFile(evt.target.files[0]);
    setFilename(evt.target.files[0].name);
  };
  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('cover', file);
    formData.append('description', description);
    formData.append('count', count);
    formData.append('authorId', authorId);
    formData.append('genreId', genresId);
    console.log(formData);
    try {
      const response = await axios.post('http://67.207.94.104:9080/api/v1/admin/book-create',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
          },
        });
      // const response = await createAuthor(formData);
      handleClose();
      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };
  

  
  const style = {
    width: '500px',
    height: '800px',
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
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={classes.container}>
          <h2 className={classes.title}>Добавить книгу</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="files" className={classes.upload_file}>Автор</label>
  
            {
              authorsError ? null :
                authorsLoading ?
                  <label htmlFor="files" className={classes.upload_file}>Загрузка</label>
                  :
                  (<SelectButton listData={authors?.data} text={'Авторы'} value={authorId} onChange={handleAuthorSelect} />)
            }
            <div className={classes.blank_space}></div>
            <label htmlFor="files" className={classes.upload_file}>Жанр</label>
            {
              genresError ? null :
                genresLoading ?
                  <label htmlFor="files" className={classes.upload_file}>Загрузка</label>
                  :
                  (<SelectButton listData={genres?.data} text={'Жанры'} value={genresId} onChange={handleGenresSelect} />)
            }
            <input
              className={classes.input}
              type="text"
              placeholder="Название книги"
              value={title}
              onChange={handleTitleChange}
            />
            <br />
            <input className={classes.input}
              type="text"
              placeholder="Количество"
              value={count}
              onChange={handleCountChange}
            />
            <textarea
              className={classes.text_area}
              type="text"
              placeholder="Описание книги"
              value={description}
              onChange={handleDescriptionChange}
            />
            <label htmlFor="files" className={classes.upload_file}>Выбрать фотогарфию</label>
            <input  type="file" className={classes.input_file} onChange={handlePhotoSelect} />
           
            
            <button className={classes.submit} type="submit" onClick={handleSubmit}>Добавить</button>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalAddBooks;
