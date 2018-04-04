import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Analytics from 'react-native-analytics-segment-io';

class Checkout extends Component {
  pushScreen = () => {
    this.props.navigator.push({
      screen: 'analytics.Confirmation',
      title: 'Confirmation'
    });
  };

  completeCheckoutStep = step => {
    Analytics.track('Checkout step completed', {
      step
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          title="Checkout step 1"
          onPress={() => this.completeCheckoutStep('Summary')}
        />
        <Button
          title="Checkout step 2"
          onPress={() => this.completeCheckoutStep('Billing')}
        />
        <Button
          title="Checkout step 3"
          onPress={() => this.completeCheckoutStep('Shipping')}
        />
        <Button title="Go to confirmation view" onPress={this.pushScreen} />
      </View>
    );
  }
}

export default Checkout;
