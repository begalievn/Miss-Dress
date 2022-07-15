import React from "react";


import Main from "../../containers/main/Main";

import classes from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <div>

      <div className={classes.container}>
          <Main />
        <div className={classes.content}>
       </div>
    </div>
    </div>
  );
};

export default MainPage;
