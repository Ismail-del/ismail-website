// import './contact.css';

const useValidation = (errorValue, inputType, isValidName) => {
  const cssClassValidity = errorValue ? 'validation' : 'noValidation';

  const phrase = (
    <div className="validation">Please entrer a valid {inputType}</div>
  );
  return {
    cssClassValidity,
    phrase,
  };
};

export default useValidation;
