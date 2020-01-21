// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {

  const SIZE = 150;

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

   const location0 = r360.getDefaultLocation();

  // Render your app content to the default cylinder surface


  r360.renderToSurface(
    r360.createRoot('hey360', { /* initial props surface*/ }),
    r360.getDefaultSurface()
  );


//r360.detachRoot(location0);

table= r360.renderToLocation(
  r360.createRoot('table', { /* initial props boy1 */ }),
  location0
    );

    myboy1= r360.renderToLocation(
      r360.createRoot('boy1', { /* initial props boy1 */ }),
      location0
        );

    myboy2= r360.renderToLocation(
  r360.createRoot('boy2', { /* 
     style={{transform:[
    {translate: [-5.5, -3, -8.5]},
    { scaleX: 0.7 },
    { scaleY: 0.7 },
    { scaleZ: 0.7 },
    ]}}initial props boy2 */ }),
  location0
    );
   myboy3= r360.renderToLocation(
      r360.createRoot('boy3', { /* initial props boy1 */ }),
      location0
        );
   myboy4= r360.renderToLocation(
      r360.createRoot('boy4', { /* initial props boy1 */ }),
          location0
        );


  // Render a sphere (surface)
  const sphereSurface = new Surface(
    SIZE,
    SIZE,
    Surface.SurfaceShape.Flat,
  );
  sphereSurface.setAngle (0,0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Sphere' }),
    sphereSurface,
  );
    r360.renderToLocation(
      r360.createRoot('Sphere'),
      r360.getDefaultLocation()
    );
  
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
