import React, { PureComponent } from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';



export default class ModelOne extends PureComponent {
  render() {
    return (
      <Entity
        source={{
          obj: asset('boy/boy.obj'),
          mtl: asset('boy/boy.mtl'),
        }}
        style={{
          transform: [
            { translate: [-10, 0, -10] },
            { scaleX: 0.02 },
            { scaleY: 0.02 },
            { scaleZ: 0.02 },
          ]
        }}
      />
    );
  }
}
