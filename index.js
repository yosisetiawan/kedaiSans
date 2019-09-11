/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Table from './src/screens/Table'
import {name as appName} from './app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
