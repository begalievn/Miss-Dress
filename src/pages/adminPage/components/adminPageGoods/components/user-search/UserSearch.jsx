import React from "react";
import SearchIcon from "@mui/icons-material/Search";

// import { searchIcon } from "../../../../assets/icons/icons";

import classes from "./userSearch.module.scss";

const UserSearch = ({value, onChange}) => {
  return (
    <div className={classes.input_container}>
      <span className={classes.icon}>
        {/*<SearchIcon sx={{ width: "30px", height: "30px", color: "gray" }} />*/}
        {/*<img src={searchIcon} alt={"search icon"} />*/}
      </span>
      <input value={value} onChange={onChange} placeholder={"Поиск"} type={"text"} className={classes.input} />
    </div>
  );
};

export default UserSearch;
