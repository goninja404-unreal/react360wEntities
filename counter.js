import React from 'react';
import {
  Text,
  StyleSheet,
  VrButton,
  View
} from 'react-360';

export default class Counter extends React.Component {

  state = {
    count: 0,
  };

  // the increment method 
  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }
  // Once the component mounts, run the increment method every second
  componentDidMount() {
    setInterval(this._incrementCount, 1000);
  }

  render() {
    // Reference the count in our UI
    return (
      <View>
        <VrButton onClick={this._incrementCount}>
          <Text style={countStyle.greeting}>
            {`Count: ${this.state.count}`}
          </Text>
        </VrButton>
      </View>
    );
  }
}

const countStyle = StyleSheet.create({
  greeting: {
    fontSize: 30,
    backgroundColor: '#100101',
  },
});


AppRegistry.registerComponent('counter', () => Counter);
