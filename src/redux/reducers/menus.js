import * as types from './../types';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export default function menus(state = initialState, action) {
  switch (action.type) {
    case 'GET_MENUS':
      return {
        ...state,
        isLoading: true,
        status:0
      };
    case 'GET_MENUS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        status:1,
        data: action.payload.data,
      };
    case 'GET_MENUS_REJECTED':
      return {
        ...state,
        isLoading: false,
        error: payload.message,
      };
    default:
      return state;
  }
}
