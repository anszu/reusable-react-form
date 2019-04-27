// Input component

import React from 'react'
import styled from '@emotion/styled'
import { InputConsumer } from "../../Context/InputContext";

const StyledInput = styled.input`
    border: 1px solid #ced4da;
    border-radius: .25rem;
    display: block;
    font-size: 1rem;
    margin: .25rem 0;
    padding: .25rem .25rem;  
`
const Input = (props) => (
    <InputConsumer>{InputController => 
        <StyledInput
            name={props.name}
            type={props.type}
            value={InputController.values[props.name] || ''}
            onChange={InputController.onChange}
            required={props.required}
            />
    }
    </InputConsumer>
);

export default Input;