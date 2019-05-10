// Error component

import React from 'react'
import styled from '@emotion/styled'
import { InputConsumer } from "../../Context/InputContext";

const StyledError = styled.div`
    color: red;
`

const Error = (props) => (
    <InputConsumer>{InputController => 
        <StyledError>{InputController.errors[props.error]}</StyledError>
    }
    </InputConsumer>
);

export default Error;