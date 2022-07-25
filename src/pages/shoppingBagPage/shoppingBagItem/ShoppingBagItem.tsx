import React from 'react';


import imageJeans from "../../../assets/main-page/photoCardImage.png";
import btnCloseImage from "../../../assets/icons/cross-circle.svg";

import style from "./ShoppingBagItem.module.scss";
const ShoppingBagItem = () => {

  const arrOrders = [
    {
      orderName: "Benito Kate Wrap Dress",
      vendorСode: "Платья AD857",
      size: "29-49",
      color: "Бежевый",
      countOfLine: 5,
      oldPrice: 4500,
      newPrice: 3500,
      image: imageJeans,
    }, {
      orderName: "Benito Kate Wrap Dress",
      vendorСode: "Платья AD857",
      size: "29-49",
      color: "Бежевый",
      countOfLine: 5,
      oldPrice: 4500,
      newPrice: 3500,
      image: imageJeans,
    }, {
      orderName: "Benito Kate Wrap Dress",
      vendorСode: "Платья AD857",
      size: "29-49",
      color: "Бежевый",
      countOfLine: 5,
      oldPrice: 4500,
      newPrice: 3500,
      image: imageJeans,
    },
  ];


  return (
    <div>
      {arrOrders.map((item, index) => (
        <div className={style.container} key={index}>
          <div className={style.block}>
            <div className={style.image_hero}>
              <img src={item.image} alt="" />
            </div>
            <div className={style.text_block}>
              <div>
                <p>{item.orderName}</p>
                <p><span className={style.name_area}>Артикул: </span><span>{item.vendorСode}</span></p>
                <p><span className={style.name_area}>Размер: </span> <span>{item.size}</span></p>
                <p><span className={style.name_area}>Цвет:</span> <span>{item.color}</span></p>
                <p><span className={style.name_area}>Количество товара в линейке: </span> <span>{item.countOfLine}</span></p>
              </div>
              <div className={style.counter}>
                <button>-</button>
                <div>5</div>
                <button>+</button>
              </div>
            </div>
          </div>
          <div  className={style.block_price}> 
          <img src={btnCloseImage} alt="" />
          <div>
            <p>{item.newPrice}</p>
            <p>{item.oldPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingBagItem;