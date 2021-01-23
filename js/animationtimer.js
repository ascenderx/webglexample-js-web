"use strict";

class AnimationTimer {
  constructor(callback, interval) {
    this.callback = callback;
    this.interval = interval;
    this.previous = 0;
    this.handle = null;
    this.tickCallback = this.onTick.bind(this);
  }

  onTick(timestamp) {
    let elapsed = timestamp - this.previous;
    if (elapsed >= this.interval) {
      this.previous = timestamp;
      let status = this.callback();
      if (!status) {
        this.pause();
        return;
      }
    }
    this.fireNextFrame();
  }

  fireNextFrame() {
    this.handle = window.requestAnimationFrame(this.tickCallback);
  }

  resume() {
    if (this.handle !== null) {
      return;
    }
    this.fireNextFrame();
  }
  
  pause() {
    if (this.handle === null) {
      return;
    }
    window.cancelAnimationFrame(this.handle);
    this.handle = null;
  }
}
