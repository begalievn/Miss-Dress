import React, { useEffect, useState } from "react";

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

export default useInput;
