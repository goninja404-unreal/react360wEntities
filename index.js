import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  asset,
  View
} from 'react-360';
import Entity from 'Entity';
import ModelOne from './modelOne';
import Sphere from './sphere';


export default class hello360 extends React.Component {
  render() {
    return (
      <Entity source={{ 
        obj: asset('boy/boy.obj'),
        mtl: asset('boy/boy.mtl')
      }} />
    );
  }
};

export class hey360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            welcome
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 300,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('hello360', () => hello360);
AppRegistry.registerComponent('hey360', () => hey360);
AppRegistry.registerComponent('ModelOne', () => ModelOne);
AppRegistry.registerComponent('Sphere', () => Sphere);
