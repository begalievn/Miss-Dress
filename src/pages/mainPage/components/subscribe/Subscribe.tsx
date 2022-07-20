import React, { useEffect, useState } from "react";

import styles from "./subscribe.module.scss";

const useValidation = (
  value: string,
  validations: { isEmpty: boolean; minLength: number }
) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(true);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError]);
  return { isEmpty, minLengthError, inputValid };
};

const useInput = (
  initialValue: string,
  validations: { isEmpty: boolean; minLength: number }
) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty(true);
  };
  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

const Subscribe = () => {
  const name = useInput("", { isEmpty: true, minLength: 8 });
  const number = useInput("", { isEmpty: true, minLength: 5 });

  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <h1>Оформить подписку</h1>
        <div className={styles.inputBlock}>
          <input
            onChange={(e) => name.onChange(e)}
            onBlur={(e) => name.onBlur(e)}
            type="text"
            value={name.value}
            name="name"
            placeholder="Ваше Ф.И.О."
            className={styles.input}
          />
          {name.isDirty && name.isEmpty && (
            <p className={styles.error}>Вышла ошибочка</p>
          )}
        </div>

        <div className={styles.inputBlock}>
          <input
            onChange={(e) => number.onChange(e)}
            onBlur={(e) => name.onBlur(e)}
            value={number.value}
            type="number"
            name="number"
            placeholder="Номер телефона."
            className={styles.input}
          />

          {number.isDirty && number.isEmpty && (
            <p className={styles.error}>Вышла ошибочка</p>
          )}
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
          <p className={styles.error}>Вышла ошибочка</p>
          <button disabled={true} type="submit">
            Подписаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
