import classes from './adminContentContainer.module.scss';

const AdminContentContainer = (props) => {
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  );
};

export default AdminContentContainer;
