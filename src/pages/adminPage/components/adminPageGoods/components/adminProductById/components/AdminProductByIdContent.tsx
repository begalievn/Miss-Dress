import React from "react";

import classes from "./adminProductByIdContent.module.scss";

function AdminProductByIdContent() {
  return (
    <div>
      <h2 className={classes.title}>Информация о товаре</h2>
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <div className={classes.contentLeftImgList}>
            <img className={classes.contentLeftImg} src="" alt="" />
            <img className={classes.contentLeftImg} src="" alt="" />
            <img className={classes.contentLeftImg} src="" alt="" />
            <img className={classes.contentLeftImg} src="" alt="" />
            <img className={classes.contentLeftImg} src="" alt="" />
          </div>
          <p className={classes.contentLeftImgEdit}><br/>Изменить фото</p>
          <div className={classes.contentLeftTitleContent}>
            <h3 className={classes.contentLeftTitle}>Benito Kate Wrap Dress</h3>
            <p className={classes.contentLeftSeasonCollection}>Весенняя коллекция</p>
          </div>
          <div className={classes.contentLeftArticleContent}>
            <h4 className={classes.contentLeftArticle}>Артикул:    Платья AD857</h4>
            <p className={classes.contentLeftLikes}>578</p>
          </div>
          <p className={classes.contentLeftCountInLine}>Количество в линейке:    5</p>
          <p className={classes.contentLeftColor}>Цвет:</p>
          <div className={classes.contentLeftPrices}>
            <p className={classes.contentLeftPrice}>5990</p>
            <p className={classes.contentLeftOldPrice}>7̶5̶0̶0̶</p>
          </div>
          <div className={classes.contentLeftSizes}>
            <p className={classes.contentLeftSize}>Размер:    29-49</p>
            <p className={classes.contentLeftTextile}>Ткань:    Полиэстер</p>
          </div>
          <div className={classes.contentLeftStyles}>
            <p className={classes.contentLeftLength}>Длина:    115</p>
            <p className={classes.contentLeftStyle}>Фасон:     А-Силуэт</p>
            <p className={classes.contentLeftEdit}>Редактировать</p>
          </div>
        </div>


        <div className={classes.contentRight}>
          <div className={classes.contentRightUpperSection}>
            <div className={classes.contentRightTop}>
              <h3 className={classes.contentRightTitle}>О товаре:</h3>
              <p className={classes.contentRightEdit}>Редактировать</p>
            </div>
            <p className={classes.contentRightText}>В наши дни платья по-прежнему пользуются спросом и популярностью 
            среди молодежи, они занимают почетные места на презентациях мод. 
            Однако постепенно в моду входит повседневный стиль, который не 
            подразумевает использование красочных и ярких образов. Платье Benito 
            Kate Wrap Dress отличный пример этому.
            </p>
          </div>

          <div className={classes.contentRightLowSection}>
            <button className={classes.contentRightTrashBtn}>Отправить в корзину</button>
            <button className={classes.contentRightDeleteBtn}>Удалить товар</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProductByIdContent;