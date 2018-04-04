import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import Analytics from 'react-native-analytics-segment-io';

import Home from './Home';
import Categories from './Categories';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import ThankYou from './ThankYou';
import Login from './Login';

export function registerScreens() {
  Navigation.registerComponent('analytics.Login', () => Login);
  Navigation.registerComponent('analytics.Home', () => Home);
  Navigation.registerComponent('analytics.Categories', () => Categories);
  Navigation.registerComponent('analytics.ProductDetail', () => ProductDetail);
  Navigation.registerComponent('analytics.Cart', () => Cart);
  Navigation.registerComponent('analytics.Checkout', () => Checkout);
  Navigation.registerComponent('analytics.Confirmation', () => Confirmation);
  Navigation.registerComponent('analytics.ThankYou', () => ThankYou);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen }) => Analytics.track(`Screen ${screen} displayed`),
    willDisappear: ({ screen }) =>
      console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
