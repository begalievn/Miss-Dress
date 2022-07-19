import React from "react";

import classes from "./productPage.module.scss";
import ContentContainer from "../../containers/contentContainer/ContentContainer";
import CategoriesAside from "./components/categoriesAside/CategoriesAside";

const ProductPage = () => {
  return (
    <div className={classes.container}>
      <ContentContainer>
        <div>Breadcrumb</div>
        <div className={classes.content}>
          <aside className={classes.aside}>
            <CategoriesAside />
          </aside>
          <main className={classes.main}></main>
        </div>
      </ContentContainer>
    </div>
  );
};

export default ProductPage;
