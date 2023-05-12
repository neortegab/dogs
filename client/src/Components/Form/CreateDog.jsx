import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from './FormComponents/FormInput'
import ActionButton from '../AuxButtons/ActionButton';
import '../Styles/CreateDog.css'

export default function CreateDog() {

    const temperamentNumber = 1;

  return (
    <div>
        <div className='create-dog-container'>
            <h1>Create your own good boy</h1>
            <FormInput label='Breed' name='breed' value='breed' placeholder='Breed name'/>
            <h3 className='create-dog-container-h3'>Height</h3>
            <FormInput label='Min' name='minHeight' value='minHeight' placeholder='Min height'/>
            <FormInput label='Max' name='maxHeight' value='maxHeight' placeholder='Max height'/>
            <h3>Weight</h3>
            <FormInput label='Min' name='minWeight' value='minWeight' placeholder='Min weight'/>
            <FormInput label='Max' name='maxWeight' value='maxWeight' placeholder='Max weight'/>
            <h3>Life span</h3>
            <FormInput label='Min' name='minLifeSpan' value='minLifeSpan' placeholder='Min life span'/>
            <FormInput label='Max' name='maxLifeSpan' value='maxLifeSpan' placeholder='Max life span'/>
            <h3>Temperaments</h3>
            <div className='form-temperaments-inputs'>
                <FormInput label={`Temperament ${temperamentNumber}`} name={`temperaments ${temperamentNumber}`} value={`temperaments ${temperamentNumber}`} placeholder={`temperaments ${temperamentNumber}`}/>
                <button>+</button>
            </div>
        </div>
        <div  className='form-buttons-container'>
            <ActionButton action='Create'/>
            <Link to='/home'> <ActionButton action='Cancel'/> </Link>
        </div>
    </div>
  )
}
