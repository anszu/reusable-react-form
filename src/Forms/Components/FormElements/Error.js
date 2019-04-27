// Error component

import React from 'react'
import styled from '@emotion/styled'

const StyledError = styled.div`
    color: red;
`

const Error = (props) => (
    <StyledError>{props.error}</StyledError>
);

export default Error;