/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import Home from '../Components/Home';

const MainNavigator = createDrawerNavigator({
  Home: {
        navigationOptions: {
            drawerLabel: "Home"
        },
        screen: Home,
    },
});

export default createAppContainer(MainNavigator);