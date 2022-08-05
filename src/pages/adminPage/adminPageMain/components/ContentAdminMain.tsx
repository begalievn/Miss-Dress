import React from "react";

import { IAdmin } from "../../../../utils/types/types";

import { Link } from "react-router-dom";

const ContentAdminMain = ({ title, image, route }: IAdmin) => {
  return (
    <div>
      <Link to={route}>
        <img src={image} alt="" /> {title}
      </Link>
    </div>
  );
};

export default ContentAdminMain;
