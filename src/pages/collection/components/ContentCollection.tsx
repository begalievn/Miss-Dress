import CategoriesDropdowBtn from "../../../components/categoriesDropdowButton/CategoriesDropdowBtn";
import Paginations from "../../../components/pagination/Paginations";
import classes from "../Collection.module.scss";
import { useFetchAllCategoryQuery } from "../../../store/services/CategoryApi";

import { skirts } from "../../../assets/main-page/images";
import { IResult } from "../../../utils/types/typesCategory";

const ContentCollection = () => {
  const {
    data: category,
    isLoading,
    isError,
    refetch,
  } = useFetchAllCategoryQuery("");

  return (
    <div className={classes.container}>
      <div className={classes.item_container}>
        <div>
          <h2>Коллекция</h2>
        </div>
        <button onClick={() => refetch()}>Обновить</button>
        <div>
          <CategoriesDropdowBtn />
        </div>
      </div>
      <div className={classes.title_container}>
        {isLoading && <h1>Идет Загрузка Данных...</h1>}
        {isError && (
          <h1>
            Произошла ошибка при загрузке по пробуйте обновить страницу или
            поменять запрос
          </h1>
        )}
        {category &&
          category.map((item: IResult) => (
            <ul className={classes.item_map_container} key={item.id}>
              <li className={classes.item_map}>
                <img className={classes.image} src={skirts} alt="" />
                <button className={classes.btn}>Смотреть</button>
                <span>{item.title}</span>
              </li>
            </ul>
          ))}
      </div>
      <Paginations />
    </div>
  );
};

export default ContentCollection;
