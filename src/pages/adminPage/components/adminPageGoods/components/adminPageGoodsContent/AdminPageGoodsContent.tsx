
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { adminCollectionApi } from "../../../../../../store/services/adminCollectionApi";

import { adminCollectionProducts } from "../../../../../../utils/consts/admin-page-collection-seasons/adminPageConsts";

import { IAdminCollection } from "../../../../../../utils/types/typesAdminCollection";

import classes from "./adminPageGoodsContent.module.scss";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormGroup, InputLabel, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

function AdminPageGoodsContent() {

  const [collection]=useState<string|any>("");
  const {data:cards} = adminCollectionApi.useGetProductByCollectionQuery(collection);
  console.log(cards);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div className={classes.container}>  
      {adminCollectionProducts.map((item:IAdminCollection)=> {
        return (
          <div key={item.id} className={classes.collectionContent}>
            <div className={classes.collectionText}>
              <h2 className={classes.collectionTitle}>{item.title}</h2>
              <p onClick={handleClickOpen} className={classes.collectionEdit}>Редактировать</p>
              <div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                >
                  <form>
                    <FormGroup sx={{width: "400px", padding: "20px"}}>
                      <InputLabel sx={{color: "#000"}}>
                      Изменить текст
                      </InputLabel>
                      <TextField
                        sx={{backgroundColor: "#fff", borderRadius: "4px"}}
                        multiline
                        rows={1}
                        // value={item?.title}
                        // onChange={changeData("title")}
                        variant="outlined"
                      />
                    </FormGroup>
                  </form>    
                  <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={handleClose} autoFocus>
                      Изменить
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div> 
            <Link className={classes.link} to={`/season-products/${item.path}`}>
              <img className={classes.collectionImage} src={item.image.image}  alt="" /> 
            </Link>
            <p className={classes.collectionChangePhoto}>Изменить фото</p>
          </div>
        );
      })}
    </div>
  );
}

export default AdminPageGoodsContent;