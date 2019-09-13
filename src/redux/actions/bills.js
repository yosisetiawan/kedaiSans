import axios from 'axios'
import * as types from '../types'
import {API_GET_BILL} from 'react-native-dotenv'

export const getBill = (id) => ({
    type: types.GET_BILL,
    payload: axios({
        method: 'GET',
        url: `${'http://192.168.0.28:8080/api/v1/order/bill/' + id}`
    })
})