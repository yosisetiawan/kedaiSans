import * as types from '../types'

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