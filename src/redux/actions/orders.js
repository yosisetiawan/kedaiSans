import * as types from '../types'
import axios from 'axios'

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
    payload: axios.post('http://192.168.0.16:3000/api/v1/order', data)
})