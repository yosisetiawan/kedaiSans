import axios from 'axios'
import * as types from '../types'

export const getBill = (id) => ({
    type: types.GET_BILL,
    payload: axios({
        method: 'GET',
        url: `${'https://kedai-sans.herokuapp.com/api/v1/order/bill/' + id}`
    })
})