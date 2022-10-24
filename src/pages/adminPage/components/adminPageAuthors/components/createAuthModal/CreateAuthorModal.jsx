import {Box, Modal} from "@mui/material";
import { useState } from 'react';
import axios from "axios";


import {adminCollectionApi} from "../../../../../../store/services/adminCollectionApi";

import classes from './createAuthorModal.module.scss';

export const CreateAuthorModal = ({open, handleClose}) => {
  
  const { useCreateAuthorMutation } = adminCollectionApi;
  
  const [createAuthor, { isLoading }] = useCreateAuthorMutation();
  
  
  const [address, setAddress] = useState('');
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('Choose File');
  
  const handleAddressChange = (evt) => {
    setAddress(evt.target.value);
  };
  
  const handlePhotoSelect = (evt) => {
    setFile(evt.target.files[0]);
    setFilename(evt.target.files[0].name);
  };
  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append('fullName', address);
    formData.append('image', file);
    console.log(formData);
    console.log(address);
    console.log(file);
    try {
      const response = await axios.post('http://67.207.94.104:9080/api/v1/admin/author-create',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
          },
        });
      // const response = await createAuthor(formData);
      console.log("response", response);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };
  
  const style = {
    width: '500px',
    height: '500px',
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
          <h2 className={classes.title}>Добавить автора</h2>
          <form onSubmit={handleSubmit}>
            <input
              className={classes.input}
              type="text"
              value={address}
              onChange={handleAddressChange}
              name={address}
              placeholder="Имя автора"
            />
            <br />
            <label htmlFor="files" className={classes.upload_file}>Выбрать фотогарфию</label>
            <input  type="file" className={classes.input_file} onChange={handlePhotoSelect} />
            <button className={classes.submit} type="submit" onClick={handleSubmit}>Добавить</button>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateAuthorModal;
