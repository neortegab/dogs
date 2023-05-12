import React from 'react'

export default function FormInput(props) {
    const { label, name, value, onChange, placeholder } = props;
  return (
    <div>
        <h3>{label}</h3>
        <input type='text' name={name} value={value} onChange={onChange} placeholder={placeholder}></input>
    </div>
  )
}
