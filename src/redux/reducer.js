import axios from 'axios';

const initialState = {
    user: {},
    vehicle: [],
    vehicles: []
};

// action types
const GET_USER_INFO = 'GET_USER_INFO';
const ADD_VEHICLE = 'ADD_VEHICLE';
const GET_VEHICLES = 'GET_VEHICLES';
const GET_VEHICLE = 'GET_VEHICLE';


// action creators
export function getUserInfo() {
    const user = axios.get('/auth/me').then(res => res.data)
    return {
        type: GET_USER_INFO,
        payload: user
    }
}

export function addVehicle(object, callback) {
    const newVehicle = axios.post('/api/collections', object).then(() => callback());
    return {
        type: ADD_VEHICLE,
        payload: newVehicle
    }
}

export function getVehicles() {
    const vehicles = axios.get('/api/collections').then(res => res)
    return {
        type: GET_VEHICLES,
        payload: vehicles
    }
}

export function getVehicle(vehicleId) {
    const vehicle = axios.get(`/api/vehicle/${vehicleId}`).then(res => res)
    return {
        type: GET_VEHICLE,
        payload: vehicle
    }
}


// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_USER_INFO + '_PENDING':
            return state;
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case GET_USER_INFO + '_REJECTED':
            return state;

        case GET_VEHICLES + '_PENDING':
            return state;
        case GET_VEHICLES + '_FULFILLED':
            return Object.assign({}, state, { vehicles: action.payload.data });
        case GET_VEHICLES + '_REJECTED':
            return state;

        case GET_VEHICLE + '_PENDING':
            return state;
        case GET_VEHICLE + '_FULFILLED':
            return Object.assign({}, state, { vehicle: action.payload.data });
        case GET_VEHICLE + '_REJECTED':
            return state;

        default:
            return state;
    }
}