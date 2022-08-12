import React, { useEffect, useState } from "react";

import { CYRYLLYC_INPUT, PHONE_NUMBER } from "./regex";

interface IRules {
  isEmpty?: boolean;
  minLength?: number;
  maxLength?: number;
  phoneNumber?: boolean;
  cyrillic?: boolean;
}

const useValidation = (value: string, validations: IRules) => {
  const [inputValid, setInputValid] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    let error = "";
    for (const validation in validations) {
      if (validation === "isEmpty" && !value) {
        error = "Заполните!";
      }
      if (
        !error &&
        validation === "minLength" &&
        value.length < validations[validation]!
      ) {
        error = "Мало Знаков";
      }
      if (
        validation === "maxLength" &&
        value.length > validations[validation]!
      ) {
        error = "Много Знаков";
      }
      if (validation === "phoneNumber" && !PHONE_NUMBER.test(value)) {
        error = "Неверный формат";
      }
      if (validation === "cyrillic" && !CYRYLLYC_INPUT.test(value)) {
        error = "Поле не должно содержать латиницу";
      }
    }
    setError(error);
  }, [validations, value]);

  useEffect(() => {
    if (error) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [error]);
  return { setError, error, inputValid };
};

const useInput = (initialValue: string, validations: IRules) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const clearFields = () => {
    setValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setDirty(true);
  };
  return {
    value,
    onChange,
    onBlur,
    clearFields,
    isDirty,
    ...valid,
  };
};

export default useInput;
