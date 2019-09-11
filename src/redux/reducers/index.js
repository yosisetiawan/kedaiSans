import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';

import RootNavigation from './../../navigation/RootNavigation';
import menus from './menus';
import orders from './orders'
import bills from './bills'

const router = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  router,
  menus,
  bills,
  orders,
});

export default appReducer;
