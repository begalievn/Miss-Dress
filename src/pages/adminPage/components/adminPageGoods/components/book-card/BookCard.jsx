import React from 'react';

import classes from "../../../adminPageAuthors/components/author-card/authorCard.module.scss";
import {authorImage} from "../../../../../../assets/adminPage/adminPageIcons";

const BookCard = ({book}) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={book?.cover || authorImage} alt="authorImage"/>
      </div>
      <div className={classes.author_name}>
        {book?.title || 'Название книги'}
      </div>
    </div>
  );
};

export default BookCard;
