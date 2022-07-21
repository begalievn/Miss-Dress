import React from "react";
import ContentContainer from "../../containers/contentContainer/ContentContainer";

import classes from "./productIdPage.module.scss";
import ProductPicturesSlider from "./components/productPicturesSlider/ProductPicturesSlider";

const ProductIdPage = () => {
  return (
    <div>
      <ContentContainer>
        <div className={classes.product_container}>
          <ProductPicturesSlider />
        </div>
      </ContentContainer>
    </div>
  );
};

export default ProductIdPage;
