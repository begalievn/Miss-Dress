import React from "react";

import ContentContainer from "../../containers/contentContainer/ContentContainer";

import {
  bestSellers1,
  bestSellers2,
  bestSellers3,
  bestSellers4,
} from "../../assets/main-page/images";

import ProductPicturesSlider from "./components/productPicturesSlider/ProductPicturesSlider";
import ProductContentInfo from "./components/productContentInfo/ProductContentInfo";

import AddToBusketButton from "./components/add-to-busket-button/AddToBusketButton";

import ProductAbout from "./components/product-about/ProductAbout";

import classes from "./productIdPage.module.scss";
import ProductPicturesVerticalSlider from "./components/productPicturesVerticalSlider/ProductPicturesVerticalSlider";

const images = [bestSellers1, bestSellers2, bestSellers3, bestSellers4];

const ProductIdPage = () => {
  return (
    <div className={classes.container}>
      <ContentContainer>
        <div className={classes.product_container}>
          <div className={classes.product_vertical_slider}>
            {/*<ProductPicturesSlider images={images} />*/}
            <ProductPicturesVerticalSlider cards={images} />
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
        <div className={classes.product_horizontal_slider}>
          <ProductPicturesSlider cards={images} />
        </div>
        <div className={classes.product_content_info_bottom}>
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
      </ContentContainer>
    </div>
  );
};

export default ProductIdPage;
