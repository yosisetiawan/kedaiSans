import {createStackNavigator, createAppContainer} from 'react-navigation';

import TableChoose from './../screens/Table';
import MenuList from './../screens/menu';
import Payment from '../screens/Payment';

const MainNavigator = createStackNavigator(
  {
    SelectTable: {
      screen: TableChoose,
    },
    menuList: {
      screen: MenuList,
    },
    payment: {
      screen: Payment,
    },
  },
  {
    initialRouteName: 'SelectTable',
    headerMode: 'none',
  },
);

const RootNavigation = createAppContainer(MainNavigator);

export default RootNavigation;
