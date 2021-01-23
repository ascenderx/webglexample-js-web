"use strict";

class CanvasApplication {
    constructor(canvas) {
        this.canvas = canvas;
        let gl = canvas.getContext('webgl');
        if (gl === null) {
            throw 'Error getting WebGL context.';
        }
        this.graphics = gl;
        this.timer = new AnimationTimer(this.onTick.bind(this), CanvasApplication.INTERVAL);
        this.inputHandler = new InputHandler(canvas);
    }

    onTick() {
        this.handleInput();
        this.update();
        this.draw();
        return true;
    }

    handleInput() {
        let input = this.inputHandler;
    }

    update() {}

    draw() {
        let gl = this.graphics;
    }

    run() {
        this.timer.resume();
    }
}
CanvasApplication.INTERVAL = 50;
