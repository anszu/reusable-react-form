import React from 'react'
import { InputConsumer } from "../../Context/InputContext";

const Input = (props) => (
    <InputConsumer>{InputController => 
        <input
            name={props.name}
            type={props.type}
            value={InputController.values[props.name]}
            onChange={InputController.onChange}
            />
    }
    </InputConsumer>
);

export default Input;