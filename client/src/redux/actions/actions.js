import { GET_DOGS, ADD_DOG, REMOVE_DOG, FILTER_DOGS, CLEAR_FILTER, ORDER_DOGS_NAME, ORDER_DOGS_WEIGHT } from './types'

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