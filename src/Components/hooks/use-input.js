import { useState } from 'react';
// import { useEffect } from 'react';

const useInput = (isValidInput) => {
  const [entredValue, setEntredValue] = useState('');
  const [valueTached, setValueTached] = useState(false);

  const isValidValue = isValidInput(entredValue);
  const hasError = isValidValue && valueTached;

  //   useEffect(() => {
  //     if (isValidValue && !hasError) {
  //       setFormValidation(false);
  //     }
  //     console.log('formValidation = ', formValidation);
  //   }, [formValidation, isValidValue, hasError]);
  //   console.log('formValidation', formValidation);
  //   console.log('isValidValue', isValidValue);
  //   console.log('valueTached', valueTached);

  const entredValueHandler = (e) => {
    setEntredValue(e.target.value);
  };

  const onBlurHandler = () => {
    setValueTached(true);
  };
  const resetValue = () => {
    setEntredValue('');
    setValueTached(false);
  };

  return {
    value: entredValue,
    hasError,
    isValidValue,
    entredValueHandler,
    onBlurHandler,
    resetValue,
  };
};

export default useInput;
