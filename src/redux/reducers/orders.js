import * as types from './../types';

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

export default function orders(state = initialState, action){
    switch(action.type){
        case types.GET_ORDERS:
            console.log(action.payload)
            return {
                data: action.payload
            };
        case types.ADD_ORDER:
            console.log(action.payload)
            return{
                ...state,
                data: [...state.data, action.payload]
            };
        case types.ORDER_QTY:
            return {
                data: action.payload
            }        
            default:
                return state;
    }
}