import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from './FormComponents/FormInput'
import ActionButton from '../AuxButtons/ActionButton';

export default function CreateDog() {

    const temperamentNumber = 1;

  return (
    <div>
        <h1>Create your own good boy</h1>

        <div>
            <FormInput label='Breed' name='breed' value='breed' placeholder='Breed name'/>
            <h2>Height</h2>
            <FormInput label='Min' name='minHeight' value='minHeight' placeholder='Min height'/>
            <FormInput label='Max' name='maxHeight' value='maxHeight' placeholder='Max height'/>
            <h2>Weight</h2>
            <FormInput label='Min' name='minWeight' value='minWeight' placeholder='Min weight'/>
            <FormInput label='Max' name='maxWeight' value='maxWeight' placeholder='Max weight'/>
            <h2>Life span</h2>
            <FormInput label='Min' name='minLifeSpan' value='minLifeSpan' placeholder='Min life span'/>
            <FormInput label='Max' name='maxLifeSpan' value='maxLifeSpan' placeholder='Max life span'/>
            <h2>Temperaments</h2>
            <FormInput label={`Temperament ${temperamentNumber}`} name={`temperaments ${temperamentNumber}`} value={`temperaments ${temperamentNumber}`} placeholder={`temperaments ${temperamentNumber}`}/>
            <button>+</button>
        </div>

        <ActionButton action='Create'/>
        <Link to='/home'> <ActionButton action='Cancel'/> </Link>
    </div>
  )
}
