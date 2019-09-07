import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import {createReduxContainer} from 'react-navigation-redux-helpers';

import RootNavigation from './src/navigation/RootNavigation';
import {store} from './src/redux/store';

const appNav = createReduxContainer(RootNavigation, 'root');

const mapStateToProps = state => ({
  state: state.router,
});

const AppWithNavigationState = connect(mapStateToProps)(appNav);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
