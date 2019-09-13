import * as types from '../types'
import axios from 'axios'
import {API_POST_ORDER} from 'react-native-dotenv'

export const getOrders = (orders) => {
    return {
        type: types.GET_ORDERS,
        payload: orders
    }
}

export const addOrder = value => ({
    type : types.ADD_ORDER,
    payload: value
})

export const orderQty = data => ({
        type : types.ORDER_QTY,
        payload: data
})

export const postOrder = data => ({
    type : types.POST_ORDER,
    payload: axios.post('https://kedai-sans.herokuapp.com/api/v1/order', data)
})