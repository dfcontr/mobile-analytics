/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens, registerScreenVisibilityListener } from './screens';

// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

const tabs = [
  {
    label: 'Home',
    screen: 'analytics.Home',
    icon: require('../assets/images/one.png'),
    title: 'Home'
  }
  /*{
    label: 'CategoriesLabel',
    screen: 'analytics.Categories',
    title: 'Categories'
  }
  {
    label: 'PDPLabel',
    screen: 'analytics.PDP',
    title: 'Product Detail'
  },
  {
    label: 'CartLabel',
    screen: 'analytics.Cart',
    title: 'Cart'
  }*/
];

Navigation.startSingleScreenApp({
  screen: {
    screen: 'analytics.Login',
    title: 'Login'
  }
});

export function enableSignedInFlow() {
  Navigation.startTabBasedApp({
    tabs,
    animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade'
  });
}

console.disableYellowBox = true;
