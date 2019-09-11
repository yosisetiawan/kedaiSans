import * as types from '../types'

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

export default function bill(state= initialState, action){
    switch (action.type){
        case 'GET_BILL':
            return{
             ...state,
             isLoading: true   
            };
        case 'GET_BILL_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            };
        case 'GET_BILL_REJECTED':
            return {
                ...state,
                isLoading: false,
                data: payload.message
            };
            default:
                return state;
    }
}