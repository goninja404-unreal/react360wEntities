// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface } from 'react-360-web';

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


r360.detachRoot(location0);
myboy= r360.renderToLocation(
    r360.createRoot('hello360', { /* initial props boy */ }),
    location0
      );
  myboy.Location= new Location([-4,0,0],[0,0,0]);


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
