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
const Input = ({name, type, required}) => (
    <InputConsumer>{InputController => 
        <StyledInput
            name={name}
            type={type}
            value={InputController.values[name] || ''}
            onChange={InputController.onChange}
            required={required}
            />
    }
    </InputConsumer>
);

export default Input;