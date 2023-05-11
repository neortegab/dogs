import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Styles/CardDetail.css'

export default function CardDetail() {

  const { id } = useParams();

  const { allDogs } = useSelector(state => state); 

  const [dog, setDog] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/dogs/${id}`).then((response)=>
      setDog(response.data)
    ).catch((error) => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const obtainDogImage = (imageId) => {
    const dogWithImage = allDogs.find(dog => dog.image.id === imageId);
    return dogWithImage?.image.url;
  }

  return (
    <div className='detail-container'>
      {
        dog &&
        <div className='detail-dog-container'>
          <div className='detail-text-container'>
            <p className='detail-dog-id'>{dog?.id}</p>
            <h1>Breed: { dog?.name }</h1>
            <h3>Height: </h3>
            <p>{ dog?.height?.metric || dog?.height } cm</p>
            <h3>Weight: </h3>
            <p>{ dog?.weight?.metric || dog?.weight } kg</p>
            <h3>Life span: </h3>
            <p>{ dog?.life_span }</p>
            <h2>Temperaments: </h2>
            <p> { dog?.temperament } </p>
          </div>
          <div>
            <img className='detail-img' src={obtainDogImage(dog?.reference_image_id)} alt={dog?.name}/>
          </div>
        </div> 
      }
    </div>
  )
}
