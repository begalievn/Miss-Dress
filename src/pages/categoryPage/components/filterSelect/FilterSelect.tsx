import React, { Dispatch, FC, SetStateAction, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "./style.scss";
import classes from "./filterSelect.module.scss";
interface IFilterSelectProps {
  setName: Dispatch<SetStateAction<string>>;
  name: string;
}
export const FilterSelect: FC<IFilterSelectProps> = ({ setName, name }) => {
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
          // className={classes.select}
          sx={selectStyles}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          onChange={handleChange}
        >
          <MenuItem value={"rate"}>
            <p>По умолчанию</p>
          </MenuItem>
          <MenuItem value={"price"}>
            <p>По цене</p>
          </MenuItem>
          <MenuItem value={"title"}>
            <p>По алфавиту</p>
          </MenuItem>
          <MenuItem value={"updateDate"}>
            <p>По обновлению</p>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterSelect;
