import React from "react";
import { goBackIcon } from "../../../../../assets/adminPage/adminPageIcons";
import AdminMenu from "../../UI/adminMenu/AdminMenu";
import { useNavigate } from "react-router-dom";

import classes from "../../../adminPageMain.module.scss";

import styles from "../adminPageCart.module.scss";
import ProfileAva from "../../UI/profileAva/ProfileAva";

const info = [
  {
    name: "Benito Kate Wrap Dress",
    image: [
      {
        url: [
          "https://mobimg.b-cdn.net/v3/fetch/28/284fcdbc235f974c6370af9453493489.jpeg?h=900&r=0.5",
          "https://mobimg.b-cdn.net/v3/fetch/4c/4c9055dd440db7d449e0667fbeb8d244.jpeg",
        ],
      },
    ],
    code: "Платья AD857",
    amount: 5,
    oldPrice: 7500,
    newPrice: 5900,
    size: "29-49",
    length: 115,
    cotton: "Полиэстер",
    fashion: "А-Силует",
  },
];

info.map((item) => console.log(item.image[0].url[0]));

const AdminPageProduct = () => {
  const navigate = useNavigate();

  const goBack = () => navigate("/shopping");

  return (
    <div className={classes.container_parent}>
      <AdminMenu />
      <div className={styles.right}>
        <div className={styles.right_top}>
          <div onClick={goBack} className={styles.backPage}>
            <img className={styles.goBackIcon} src={goBackIcon} alt="" />
            <p className={styles.goBackText}>Вернуться ко всем пользователям</p>
          </div>
          <ProfileAva />
        </div>
        <div className={styles.right_bot}>
          <div className={styles.product_info}>
            <h2>Информация о товаре</h2>
            <div className={styles.images}>
              {info.map((item) =>
                item.image ? (
                  <img src={item.image[0].url[1]} alt="image" />
                ) : (
                  <img
                    src="https://via.placeholder.com/120x160"
                    alt="placeholder"
                  />
                )
              )}
            </div>
            <div>
              {info.map((item) => (
                <div className={styles.info}>
                  <h2>{item.name}</h2>
                  <p>
                    Артикул: <span>{item.code}</span>
                  </p>
                  <p>
                    Количество в линейке: <span>{item.amount}</span>
                  </p>
                  <p>
                    {item.newPrice} <span>{item.oldPrice}</span>
                  </p>
                  <div className={styles.styles}>
                    <p>
                      Размер: <span>{item.size}</span>
                    </p>
                    <p>
                      Ткань: <span>{item.cotton}</span>
                    </p>
                    <p>
                      Длина: <span>{item.length}</span>
                    </p>
                    <p>
                      Фасон: <span>{item.fashion}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.product_about}>
            <h2>О товаре:</h2>
            <p>
              В наши дни платья по-прежнему пользуются спросом и популярностью
              среди молодежи, они занимают почетные места на презентациях мод.
              Однако постепенно в моду входит повседневный стиль, который не
              подразумевает использование красочных и ярких образов.Платье
              Benito Kate Wrap Dress отличный пример этому.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPageProduct;
