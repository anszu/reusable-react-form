import React from 'react'
import Input from '../FormElements/Input'
import Error from '../FormElements/Error'
import Label from '../FormElements/Label'

const InputFieldDefault = (props) => (
    <div>
      { props.label && <Label label={props.label} for={props.name}/> }
      <Input 
        name={props.name}
        type={props.type}
        required={props.reqired}/>
      { props.error && <Error error={props.error}/> }
    </div>
);

export default InputFieldDefault;