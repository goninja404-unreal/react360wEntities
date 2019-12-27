// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const location1 = new Location([1, -1, -2], [0, 0, Math.PI / 2]);
  const location2 = new Location([-1, 1, -2], [0, 0, 0]);





  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('hello360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Render boy entity
  r360.renderToLocation(
    r360.createRoot('Sphere'),
    location2
  );

  //Render boy entity
  r360.renderToLocation(
    r360.createRoot('ModelOne'),
    location1
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
