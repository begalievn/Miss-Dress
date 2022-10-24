import React, { FC, useEffect, useState } from "react";

import { shoppingCartApi } from "../../../../store/secondary/shoppingCartQuery";
import { ICountry } from "../../../../utils/types/typesShoppingCart";

import styles from "./select.module.scss";

interface ISelect {
  placeholder: string;
  onChange?: (id: number) => void;
  id?: number;
}
const Select: FC<ISelect> = ({ placeholder = "Страна", id, onChange }) => {
  const [active, setActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>(placeholder);
  const [disable, setDisable] = useState<boolean>(
    placeholder === "Страна" || !!id
  );
  const { data, isLoading } =
    placeholder === "Страна"
      ? shoppingCartApi.useGetCountriesQuery()
      : shoppingCartApi.useGetCitiesQuery(id!);

  const result = data?.result;

  useEffect(() => {
    if (!isLoading && !data?.result?.length && id) {
      setValue("Страна недоступна");
      setDisable(false);
    }
  }, [isLoading]);

  function setCountryData(item: ICountry) {
    setValue(item.title);
    onChange && onChange(item.id);
  }

  return (
    <div
      onClick={() => disable && setActive(!active)}
      className={
        active ? `${styles.select} ${styles.activeSelect}` : styles.select
      }
    >
      <p className={styles.placeHolder}>{value}</p>
      {active ? (
        <p className={styles.arrow}> &#x25BC; </p>
      ) : (
        <p className={styles.arrow}> &#x25C0; </p>
      )}

      <ul className={active ? `${styles.menu} ${styles.active}` : styles.menu}>
        {result &&
          result.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => setCountryData(item)}
                className={styles.item}
              >
                {item.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Select;
