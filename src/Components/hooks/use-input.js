import { useState } from 'react';
import { useEffect } from 'react';

const useInput = (isValidInput) => {
  const [entredValue, setEntredValue] = useState('');
  const [valueTached, setValueTached] = useState(false);
  const [formValidation, setFormValidation] = useState(false);

  const isValidValue = isValidInput(entredValue);
  const hasError = isValidValue && valueTached;

  useEffect(() => {
    if (isValidValue && !hasError) {
      setFormValidation(false);
    } else {
      setFormValidation(true);
    }
    console.log('formValidation = ', formValidation);
  }, [formValidation, isValidValue, hasError]);
  //   console.log('formValidation', formValidation);
  //   console.log('isValidValue', isValidValue);
  //   console.log('valueTached', valueTached);

  const entredValueHandler = (e) => {
    setEntredValue(e.target.value);
    setFormValidation(true);
  };

  const onBlurHandler = () => {
    setValueTached(true);
  };
  const resetValue = () => {
    setEntredValue('');
    setValueTached(false);
    setFormValidation(false);
  };

  return {
    value: entredValue,
    hasError,
    formValidation,
    isValidValue,
    entredValueHandler,
    onBlurHandler,
    resetValue,
  };
};

export default useInput;
