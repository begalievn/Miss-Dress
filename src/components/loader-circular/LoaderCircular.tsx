import React from "react";
import { Box, CircularProgress } from "@mui/material";

import classes from "./LoaderCircular.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
};

const LoaderCircular = () => {
  return (
    <div className={classes.container}>
      <Box>
        <CircularProgress sx={{ color: "#3C210A" }} />
      </Box>
    </div>
  );
};

export default LoaderCircular;
