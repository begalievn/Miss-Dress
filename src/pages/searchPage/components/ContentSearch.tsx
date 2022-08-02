import React from "react";

import classes from "../search.module.scss";

import ProductPhoto from "../../../components/productPhoto/ProductPhoto";

import {
  blackStarIcon,
  colorsPalletIcon,
  favoriteIcon,
} from "../../../assets/icons/icons";

import { useNavigate } from "react-router-dom";

import { ProductTest } from "../../../utils/types/types";

const ContentSearch = ({
  id,
  title,
  price,
  discount,
  rate,
  image,
}: ProductTest) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/category/4");
  };

  return (
    <>
      <div className={classes.content}>
        {/*{data.map((item) => (*/}
        {/*  <div>{item.name}</div>*/}
        {/*))}*/}
        <div className={classes.container}>
          <div>
            <ProductPhoto
              image="https://img1.akspic.ru/crops/2/5/8/3/4/143852/143852-atmosfera-prirodnyj_landshaft-utro-nebo-gora-1500x2100.jpg"
              id={id}
            />
          </div>
          <div onClick={handleClick} className={classes.content}>
            <div className={classes.first}>
              <div className={classes.price}>
                <span className={classes.old_price}>{discount}</span>
                <span className={classes.new_price}>{price}</span>
              </div>
              <div className={classes.colors_container}>
                <img src={colorsPalletIcon} alt={"color pallet icon"} />
                <span className={classes.colors}>colors</span>
              </div>
            </div>
            <div className={classes.second}>
              <h4>{title}</h4>
            </div>
            <div className={classes.third}>
              <p>
                Размер <span>size</span>
              </p>
            </div>
            <div className={classes.fourth}>
              <div className={classes.stars}>
                <img src={blackStarIcon} alt={"star"} />
                <img src={blackStarIcon} alt={"star"} />
                <img src={blackStarIcon} alt={"star"} />
                <img src={blackStarIcon} alt={"star"} />
                <img src={blackStarIcon} alt={"star"} />
                {rate}
              </div>
              <div className={classes.favorite_icon}>
                <img src={favoriteIcon} alt={"favorite icon"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSearch;

// import React from "react";
//
// import { useNavigate } from "react-router-dom";
//
// import {
//   blackStarIcon,
//   colorsPalletIcon,
//   favoriteIcon,
// } from "../../../assets/icons/icons";
// import ProductPhoto from "../../../components/productPhoto/ProductPhoto";
//
// import classes from "../search.module.scss";
//
// const data = {
//   price: {
//     oldPrice: 7500,
//     newPrice: 5990,
//   },
//   colors: 5,
//   name: "Envy Look All Season Skirt",
//   sizes: [29, 49],
//   stars: 4,
//   isFavorite: false,
//   // image: bestSellers1,
//   // id: 1,
// };
//
// interface IProductCard {
//   image: string;
//   id: number;
//   width?: string;
// }
//
// const ContentSearch = ({ image, id, width }: IProductCard) => {
//   const navigate = useNavigate();
//
//   const handleClick = () => {
//     navigate("/category/4");
//   };
//
//   console.log(data);
//
//   return (
//     <>
//       <div className={classes.content}>
//         {/*{data.map((item) => (*/}
//         {/*  <div>{item.name}</div>*/}
//         {/*))}*/}
//         <div className={classes.container}>
//           <div>
//             <ProductPhoto image={image} id={id} />
//           </div>
//           <div onClick={handleClick} className={classes.content}>
//             <div className={classes.first}>
//               <div className={classes.price}>
//                 <span className={classes.old_price}>{data.price.oldPrice}</span>
//                 <span className={classes.new_price}>{data.price.newPrice}</span>
//               </div>
//               <div className={classes.colors_container}>
//                 <img src={colorsPalletIcon} alt={"color pallet icon"} />
//                 <span className={classes.colors}>{data.colors}</span>
//               </div>
//             </div>
//             <div className={classes.second}>
//               <h4>{data.name}</h4>
//             </div>
//             <div className={classes.third}>
//               <p>
//                 Размер <span>{data.sizes[0]}</span>
//               </p>
//             </div>
//             <div className={classes.fourth}>
//               <div className={classes.stars}>
//                 <img src={blackStarIcon} alt={"star"} />
//                 <img src={blackStarIcon} alt={"star"} />
//                 <img src={blackStarIcon} alt={"star"} />
//                 <img src={blackStarIcon} alt={"star"} />
//                 <img src={blackStarIcon} alt={"star"} />
//               </div>
//               <div className={classes.favorite_icon}>
//                 <img src={favoriteIcon} alt={"favorite icon"} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
//
// export default ContentSearch;
