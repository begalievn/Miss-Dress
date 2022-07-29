import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "./style.scss";
import classes from "./filterSelect.module.scss";

// const useStyles = makeStyles(() =>
//   createStyles({
//     iconClassName: {
//       fill: "red",
//     },
//   })
// );

const FilterSelect = () => {
  const [name, setName] = useState("");
  const handleChange = (e: SelectChangeEvent) => {
    setName(e.target.value);
  };

  const formStyles = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    border: "none",
  };

  const inputLabelStyles = {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#4C464B",
    marginLeft: "10px",
    top: "50%",
    transform: "translate(0,-50%)",
    display: "flex",
    justifyContent: "flex-end",
  };

  const selectStyles = {
    width: "100%",
    height: "100%",
    textAlign: "start",
    display: "flex",
    justifyContent: "start",
    "&:hover": { cursor: "pointer" },
    "& MuiInputLabel-root.Mui-focused": {
      borderColor: "red",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderRadius: 0,
    },
  };

  return (
    <div className={classes.container}>
      <FormControl className="MuiInputLabel-root" sx={formStyles}>
        {name === "" ? (
          <InputLabel style={inputLabelStyles} id="demo-simple-select-label">
            <p>{"Сортировать по"}</p>
          </InputLabel>
        ) : null}
        <Select
          sx={selectStyles}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          onChange={handleChange}
        >
          <MenuItem value={10}>
            <p>По умолчанию</p>
          </MenuItem>
          <MenuItem value={20}>
            <p>По цене</p>
          </MenuItem>
          <MenuItem value={30}>
            <p>По алфавиту</p>
          </MenuItem>
          <MenuItem value={40}>
            <p>По обновлению</p>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterSelect;
