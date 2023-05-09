import { GET_DOGS, ADD_DOG, REMOVE_DOG, FILTER_DOGS, CLEAR_FILTER, SORT_DOGS, ORDER_DOGS_NAME, ORDER_DOGS_WEIGHT } from '../actions/types';

const ASCENDANT = 'ascendant';

const initialState = {
    allDogs: [],
    filteredDogs: [],
    sortedDogs: [],
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

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_DOGS:
            return { ...state, allDogs: payload };
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
                return { ...state, sortedDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsAscendant(a,b, 'name')) };
            else
                return { ...state, sortedDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsDescendant(a,b, 'name')) }  
        case ORDER_DOGS_WEIGHT:
            if(payload === ASCENDANT)
                return { ...state, sortedDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsAscendant(a, b, 'weight')) };
            else
                return { ...state, sortedDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsDescendant(a, b, 'weight')) }
        default:
            return state;
    }
}