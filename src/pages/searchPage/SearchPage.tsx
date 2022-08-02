import React from "react";
import { useParams } from "react-router-dom";

import { searchApi } from "../../store/services/SearchApi";

import classes from "./search.module.scss";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import CategoriesDropdowBtn from "../../components/categoriesDropdowButton/CategoriesDropdowBtn";
import ContentSearch from "./components/ContentSearch";
import Paginations from "../../components/pagination/Paginations";

import {
  bestSellers1,
  bestSellers2,
  bestSellers3,
  bestSellers4,
  bestSellers5,
  bestSellers6,
} from "../../assets/main-page/images";
import SimilarProductsSlider from "../../components/similar-products-slider/SimilarProductsSlider";
import SimilarProductsBlock from "../../components/similar-products-block/SimilarProductsBlock";

const SearchPage = () => {
  const images = [
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

  const { name } = useParams();

  const { data = [], isLoading, isError } = searchApi.useFetchSearchQuery(name);

  const cards = data.result?.data || [];

  return (
    <>
      <div className={classes.content_main}>
        <div className={classes.content_parent}>
          <Breadcrumbs />
          <div className={classes.result}>
            <h2 className={classes.title}>Результаты поиска</h2>
            <CategoriesDropdowBtn />
          </div>
          <p>Найдено {cards.length} моделей</p>
        </div>
        {isLoading && <h1>Идет загрузка...</h1>}
        {isError && <h1>Произошла ошибка при загрузке...</h1>}
        {cards && cards.length > 0 ? (
          cards.map((card: any) => (
            <div>
              <ContentSearch
                key={card.id}
                id={card.id}
                title={card.title}
                price={card.price}
                discount={card.discount}
                rate={card.rate}
                image={card.images.image}
              />
            </div>
          ))
        ) : (
          <div className={classes.content_main_block}>
            <SimilarProductsBlock />
          </div>
        )}
      </div>
      <Paginations />
    </>
  );
};

export default SearchPage;

// import React from "react";
//
// import {
//   bestSellers1,
//   bestSellers2,
//   bestSellers3,
//   bestSellers4,
//   bestSellers5,
//   bestSellers6,
// } from "../../assets/main-page/images";
//
// import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
// import CategoriesDropdowBtn from "../../components/categoriesDropdowButton/CategoriesDropdowBtn";
// import Paginations from "../../components/pagination/Paginations";
//
// import ContentSearch from "./components/ContentSearch";
//
// import classes from "./search.module.scss";
// import { searchApi, useFetchSearchQuery } from "../../store/services/SearchApi";
// import { useParams } from "react-router-dom";
// import { data } from "../../components/main-page/photo-card-content/PhotoCardContent";
//
// const cards = [
//   {
//     image: bestSellers1,
//     id: 1,
//   },
//   {
//     image: bestSellers2,
//     id: 2,
//   },
//   {
//     image: bestSellers3,
//     id: 3,
//   },
//   {
//     image: bestSellers4,
//     id: 4,
//   },
//   {
//     image: bestSellers5,
//     id: 5,
//   },
//   {
//     image: bestSellers6,
//     id: 6,
//   },
// ];
//
// const SearchPage = () => {
//   const { name } = useParams();
//
//   const {
//     data: card,
//     isLoading,
//     isError,
//   } = searchApi.useFetchSearchQuery(name);
//
//   console.log(data);
//
//   return (
//     <>
//       <div className={classes.content_main}>
//         <div className={classes.content_parent}>
//           <Breadcrumbs />
//           <div className={classes.result}>
//             <h2 className={classes.title}>Результаты поиска</h2>
//             <CategoriesDropdowBtn />
//           </div>
//           <p>Найдено {cards.length} моделей</p>
//         </div>
//         {isLoading && <h1>Идет загрузка...</h1>}
//         {isError && <h1>Произошла ошибка при загрузке...</h1>}
//         {cards.map((item, id) => (
//           <div>
//             <ContentSearch key={id} image={item.image} id={item.id} />
//           </div>
//         ))}
//       </div>
//       <Paginations />
//     </>
//   );
// };
//
// export default SearchPage;
