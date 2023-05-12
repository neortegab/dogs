import React from 'react'
import '../../Styles/FormInput.css'

export default function FormInput(props) {
    const { label, name, value, onChange, placeholder } = props;
  return (
    <div className='input-container'>
        <h3>{label}</h3>
        <input type='text' name={name} value={value} onChange={onChange} placeholder={placeholder}></input>
    </div>
  )
}
