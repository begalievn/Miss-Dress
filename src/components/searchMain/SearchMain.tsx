import React, { useState } from "react";

import style from "./SearchMain.module.scss";

import { useNavigate } from "react-router-dom";

const SearchMain = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name !== "") {
      navigate(`/search/name=${name}`);
    }
  };

  return (
    <form onSubmit={handleSave} className={style.container}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={style.searchMain}
        placeholder="Поиск"
        type="text"
      />
      <button
        style={{ display: "none", visibility: "hidden" }}
        type={"submit"}
      ></button>
    </form>
  );
};

export default SearchMain;
