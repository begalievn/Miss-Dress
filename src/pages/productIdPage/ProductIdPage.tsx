import React from "react";

import ContentContainer from "../../containers/contentContainer/ContentContainer";

import {
  bestSellers1,
  bestSellers2,
  bestSellers3,
  bestSellers4,
} from "../../assets/main-page/images";

import ImagesVerticalSlider from "../../containers/images-vertical-slider/ImagesVerticalSlider";

import ProductPicturesSlider from "./components/productPicturesSlider/ProductPicturesSlider";
import ProductContentInfo from "./components/productContentInfo/ProductContentInfo";

import AddToBusketButton from "./components/add-to-busket-button/AddToBusketButton";

import ProductAbout from "./components/product-about/ProductAbout";

import classes from "./productIdPage.module.scss";

const images = [bestSellers1, bestSellers2, bestSellers3, bestSellers4];

const ProductIdPage = () => {
  return (
    <div>
      <ContentContainer>
        <div className={classes.product_container}>
          <div className={classes.product_slider}>
            {/*<ProductPicturesSlider images={images} />*/}
          </div>
          <div className={classes.product_content}>
            <div className={classes.product_image}>
              <img src={bestSellers2} alt={""} />
            </div>
            <div className={classes.product_content_info}>
              <ProductContentInfo />
              <div className={classes.about}>
                <ProductAbout
                  text={`В наши дни платья по-прежнему пользуются спросом и популярностью
                среди молодежи, они занимают почетные места на презентациях мод.
                Однако постепенно в моду входит повседневный стиль, который не
                подразумевает использование красочных и ярких образов.Платье
                Benito Kate Wrap Dress отличный пример этому.`}
                />
              </div>
              <div className={classes.add_button}>
                <AddToBusketButton text={"Перейти в корзину"} />
              </div>
            </div>
          </div>
        </div>

        <ProductPicturesSlider images={images} />
      </ContentContainer>
    </div>
  );
};

export default ProductIdPage;
