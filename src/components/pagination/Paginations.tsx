import React from "react";
import { Pagination } from "@mui/material";
import classes from "./Pagination.module.scss";

const Paginations = (props: any) => {
  console.log(props.count);

  return (
    <div className={classes.block_pagination}>
      <Pagination
        count={props.count}
        variant="outlined"
        color="primary"
        onChange={props.onChange}
      />
    </div>
  );
};

export default Paginations;
