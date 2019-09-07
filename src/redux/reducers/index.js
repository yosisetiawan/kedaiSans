import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';

import RootNavigation from './../../navigation/RootNavigation';
import menus from './menus';

const router = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  router,
  menus,
});

export default appReducer;
