import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Analytics from 'react-native-analytics-segment-io';

class ProductDetail extends Component {
  componentDidMount() {
    Analytics.track('Product screen displayed', {
      productName: `${this.props.product.name}`,
      productCost: this.props.product.cost
    });
  }

  pushScreen = () => {
    this.props.navigator.push({
      screen: 'analytics.Cart',
      title: 'Cart'
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cost: {this.props.product.cost}</Text>
        <Button title="Go to cart view" onPress={this.pushScreen} />
      </View>
    );
  }
}

export default ProductDetail;
