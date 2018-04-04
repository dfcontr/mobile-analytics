import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Checkout extends Component {
  pushScreen = () => {
    this.props.navigator.push({
      screen: 'analytics.Confirmation',
      title: 'Confirmation'
    });
  };

  completeCheckoutStep = step => {
    //
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          title="Checkout step 1"
          onPress={() => this.completeCheckoutStep(1)}
        />
        <Button
          title="Checkout step 2"
          onPress={() => this.completeCheckoutStep(2)}
        />
        <Button
          title="Checkout step 3"
          onPress={() => this.completeCheckoutStep(3)}
        />
        <Button title="Go to confirmation view" onPress={this.pushScreen} />
      </View>
    );
  }
}

export default Checkout;
