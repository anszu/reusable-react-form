import React from 'react'

const Label = (props) => (
    <label htmlFor={props.for}>{props.label}</label>
);

export default Label;