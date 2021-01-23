"use strict";

class MouseMap {
    constructor() {
        this.buttons = 0;
        this.x = 0;
        this.y = 0;
    }
}

class InputHandler {
    constructor(element) {
        this.keys = {};
        this.mouse = new MouseMap();
        element.addEventListener('keydown', this.onKeyDown.bind(this));
        element.addEventListener('keyup', this.onKeyUp.bind(this));
        element.addEventListener('mousedown', this.onMouseDown.bind(this));
        element.addEventListener('mouseup', this.onMouseUp.bind(this));
        element.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    onKeyDown(event) {
        let key = event.key;
        if (!(key in this.keys)) {
            this.keys[key] = true;
        }
    }

    onKeyUp(event) {
        let key = event.key;
        if (key in this.keys) {
            delete this.keys[key];
        }
    }

    onMouseDown(event) {
        this.mouse.buttons |= event.buttons;
        this.mouse.x = event.x;
        this.mouse.y = event.y;
    }

    onMouseUp(event) {
        this.mouse.buttons ^= event.buttons;
        this.mouse.x = event.x;
        this.mouse.y = event.y;
    }

    onMouseMove(event) {
        this.mouse.x = event.x;
        this.mouse.y = event.y;
    }

    debounceKey(key) {
        if (key in this.keys) {
            this.keys[key] = false;
        }
    }

    isKeyDown(key) {
        return (key in this.keys) && (this.keys[key]);
    }

    areKeysDown(...keys) {
        for (let key of keys) {
            if (!this.keys[key]) {
                return false;
            }
        }
        return true;
    }

    isMouseButtonDown(button) {
        return (button & this.mouse.buttons) !== 0;
    }

    get mouseX() {
        return this.mouse.x;
    }

    get mouseY() {
        return this.mouse.y;
    }
}
