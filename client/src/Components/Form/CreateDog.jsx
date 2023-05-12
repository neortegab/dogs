import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormComponents/FormInput";
import ErrorLabel from "./FormComponents/ErrorLabel";
import ActionButton from "../AuxButtons/ActionButton";
import validation from "../../utils/createDogValidation";
import "../Styles/CreateDog.css";

export default function CreateDog() {
  const [dog, setDog] = useState({
    breed: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifeSpan: "",
    maxLifeSpan: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState(validation(dog));

  const [temperaments, setTemperaments] = useState([1]);

  useEffect(() => {}, [temperaments]);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setErrors(
      validation({
        ...dog,
        [inputName]: inputValue,
      })
    );
    setDog({
      ...dog,
      [inputName]: inputValue,
    });
  };

  const addTemperament = () => {
    setTemperaments([...temperaments, temperaments.length + 1]);
  };

  return (
    <div>
      <div className="create-dog-container">
        <h1>Create your own good boy</h1>
        <FormInput
          label="Breed"
          name="breed"
          value={dog.breed}
          placeholder="Breed name"
          onChange={handleChange}
        />
        {errors.breed && <ErrorLabel error={errors.breed} />}
        <h3 className="create-dog-container-h3">Height</h3>
        <FormInput
          label="Min"
          name="minHeight"
          value={dog.minHeight}
          placeholder="1"
          onChange={handleChange}
        />
        {errors.minHeight && <ErrorLabel error={errors.minHeight} />}
        <FormInput
          label="Max"
          name="maxHeight"
          value={dog.maxHeight}
          placeholder="99"
          onChange={handleChange}
        />
        {errors.maxHeight && <ErrorLabel error={errors.maxHeight} />}
        <h3>Weight</h3>
        <FormInput
          label="Min"
          name="minWeight"
          value={dog.minWeight}
          placeholder="1"
          onChange={handleChange}
        />
        {errors.minWeight && <ErrorLabel error={errors.minWeight} />}
        <FormInput
          label="Max"
          name="maxWeight"
          value={dog.maxWeight}
          placeholder="9"
          onChange={handleChange}
        />
        {errors.maxWeight && <ErrorLabel error={errors.maxWeight} />}
        <h3>Life span</h3>
        <FormInput
          label="Min"
          name="minLifeSpan"
          value={dog.minLifeSpan}
          placeholder="1"
          onChange={handleChange}
        />
        {errors.minLifeSpan && <ErrorLabel error={errors.minLifeSpan} />}
        <FormInput
          label="Max"
          name="maxLifeSpan"
          value={dog.maxLifeSpan}
          placeholder="9"
          onChange={handleChange}
        />
        {errors.maxLifeSpan && <ErrorLabel error={errors.maxLifeSpan} />}
        <h3>Temperaments</h3>
        <div className="form-temperaments-inputs">
          {errors.temperaments && <ErrorLabel error={errors.temperaments} />}
          <FormInput
            label={`Temperament ${temperaments[0]}`}
            name={`temperaments ${temperaments[0]}`}
            value={dog.temperaments[0]}
            placeholder={`temperaments ${temperaments[0]}`}
            onChange={handleChange}
          />

          {temperaments.length > 1 &&
            temperaments.map((temperamentNumber, index) =>
                temperamentNumber !== 1 &&
              <FormInput
                key={index}
                label={`Temperament ${temperamentNumber}`}
                name={`temperaments ${temperamentNumber}`}
                value={`temperaments ${temperamentNumber}`}
                placeholder={`temperaments ${temperamentNumber}`}
                onChange={handleChange}
              />
            )
        }
          <button onClick={addTemperament}>+</button>
        </div>
      </div>
      <div className="form-buttons-container">
        {!errors && <ActionButton action="Create" />}
        <Link to="/home">
          <ActionButton action="Cancel" />
        </Link>
      </div>
    </div>
  );
}
