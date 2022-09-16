import Vector from "./Vector2.js";

class UIObject {

    constructor(pos) {
        this._pos = pos
    }

    get position() {
        return this._pos;
    }
    
    set position(v) {
        if (!(v instanceof Vector)) {
            console.warn("This is not a Vector2\n", (new Error).stack);
            return;
        }
        this._pos = v;
    }

}

export default UIObject;