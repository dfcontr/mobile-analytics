import React, { Component } from 'react';
import { View, Button } from 'react-native';

class Categories extends Component {
  pushScreen = product => {
    this.props.navigator.push({
      screen: 'analytics.ProductDetail',
      title: `Product ${product} Detail`,
      passProps: {
        product: { name: `Product ${product} Detail`, cost: product * 10 }
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <Button
          title="Go to product 1 detail view"
          onPress={() => this.pushScreen(1)}
        />
        <Button
          title="Go to product 2 detail view"
          onPress={() => this.pushScreen(2)}
        />
        <Button
          title="Go to product 3 detail view"
          onPress={() => this.pushScreen(3)}
        />
        <Button
          title="Go to product 4 detail view"
          onPress={() => this.pushScreen(4)}
        />
      </View>
    );
  }
}

export default Categories;
