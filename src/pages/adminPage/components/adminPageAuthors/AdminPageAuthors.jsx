import React, {useEffect, useState} from "react";



import AdminMenu from "../UI/adminMenu/AdminMenu";

import AdminContentContainer from "../UI/adminContentContainer/AdminContentContainer";

import AdminHeader from "../UI/adminHeader/AdminHeader";

// rtk-queries
import { adminCollectionApi } from "../../../../store/services/adminCollectionApi";


import classes from "../../adminPageMain.module.scss";

import LoaderCircular from "../../../../components/loader-circular/LoaderCircular";

import styles from "./adminPageAuthors.module.scss";

import CreateAuthorModal from "./components/createAuthModal/CreateAuthorModal";
import AuthorCard from "./components/author-card/AuthorCard";

const AdminPageAuthors = () => {
  const [openCreateAuthorModal, setOpenCreateAuthorModal] = useState(false);
  const { data, isLoading, isError } = adminCollectionApi.useGetAllAuthorsQuery("");
  
  console.log("data", data?.data);
  
  const handleOpenModal = () => {
    setOpenCreateAuthorModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenCreateAuthorModal(false);
  };
  
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <AdminContentContainer>
        <AdminHeader />
        <div className={styles.title_container}>
          <h2 className={styles.title}>Список авторов</h2>
          <button className={styles.add_user} onClick={handleOpenModal}>Добавить автора + </button>
        </div>
        <div className={styles.authors_list}>
          {
            isLoading ? <LoaderCircular /> :
              (
                data?.data.map((author) => (
                  <AuthorCard author={author} />
                ))
              )
          }
        </div>
      </AdminContentContainer>
      <CreateAuthorModal open={openCreateAuthorModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default AdminPageAuthors;
