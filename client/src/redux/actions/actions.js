import { GET_DOGS,
    GET_DOG_BY_NAME, 
    ADD_DOG, 
    REMOVE_DOG, 
    FILTER_DOGS,
    FILTER_DOGS_BY_TEMPERAMENTS, 
    CLEAR_FILTER, 
    ORDER_DOGS_NAME, 
    ORDER_DOGS_WEIGHT,
    GET_TEMPERAMENTS,
    ADD_TEMPERAMENT,
    REMOVE_TEMPERAMENT,
    ORDER_TEMPERAMENTS } from './types'

import axios from 'axios';

export const getDogs = () => async dispatch => {
    try {
        const { data } = await axios.get('http://localhost:3001/dogs');
        return dispatch({
            type: GET_DOGS,
            payload: data
        })
    } catch (error) {
        return dispatch({
            type: GET_DOGS,
            payload: error
        })
    }
}

export const getDogByName = (name) => async dispatch => {
    try {
        const { data } = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        return dispatch({
            type: GET_DOG_BY_NAME,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const addDog = (dog) => async dispatch => {
    try {
        const { data } = await axios.post('http://localhost:3001/dogs', dog);
        return dispatch({
            type: ADD_DOG,
            payload: data
        })
    } catch (error) {
        return dispatch({
            type: ADD_DOG,
            payload: error
        })
    }
}

export const removeDog = (id) => async dispatch => {
    try {
        await axios.delete(`http://localhost:3001/dogs/${id}`);
        return dispatch({
            type: REMOVE_DOG,
            payload: id
        })
    } catch (error) {
        return dispatch({
            type: REMOVE_DOG,
            payload: error
        })
    }
}

export const filterDogs = (text) => dispatch => {
    return dispatch({
        type: FILTER_DOGS,
        payload: text
    })
}

export const filterDogsByTemperaments = (temperaments) => dispatch => {
    return dispatch({
        type: FILTER_DOGS_BY_TEMPERAMENTS,
        payload: temperaments
    })
}

export const clearFilter = () => dispatch => {
    return dispatch({
        type: CLEAR_FILTER
    })
}

export const orderDogsName = (order) => dispatch => {
    return dispatch({
        type: ORDER_DOGS_NAME,
        payload: order
    })
    
}
export const orderDogsWeight = (order) => dispatch => {
    return dispatch({
        type: ORDER_DOGS_WEIGHT,
        payload: order
    })
}

export const getTemperaments = () => async dispatch => {
    try {
        const {data} = await axios.get('http://localhost:3001/temperaments')
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: data
        })   
    } catch (error) {
        console.log(error);
    }
}

export const addTemperament = (temperament) => async dispatch => {
    try {
        const {data} = await axios.post('http://localhost:3001/temperaments', temperament)
        return dispatch({
            type: ADD_TEMPERAMENT,
            payload: data
        })   
    } catch (error) {
        console.log(error);
    }
}

export const removeTemperament = (id) => async dispatch => {
    try {
        await axios.delete(`http://localhost:3001/temperaments/${id}`)
        return dispatch({
            type: REMOVE_TEMPERAMENT,
            payload: id
        })   
    } catch (error) {
        console.log(error);
    }
}

export const orderTemperaments = (order) => dispatch => {
    return dispatch({
        type: ORDER_TEMPERAMENTS,
        payload: order
    })
}