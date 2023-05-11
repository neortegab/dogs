import { GET_DOGS,
    GET_DOG_BY_NAME, 
    ADD_DOG, 
    REMOVE_DOG, 
    FILTER_DOGS, 
    CLEAR_FILTER, 
    ORDER_DOGS_NAME, 
    ORDER_DOGS_WEIGHT,
    GET_TEMPERAMENTS,
    ADD_TEMPERAMENT,
    REMOVE_TEMPERAMENT,
    ORDER_TEMPERAMENTS
 } from '../actions/types';

const ASCENDANT = 'ascendant';

const initialState = {
    allDogs: [],
    filteredDogs: [],
    temperaments: [],
    pageNumberDogs: 1,
    pageNumberTemperaments: 1
};

const compareDogsStringsAscendant = (a, b, value) => {
    if (a[value].at(0) > b[value].at(0)) return 1;
    if (a[value].at(0) < b[value].at(0)) return -1;
    return 0;
}

const compareDogsStringsDescendant = (a, b, value) => {
    if (a[value].at(0) > b[value].at(0)) return -1;
    if (a[value].at(0) < b[value].at(0)) return 1;
    return 0;
}

const compareTemperamentsAscendent = (a, b) => {
    if (a.name.at(0) > b.name.at(0)) return 1;
    if (a.name.at(0) < b.name.at(0)) return -1;
    return 0;
}

const compareTemperamentsDescendent = (a, b) => {
    if (a.name.at(0) > b.name.at(0)) return -1;
    if (a.name.at(0) < b.name.at(0)) return 1;
    return 0;
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_DOGS:
            return { ...state, allDogs: payload, filteredDogs: payload };
        case GET_DOG_BY_NAME:
            return { ...state, filteredDogs: state.filteredDogs.filter(dog => dog.name === payload.name) };
        case ADD_DOG:
            return { ...state, allDogs: [...state.allDogs, payload] };
        case REMOVE_DOG:
            return { ...state, allDogs: state.allDogs.filter(dog => dog.id !== payload) };
        case FILTER_DOGS:
            return { ...state, filteredDogs: state.allDogs.filter(dog => dog.name.toLowerCase().includes(payload.toLowerCase())) };
        case CLEAR_FILTER:
            return { ...state, filteredDogs: [...state.allDogs] };
        case ORDER_DOGS_NAME:
            if(payload === ASCENDANT)
                return { ...state, filteredDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsAscendant(a,b, 'name')) };
            else
                return { ...state, filtereddDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsDescendant(a,b, 'name')) }  
        case ORDER_DOGS_WEIGHT:
            if(payload === ASCENDANT)
                return { ...state, filteredDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsAscendant(a, b, 'weight')) };
            else
                return { ...state, filteredDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsDescendant(a, b, 'weight')) }
        case GET_TEMPERAMENTS:
            return { ...state, temperaments: payload };
        case ADD_TEMPERAMENT:
            return { ...state, temperaments: [...state.temperaments, payload] };
        case REMOVE_TEMPERAMENT:
            return { ...state, temperaments: state.temperaments.filter(temperament => temperament.id !== payload) };
        case ORDER_TEMPERAMENTS:
            if(payload === ASCENDANT)
                return { ...state, temperaments: [...state.temperaments].sort((a,b) => compareTemperamentsAscendent(a,b)) };
            else
                return { ...state, temperaments: [...state.temperaments].sort((a,b) => compareTemperamentsDescendent(a,b)) }
        default:
            return state;
    }
}