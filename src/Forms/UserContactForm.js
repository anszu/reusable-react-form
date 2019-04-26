import React from 'react'
import InputFieldDefault from './Components/FormFields/InputFieldDefault'
import Button from './Components/FormElements/Button'
import useForm from "./Hooks/useForm";
import { InputProvider } from "./Context/InputContext";

// TODO
// solve required
// validation
// functional
// check requirements
// styling
// github

const UserContactForm = () => {
    // preset input values
    const inputPresetValues = {
        firstName: '',
        lastName: '',
        areaCode: '',
        phoneNumber: 0
    }

    const { values, handleChange, handleSubmit } = useForm(inputPresetValues, submit);

    function submit() {
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputProvider value={{values: values, onChange: handleChange}}>
                <InputFieldDefault
                    name="firstName"
                    label="First Name"
                    type="string"
                    required="required"/>
                <InputFieldDefault
                    name="lastName"
                    label="Last Name"
                    type="string"
                    required=""/>
                <InputFieldDefault
                    name="areaCode"
                    label="Area Code"
                    type="number"
                    required=""/>
                <InputFieldDefault
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                    required="required"/>
            </InputProvider>
            <Button value="Send" type="submit"/>
            <Button value="Reset" type="reset"/>
            </form>
        );
}

  export default UserContactForm;