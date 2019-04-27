// Example build of Form instance using FormElements, FormFields, Hooks, Context and Validation Module

import React from 'react'
import InputFieldDefault from './Components/FormFields/InputFieldDefault'
import Button from './Components/FormElements/Button'
import useForm from "./Hooks/useForm";
import { InputProvider } from "./Context/InputContext";
import Validation from './Validation';

const UserContactForm = () => {
 
    const { values, errors, handleChange, handleSubmit } = useForm(submit, validate);

    function submit() {
        console.log(values);
    }

    function validate() {
        var validate= new Validation();
        // test if invalid, if invalid == true
        const errorScheme = {
            firstName: {
                required: validate.isEmpty(values.firstName)
            },
            areaCode: {
                is_number: isNaN(values.areaCode)
            },
            phoneNumber: {
                required: validate.isEmpty(values.phoneNumber),
                is_number: isNaN(values.phoneNumber)
            }
        }
        return(validate.mapErrors(errorScheme));
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <InputProvider value={{values: values, onChange: handleChange}}>
                <InputFieldDefault
                    name="firstName"
                    label="First Name*"
                    type="string"
                    required="required"
                    error={errors.firstName}/>
                <InputFieldDefault
                    name="lastName"
                    label="Last Name"
                    type="string"
                    error={errors.lastName}/>
                <InputFieldDefault
                    name="areaCode"
                    label="Area Code"
                    type="number"
                    error={errors.areaCode}/>
                <InputFieldDefault
                    name="phoneNumber"
                    label="Phone Number*"
                    type="number"
                    required="required"
                    error={errors.phoneNumber}/>
            </InputProvider>
            <Button value="Send" type="submit"/>
            </form>
        );
}

  export default UserContactForm;