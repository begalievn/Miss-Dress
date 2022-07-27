import React from "react";
import { Box, CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
};

const LoaderCircular = () => {
  return (
    <div>
      <Box sx={style}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default LoaderCircular;
