import React, { useState } from "react";

import { useParams } from "react-router-dom";

import ContentContainer from "../../containers/contentContainer/ContentContainer";

import {
  bestSellers1,
  bestSellers2,
  bestSellers3,
  bestSellers4,
} from "../../assets/main-page/images";

import SimilarProductsBlock from "../../components/similar-products-block/SimilarProductsBlock";

import LoaderCircular from "../../components/loader-circular/LoaderCircular";

import { categoryOneProductApi } from "../../store/services/categoryOneProductApi";

import { shoppingCartApi } from "../../store/services/shoppingCartQuery";

import ProductPicturesSlider from "./components/productPicturesSlider/ProductPicturesSlider";
import ProductContentInfo from "./components/productContentInfo/ProductContentInfo";
import AddToBusketButton from "./components/add-to-busket-button/AddToBusketButton";
import ProductAbout from "./components/product-about/ProductAbout";
import ProductPicturesVerticalSlider from "./components/productPicturesVerticalSlider/ProductPicturesVerticalSlider";

import ZoomModal from "./components/zoom-modal/ZoomModal";

import classes from "./productIdPage.module.scss";

const ProductIdPage = () => {
  const images = [bestSellers1, bestSellers2, bestSellers3, bestSellers4];
  const { productID } = useParams();
  // console.log(productID);

  const {
    data:newData,
    isLoading: loading,
    isError: error,
  } = categoryOneProductApi.useFetchCategoryOneProductApiQuery(productID);
  console.log("newData", newData);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleZoomOpen = () => {
    setModalOpen(true);
  };

  const [addProduct, {}] = shoppingCartApi.useAddProductMutation();
  const id: any = 1;

  return (
    <div className={classes.container}>
      <ContentContainer>
        <div className={classes.product_container}>
          <div className={classes.product_vertical_slider}>
            {
              loading ? null : <ProductPicturesVerticalSlider
                setImageIndex={setActiveIndex}
                cards={newData.images}
              />
            }
            
          </div>
          <div className={classes.product_content}>
            <div
              className={classes.product_image}
              onClick={() => handleZoomOpen()}
            >
              {newData ? newData.images.filter((_elem: any, index: number) => index < 1).map((item:any)=>{
                return (
                  <>
                    <img src={item.url} alt={""} />
                  </>
                );
              }) : null}
            </div>
            <div className={classes.product_content_info}>
              <ProductContentInfo  />
              <div className={classes.about}>
                <ProductAbout
                  text={newData ? newData.description : null}
                />
              </div>
              <div className={classes.add_button}>
                <AddToBusketButton text={"Добавить в корзину"} />
              </div>
            </div>
          </div>
        </div>

        
        <div className={classes.product_horizontal_slider}>
          {loading ? null : <ProductPicturesSlider
            setImageIndex={setActiveIndex}
            cards={newData.images}
          />}          
        </div>
        <div className={classes.product_content_info_bottom}>
          <div className={classes.about}>
            <ProductAbout
              // text={`В наши дни платья по-прежнему пользуются спросом и популярностью
              //   среди молодежи, они занимают почетные места на презентациях мод.
              //   Однако постепенно в моду входит повседневный стиль, который не
              //   подразумевает использование красочных и ярких образов.Платье
              //   Benito Kate Wrap Dress отличный пример этому.`}
              text={newData ? newData.description : null}
            />
          </div>
          <div className={classes.add_button}>
            <AddToBusketButton text={"Перейти в корзину"} />
          </div>
        </div>
        <div>
          <SimilarProductsBlock />
        </div>
        <ZoomModal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          image={images[activeIndex]}
        />
      </ContentContainer>
    </div>
  );
};

export default ProductIdPage;
