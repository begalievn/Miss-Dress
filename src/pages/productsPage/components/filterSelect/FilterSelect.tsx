import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import classes from "./filterSelect.module.scss";

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
    display: "flex",
    textAlign: "right",
    alignItems: "center",
    paddingRight: "20px",
    paddingTop: "4px",
    borderStyle: "none",
    fontStyle: "normal",
    fontWeight: 200,
    fontSize: "23px",
    fontFamily: "Montserrat",
    letterSpacing: "0.1px",
    lineHeight: "27px",
    "&:hover": { cursor: "pointer" },
  };

  return (
    <div className={classes.container}>
      <FormControl sx={formStyles}>
        {name === "" ? (
          <InputLabel style={inputLabelStyles} id="demo-simple-select-label">
            <p
              style={{
                width: "280px",
                textAlign: "right",
                fontSize: "23px",
                fontWeight: 400,
                lineHeight: "27px",
                letterSpacing: "0.1px",
              }}
            >
              {"Сортировать по"}
            </p>
          </InputLabel>
        ) : null}
        <Select
          sx={selectStyles}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          onChange={handleChange}
        >
          <MenuItem value={10}>По умолчанию</MenuItem>
          <MenuItem value={20}>По цене</MenuItem>
          <MenuItem value={30}>По алфавиту</MenuItem>
          <MenuItem value={40}>По обновлению</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterSelect;
