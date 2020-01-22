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


export default class table extends React.Component {
  render() {
    return (
      <Entity source={{ 
        obj: asset('table/table.obj'),
        mtl: asset('table/table.mtl')
      }}
      style={{transform:[
        {translate: [-3, -3.5, -1]},
        { scaleX: 1.4 },
        { scaleY: 1.4 },
        { scaleZ: 1.4 },
        { rotateX: Math.PI * 2 },
        { rotateY: 1.5 },
        { rotateZ: 1.5 },
        ]}}
         />
    );
  }
};


export  class boy1 extends React.Component {
  render() {
    return (
      <Entity source={{ 
        obj: asset('boy/boy.obj'),
        mtl: asset('boy/boy.mtl')
      }}
      style={{transform:[
        {translate: [-9.5, -5, -8.5]},
        { scaleX: 1.8 },
        { scaleY: 1.8 },
        { scaleZ: 1.8 },
        ]}}
         />
    );
  }
};


export class boy2 extends React.Component {
  render() {
    return (
      <Entity source={{ 
        obj: asset('boy/boy.obj'),
        mtl: asset('boy/boy.mtl')
      }}
      style={{transform:[
        {translate: [-5.5, -5, -8.5]},
        { scaleX: 1.6 },
        { scaleY: 1.6 },
        { scaleZ: 1.6 },
        ]}}
         />
    );
  }
};

export class boy3 extends React.Component {
  render() {
    return (
      <Entity source={{ 
        obj: asset('boy/boy.obj'),
        mtl: asset('boy/boy.mtl')
      }}
      style={{transform:[
        {translate: [-1.5, -5, -8.5]},
        { scaleX: 1.4 },
        { scaleY: 1.4 },
        { scaleZ: 1.4 },
        ]}}
         />
    );
  }
};



export class boy4 extends React.Component {
  render() {
    return (
      <Entity source={{ 
        obj: asset('boy/boy.obj'),
        mtl: asset('boy/boy.mtl')
      }}
      style={{transform:[
        {translate: [3.5, -5, -8.5]},
        { scaleX: 1.3 },
        { scaleY: 1.3 },
        { scaleZ: 1.3 },
        ]}}
         />
    );
  }
};
/*

const { AudioModule } = NativeModules;

const player = r360.compositor.createVideoPlayer('myplayer');


export default class Info extends PureComponent {
  handleClick = () => {
    Environment.setBackground(
      asset('others/image.jpg'),
      {format: '2D'}, 
    );
     player.setSource('path/to/video.mp4', '2D');

    AudioModule.playOneShot({
      source: asset('ray-gun.wav'),
    });
  };
}
*/

export class hey360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            this is a great welcome
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

AppRegistry.registerComponent('table', () => table);

AppRegistry.registerComponent('boy1', () => boy1);
AppRegistry.registerComponent('boy2', () => boy2);
AppRegistry.registerComponent('boy3', () => boy3);
AppRegistry.registerComponent('boy4', () => boy4);
AppRegistry.registerComponent('hey360', () => hey360);
AppRegistry.registerComponent('ModelOne', () => ModelOne);
AppRegistry.registerComponent('Sphere', () => Sphere);
