/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './src/screens/Splash'
import {name as appName} from './app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
