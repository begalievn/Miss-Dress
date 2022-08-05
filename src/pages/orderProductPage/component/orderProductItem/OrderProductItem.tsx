

import React from 'react'

import { useParams } from "react-router-dom";

import { orderApi } from "../../../../store/services/OrderApi";

import classes from "./orderProductItem.module.scss";

function OrderProductItem() {

  const {id} = useParams();

  const {data=[]} = orderApi.useFetchOrderByIdQuery(id);
  const cartOrderId = data?.result;
  console.log(cartOrderId);


  return (
    <div>
      {cartOrderId?.map((item:any) => {
        return (
          <div>
            <div className={classes.content}>
              <div className={classes.contentLeft}>
                {item.cart.products.map((elem:any) => {
                  return (   
                    <>
                      <span key={elem.id}>
                        <img src={elem.product.images[1]?.url} alt=""></img>
                      </span>
                      <h2 className={classes.title}>Benito Kate Wrap Dress</h2>
                      <p className={classes.vendoreCode}>Артикул:    Платья AD857</p>
                      <p className={classes.size}>Размер:    29-49</p>
                      <p className={classes.color}>Цвет:    Бежевый</p>
                      <p className={classes.amount}>Количество товара в линейке:    5</p>
                    </>

                  );
                })}
                
              </div>

              <div className={classes.contentRight}>
                <p className={classes.price}>5990</p>
                <p className={classes.discount}>7̶5̶0̶0̶</p>
              </div>
            </div>
            <hr className={classes.line} />
          </div>
                
        )
      })}

      
    </div>
  );
}

export default OrderProductItem;