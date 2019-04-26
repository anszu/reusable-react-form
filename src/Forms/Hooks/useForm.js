// pattern found on: https://upmostly.com/tutorials/using-custom-react-hooks-simplify-forms/
// used to control input elements
// has to be adapted to also work for checkboxes, dropdowns and so on

import { useState } from 'react';

const useForm = (initialValues, callback) => {

  const [values, setValues] = useState(initialValues);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({...values, [event.target.name]: event.target.value}));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default useForm;