import axios from 'axios'
import * as types from '../types'

export const getBill = (id) => ({
    type: types.GET_BILL,
    payload: axios({
        method: 'GET',
        url: `${'http://192.168.0.16:3000/api/v1/order/bill/' + id}`
    })
})