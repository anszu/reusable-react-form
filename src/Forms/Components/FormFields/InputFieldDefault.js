// Default view of input fields consiting of label, input and error message

import React from 'react'
import Input from '../FormElements/Input'
import Error from '../FormElements/Error'
import Label from '../FormElements/Label'
import styled from '@emotion/styled'

const StyledInputFieldDefault = styled.div`
    padding-bottom: .5rem;
`
const InputFieldDefault = ({label, name, type, required}) => (
    <StyledInputFieldDefault>
      { label && <Label label={label} forInput={name}/> }:
      <Input 
        name={name}
        type={type}
        required={required}/>
      <Error inputName={name}/>
    </StyledInputFieldDefault>
);

export default InputFieldDefault;