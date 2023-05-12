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
    ORDER_TEMPERAMENTS,
    FILTER_DOGS_BY_TEMPERAMENTS
 } from '../actions/types';

const ASCENDANT = 'ascendant';

const initialState = {
    allDogs: [],
    filteredDogs: [],
    allTemperaments: [],
    temperaments: [],
    pageNumberDogs: 1,
    pageNumberTemperaments: 1
};

const compareDogsStringsAscendant = (a, b, value) => {
    let stringA = '';
    let stringB = '';
    if(value === 'weight'){
        stringA = a[value]?.metric.split('-')[0].trim() || a[value].split('-')[0].trim();
        stringB = b[value]?.metric.split('-')[0].trim() || b[value].split('-')[0].trim();
        stringA = parseInt(stringA);
        stringB = parseInt(stringB);
    }
    if(value === 'name'){
        stringA = a[value].at(0);
        stringB = b[value].at(0);
    }
    if (stringA > stringB) return 1;
    if (stringA < stringB) return -1;
    return 0;
}

const compareDogsStringsDescendant = (a, b, value) => {
    let stringA = '';
    let stringB = '';
    if(value === 'weight'){
        stringA = a[value]?.metric.split('-')[0].trim() || a[value].split('-')[0].trim();
        stringB = b[value]?.metric.split('-')[0].trim() || b[value].split('-')[0].trim();
        stringA = parseInt(stringA);
        stringB = parseInt(stringB);
    }
    if(value === 'name'){
        stringA = a[value].at(0);
        stringB = b[value].at(0);
    }
    if (stringA > stringB) return -1;
    if (stringA < stringB) return 1;
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

const filterDogsByTemperament = (dogs, temperaments) => {
    let filteredDogs = [];
    dogs.forEach(dog => {
        let dogTemperaments = dog?.temperament?.split(',');
        dogTemperaments = dogTemperaments?.map(dogTemp => dogTemp.trim());
        temperaments.forEach(temp => {
            if(dogTemperaments?.includes(temp) && !filteredDogs.includes(dog))
                filteredDogs.push(dog);
        });
    });
    return filteredDogs;
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_DOGS:
            return { ...state, allDogs: payload, filteredDogs: payload };
        case GET_DOG_BY_NAME:
            return { ...state, filteredDogs: [...state.allDogs].filter(dog => dog.name === payload.name) };
        case ADD_DOG:
            return { ...state, allDogs: [...state.allDogs, payload] };
        case REMOVE_DOG:
            return { ...state, allDogs: state.allDogs.filter(dog => dog.id !== payload) };
        case FILTER_DOGS:
            return { ...state, filteredDogs: state.allDogs.filter(dog => dog.name.toLowerCase().includes(payload.toLowerCase())) };
        case FILTER_DOGS_BY_TEMPERAMENTS:
            return { ...state, filteredDogs: filterDogsByTemperament(state.allDogs, payload) };
        case CLEAR_FILTER:
            return { ...state, filteredDogs: [...state.allDogs], temperaments: [...state.allTemperaments] };
        case ORDER_DOGS_NAME:
            if(payload === ASCENDANT)
                return { ...state, filteredDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsAscendant(a,b, 'name')) };
            else
                return { ...state, filteredDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsDescendant(a,b, 'name')) }  
        case ORDER_DOGS_WEIGHT:
            if(payload === ASCENDANT)
                return { ...state, filteredDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsAscendant(a, b, 'weight')) };
            else
                return { ...state, filteredDogs: [...state.filteredDogs].sort((a,b) => compareDogsStringsDescendant(a, b, 'weight')) }
        case GET_TEMPERAMENTS:
            return { ...state, allTemperaments: payload, temperaments: payload };
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