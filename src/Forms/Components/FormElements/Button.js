// Button component

import React from 'react'
import styled from '@emotion/styled'

const StyledButton = styled.button`
    background-color: hotpink;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 0.5rem; 
`
const Button = ({value}) => (
    <StyledButton type="submit">
        {value}
    </StyledButton>
);

export default Button;