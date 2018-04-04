import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import Analytics from 'react-native-analytics-segment-io';
import { enableSignedInFlow } from '../App';

class Login extends Component {
  state = {
    name: ''
  };

  signIn = () => {
    const name = this.state.name;
    Analytics.identify(name, { name });
    enableSignedInFlow();
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          placeholder="Enter name"
        />
        <Button title="Sign In" onPress={this.signIn} />
      </View>
    );
  }
}

export default Login;
