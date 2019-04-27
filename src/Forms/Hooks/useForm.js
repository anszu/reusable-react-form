// Hook pattern found on: https://upmostly.com/tutorials/using-custom-react-hooks-simplify-forms/
// used to control input elements
// has to be adapted to also work for checkboxes, dropdowns and so on

import { useState } from 'react';
import { useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({...values, [event.target.name]: event.target.value}));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0  && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
};

export default useForm;