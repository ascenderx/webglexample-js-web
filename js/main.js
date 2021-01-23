"use strict";

const byId = document.getElementById.bind(document);

let app;
function window_onLoad(_) {
  let canvas = byId('canvas');
  let container = canvas.parentElement;
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  app = new CanvasApplication(canvas);
  app.run();
}

window.addEventListener('load', (_) => {
  
});
