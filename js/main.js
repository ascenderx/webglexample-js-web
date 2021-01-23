"use strict";

const byId = document.getElementById.bind(document);

let app;
window.addEventListener('load', (_) => {
    let canvas = byId('canvas');
    let container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    app = new CanvasApplication(canvas);
    app.run();
});
