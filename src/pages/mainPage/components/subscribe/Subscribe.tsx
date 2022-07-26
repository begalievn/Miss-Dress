import React, { useState } from "react";

import useInput from "../../../../hooks/validation/useInput";

import styles from "./subscribe.module.scss";

const Subscribe = () => {
  const [success, setSuccess] = useState(false);

  const name = useInput("", {
    minLength: 8,
    maxLength: 20,
    isEmpty: true,
    cyrillic: true,
  });
  const number = useInput("", {
    isEmpty: true,
    minLength: 5,
    maxLength: 13,
    phoneNumber: true,
  });

  const formConfirm = !name.inputValid || !number.inputValid;
  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formConfirm) {
      name.clearFields();
      number.clearFields();
      setSuccess(true);
      let data = {
        name: name.value,
        number: number.value,
      };
      console.log(data);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <h1>Оформить подписку</h1>
        <div className={styles.inputBlock}>
          <input
            onChange={(e) => name.onChange(e)}
            onBlur={() => name.onBlur()}
            type="text"
            value={name.value}
            name="name"
            placeholder="Ваше Ф.И.О."
            className={styles.input}
          />
          {<p className={styles.error}>{name.isDirty && name.error}</p>}
        </div>

        <div className={styles.inputBlock}>
          <input
            onChange={(e) => number.onChange(e)}
            onBlur={() => number.onBlur()}
            value={number.value}
            type="text"
            name="number"
            placeholder="Номер телефона."
            className={styles.input}
          />
          <p className={styles.error}>{number.isDirty && number.error}</p>
          {/*{number.isDirty && number.isEmpty && (*/}
          {/*  <p className={styles.error}>Вышла ошибочка</p>*/}
          {/*)}*/}
        </div>
        <div className={styles.inputBlock}>
          <input
            type="text"
            name="category"
            placeholder="Выбрать категорию"
            className={styles.input}
          />
          <p className={styles.error}>Вышла ошибочка</p>
        </div>
        <div className={styles.submitBlock}>
          {success && <p className={styles.success}>Подписка оформлена</p>}

          <button
            onClick={(e: React.MouseEvent) => submitHandler(e)}
            disabled={false}
            type="submit"
          >
            Подписаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
