import React from 'react'
import styled from '@emotion/styled'

const StyledButton = styled.button`
    color: white;
    cursor: pointer;
    background-color: hotpink;
    border: 1px solid transparent;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    border-radius: .25rem;
`
const Button = (props) => (
    <StyledButton type="submit">
        {props.value}
    </StyledButton>
);

export default Button;