import { authorImage } from '../../../../../../assets/adminPage/adminPageIcons';

import classes from './authorCard.module.scss';

const AuthorCard = ({author}) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={author?.image || authorImage} alt="authorImage"/>
      </div>
      <div className={classes.author_name}>
        {author?.fullName || 'Имя автора'}
      </div>
    </div>
  );
};

export default AuthorCard;
