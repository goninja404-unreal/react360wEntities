import React, { PureComponent } from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class Boy extends PureComponent {
render() {
return (
<Entity
source={{
obj: asset('boy/boy.obj'),
}}
style={{transform:[
{translate: [-10, 0, -5]},
{scaleX: 0.02 },
{ scaleY: 0.02 },
{ scaleZ: 0.02 },
]}}
/>
);
}
}