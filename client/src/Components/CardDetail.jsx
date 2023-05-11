import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDog } from '../redux/actions/actions'
import { useParams } from 'react-router-dom'

export default function CardDetail() {

  const { id } = useParams();

  const dispatch = useDispatch();

  const { allDogs, detailDog } = useSelector(state => state); 

  const [dog, setDog] = useState({});

  useEffect(() => {
    dispatch(getDog(id));
    setDog(detailDog);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const obtainDogImage = (imageId) => {
    const dogWithImage = allDogs.find(dog => dog.image.id === imageId);
    return dogWithImage?.image.url;
  }

  return (
    <div>
      {
        dog &&
        <div>
          <div>
            <p>{dog?.id}</p>
          </div>
          <div>
            <h1>Breed: { dog?.name }</h1>
            <h3>Height: { dog?.height?.metric || dog?.height }</h3>
            <h3>Weight: { dog?.weight?.metric || dog?.weight }</h3>
            <h3>Life span: { dog?.life_span }</h3>
            <h2>Temperaments: <br/> { dog?.temperament } </h2>
          </div>
          <div>
            <img src={obtainDogImage(dog?.reference_image_id)} alt={dog?.name}/>
          </div>
        </div> 
      }
    </div>
  )
}
