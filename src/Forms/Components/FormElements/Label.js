// Label component

import React from 'react'

const Label = ({forInput, label}) => (
    <label htmlFor={forInput}>{label}</label>
);

export default Label;