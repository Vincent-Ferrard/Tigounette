/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import NFC from '../Components/NFC';
import Tig from '../Components/Tig';
import Test from '../Components/Test';
import Web from '../Components/Web';

const TabNavigator = createBottomTabNavigator({
    Tig: NFC,
    BigTest: Tig,
    Historique: Test,
    Settings: Test,
    Web: Web,
});

export default createAppContainer(TabNavigator);