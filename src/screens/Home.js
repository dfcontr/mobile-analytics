import React, { Component } from 'react';
import { View, Button } from 'react-native';

class Home extends Component {
  state = {
    name: ''
  };

  pushScreen = () => {
    this.props.navigator.push({
      screen: 'analytics.Categories',
      title: 'Categories'
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Go to categories view" onPress={this.pushScreen} />
      </View>
    );
  }
}

export default Home;
