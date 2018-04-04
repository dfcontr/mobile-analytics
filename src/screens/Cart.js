import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Cart extends Component {
  pushScreen = () => {
    this.props.navigator.push({
      screen: 'analytics.Checkout',
      title: 'Checkout'
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button title="Go to checkout view" onPress={this.pushScreen} />
      </View>
    );
  }
}

export default Cart;
