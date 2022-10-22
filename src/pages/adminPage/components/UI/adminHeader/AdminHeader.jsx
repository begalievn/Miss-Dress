import ProfileAva from "../profileAva/ProfileAva";

import classes from './admineHeader.module.scss';

const AdminHeader = () => {
  return (
    <div className={classes.header}>
      <h2>Админ панель</h2>
      <ProfileAva />
    </div>
  );
};

export default AdminHeader;
