import React, { useEffect, useState } from "react";

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
import CategoriesDropdowBtn from "../../components/categoriesDropdowButton/CategoriesDropdowBtn";

import classes from "./categoryPage.module.scss";
import { categoryApi } from "../../store/services/categoryApi";
import { getNestedCategories } from "../../utils/helpers/getNestedCategories";
import { CategoryTypes } from "../../utils/types/types";
import { productsApi } from "../../store/services/productsApi";
import LoaderCircular from "../../components/loader-circular/LoaderCircular";

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  console.log("Selected category", selectedCategory);

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = categoryApi.useFetchAllCateggoriesQuery("");

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
    refetch,
  } = productsApi.useGetAllProductsQuery("");

  // useEffect(() => {
  //   console.log("Refetched");
  //   refetch();
  // }, [selectedCategory]);

  const {
    data: productsByCategory,
    isLoading: productsByCategoryLoading,
    error: productsByCategoryError,
  } = productsApi.useGetProductsByCategoryQuery(selectedCategory);

  console.log("Products by Category", productsByCategory);

  const [outputCategories, setOutputCategories] = useState<CategoryTypes[]>([]);

  // console.log("Products", products);

  const { data = [] } = productsApi.useGetAllProductsQuery("");

  const cards = data.result?.data || [];

  return (
    <div className={classes.container}>
      <ContentContainer>
        <div>Breadcrumb</div>
        <div className={classes.content}>
          <aside className={classes.aside}>
            <div className={classes.title_category}>
              <h3>Категория</h3>
            </div>
            {categoriesLoading ? (
              <LoaderCircular />
            ) : (
              <CategoriesAside
                categories={categories?.result || []}
                setSelectedCategory={setSelectedCategory}
              />
            )}
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
                <CategoryDropdown
                  categories={categories?.result || []}
                  setSelectedCategory={setSelectedCategory}
                />
                <FilterSelect />
              </div>
              <div className={classes.mobile_filters_title}>
                <h2>{"Все товары"}</h2>
              </div>
            </div>
            <section className={classes.products}>
              <ProductsGridContainer>
                {cards.map((item: any, index: any) => (
                  <div className={classes.product_card}>
                    <ProductCard
                      status={item.status}
                      rate={item.rate}
                      title={item.title}
                      price={item.price}
                      key={index}
                      image={item.images}
                      id={item.id}
                    />
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

export default CategoryPage;
