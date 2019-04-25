import React from 'react'
import InputFieldDefault from './Components/FormFields/InputFieldDefault'
import Button from './Components/FormElements/Button'
import useForm from "./Hooks/useForm";

const UserContactForm = () => {
  const { values, handleChange, handleSubmit } = useForm({
    firstName: '',
    lastName: '',
    areaCode: '',
    phoneNumber: 0
  }, submit);

  function submit() {
    console.log(values);
  }

  return (
        <form onSubmit={handleSubmit}>
          <InputFieldDefault
            name="firstName"
            label="First Name"
            type="string"
            required="required"
            value={values.firstName}
            onChange={handleChange}/>
          <InputFieldDefault
            name="lastName"
            label="Last Name"
            type="string"
            required=""
            value={values.lastName}
            onChange={handleChange}/>
          <InputFieldDefault
            name="areaCode"
            label="Area Code"
            type="number"
            required=""
            value={values.areaCode}
            onChange={handleChange}/>
          <InputFieldDefault
            name="phoneNumber"
            label="Phone Number"
            type="number"
            required="required"
            value={values.phoneNumber}
            onChange={handleChange}/>
          <Button value="Send" type="submit"/>
          <Button value="Reset" type="reset"/>
        </form>
      );
    }

  export default UserContactForm;