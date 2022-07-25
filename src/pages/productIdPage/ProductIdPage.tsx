import React from "react";
import ContentContainer from "../../containers/contentContainer/ContentContainer";

import classes from "./productIdPage.module.scss";
import ProductPicturesSlider from "./components/productPicturesSlider/ProductPicturesSlider";
import ProductContentInfo from "./components/productContentInfo/ProductContentInfo";

const ProductIdPage = () => {
  return (
    <div>
      <ContentContainer>
        <div className={classes.product_container}>
          <div className={classes.product_slider}>
            <ProductPicturesSlider />
          </div>
          <div className={classes.product_content}>
            <div className={classes.product_image}>
              <img />
            </div>
            <div className={classes.product_content_info}>
              <ProductContentInfo />
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default ProductIdPage;
