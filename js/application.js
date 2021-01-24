"use strict";

/**
 * 
 */
class CanvasApplication {
  /**
   * 
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    /**
     * @type {?WebGLRenderingContext}
     */
    let gl = canvas.getContext('webgl');

    if (gl === null) {
      throw 'Error getting WebGL context.';
    }

    /**
     * @type {HTMLCanvasElement}
     */
    this._canvas = canvas;

    /**
     * @type {WebGLRenderingContext}
     */
    this._graphics = gl;

    /**
     * @type {AnimationTimer}
     */
    this._timer = new AnimationTimer(
      this._onTick.bind(this),
      CanvasApplication._INTERVAL
    );

    /**
     * @type {InputHandler}
     */
    this._inputHandler = new InputHandler(canvas);
  }

  /**
   * @returns {boolean} 
   */
  _onTick() {
    this._handleInput();
    this._update();
    this._draw();

    return true;
  }

  /**
   * 
   */
  _handleInput() {
    /**
     * @type {InputHandler}
     */
    let input = this._inputHandler;
  }

  /**
   * 
   */
  _update() {}

  /**
   * 
   */
  _draw() {
    /**
     * @type {WebGLRenderingContext}
     */
    let gl = this._graphics;
  }

  /**
   * 
   */
  run() {
    this._timer.resume();
  }
}
CanvasApplication._INTERVAL = 50;
