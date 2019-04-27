// Default view of input fields consiting of label, input and error message

import React from 'react'
import Input from '../FormElements/Input'
import Error from '../FormElements/Error'
import Label from '../FormElements/Label'
import styled from '@emotion/styled'

const StyledInputFieldDefault = styled.div`
    padding-bottom: .5rem;
`
const InputFieldDefault = (props) => (
    <StyledInputFieldDefault>
      { props.label && <Label label={props.label} for={props.name}/> }:
      <Input 
        name={props.name}
        type={props.type}
        required={props.required}/>
      { props.error && <Error error={props.error}/> }
    </StyledInputFieldDefault>
);

export default InputFieldDefault;