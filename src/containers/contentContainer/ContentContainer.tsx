import React from "react";

import classes from "./contentContainer.module.scss";

interface IContentContainer {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: IContentContainer) => {
  return <div className={classes.content}>{children}</div>;
};

export default ContentContainer;
