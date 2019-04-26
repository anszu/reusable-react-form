import React from 'react'
import styled from '@emotion/styled'
import { InputConsumer } from "../../Context/InputContext";

const StyledInput = styled.input`
    display: block;
    padding: .25rem .25rem;
    font-size: 1rem;
    border: 1px solid #ced4da;
    border-radius: .25rem;
`
const Input = (props) => (
    <InputConsumer>{InputController => 
        <StyledInput
            name={props.name}
            type={props.type}
            value={InputController.values[props.name]}
            onChange={InputController.onChange}
            />
    }
    </InputConsumer>
);

export default Input;