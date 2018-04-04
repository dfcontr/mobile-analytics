import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ThankYou extends Component {
  pop = () => {
    this.props.navigator.popToRoot({
      animated: true
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button title="Go to home view" onPress={this.pop} />
      </View>
    );
  }
}

export default ThankYou;
