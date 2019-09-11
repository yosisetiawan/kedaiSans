import axios from 'axios';
import * as types from './../types';
import {API_GET_MENU} from 'react-native-dotenv';

export const getMenus = () => ({
  type: types.GET_MENUS,
  payload: axios({
    method: 'GET',
    url: 'http://192.168.0.16:3000/api/v1/menus',
  }),
});