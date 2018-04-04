import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Confirmation extends Component {
  pushScreen = () => {
    this.props.navigator.push({
      screen: 'analytics.ThankYou',
      title: 'Thank You'
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button title="Go to thank you view" onPress={this.pushScreen} />
      </View>
    );
  }
}

export default Confirmation;
