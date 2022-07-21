import React from "react";

import classes from "./productPage.module.scss";
import ContentContainer from "../../containers/contentContainer/ContentContainer";
import CategoriesAside from "./components/categoriesAside/CategoriesAside";
import FilterSelect from "./components/filterSelect/FilterSelect";
import {
  bestSellers1,
  bestSellers2,
  bestSellers3,
  bestSellers4,
  bestSellers5,
  bestSellers6,
} from "../../assets/main-page/images";
import CardsContainer from "../../containers/cardsContainer/CardsContainer";
import ProductsGridContainer from "../../containers/productsGridContainer/ProductsGridContainer";
import ProductCard from "../../components/productCard/ProductCard";
import CategoryDropdown from "./components/categoryDropdown/CategoryDropdown";

const cards = [
  {
    image: bestSellers1,
    id: 1,
  },
  {
    image: bestSellers2,
    id: 2,
  },
  {
    image: bestSellers3,
    id: 3,
  },
  {
    image: bestSellers4,
    id: 4,
  },
  {
    image: bestSellers5,
    id: 5,
  },
  {
    image: bestSellers6,
    id: 6,
  },
];

const ProductPage = () => {
  return (
    <div className={classes.container}>
      <ContentContainer>
        <div>Breadcrumb</div>
        <div className={classes.content}>
          <aside className={classes.aside}>
            <div className={classes.title_category}>
              <h3>Категория</h3>
            </div>
            <CategoriesAside />
          </aside>
          <main className={classes.main}>
            {/* Desktop version*/}
            <div className={classes.filters_container}>
              <h2>{"Все товары"}</h2>
              <div>
                <FilterSelect />
              </div>
            </div>

            {/* Mobile version */}
            <div className={classes.mobile_filters_container}>
              <div className={classes.mobile_filters_row}>
                <CategoryDropdown />
                <FilterSelect />
              </div>
              <div className={classes.mobile_filters_title}>
                <h2>{"Все товары"}</h2>
              </div>
            </div>

            <section className={classes.products}>
              <ProductsGridContainer>
                {cards.map((item, index) => (
                  <div className={classes.product_card}>
                    <ProductCard key={index} image={item.image} id={item.id} />
                  </div>
                ))}
              </ProductsGridContainer>
            </section>
          </main>
        </div>
      </ContentContainer>
    </div>
  );
};

export default ProductPage;
