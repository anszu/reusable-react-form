import React from 'react'

const Button = (props) => (
    <button type="{props.type}">
        {props.value}
    </button>
);

export default Button;