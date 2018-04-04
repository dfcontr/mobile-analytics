import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  pushScreen = () => {
    this.props.navigator.push({
      screen: 'analytics.Categories',
      title: 'Categories'
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button title="Go to categories view" onPress={this.pushScreen} />
      </View>
    );
  }
}

export default Home;
