import Behaviour from "./Behaviour.js";
import Canvas from "./Canvas.js";
import KeyCode from "./KeyCode.js";
import Vector from "./Vector2.js";

class UserInput extends Behaviour{

    static Instance = undefined;
    static mousePos = Vector.zero();

    #keys;
    #allKeyPress;
    #tempMousePos;
    constructor() { 
        super();
        this.#keys = {};
        this.#allKeyPress = new Set();
        
        this.#tempMousePos = {
            clientX: 0,
            clientY: 0
        };
        Canvas.Instance.canvas.addEventListener("mousemove", e => {
            this.#tempMousePos.clientX = e.clientX;
            this.#tempMousePos.clientY = e.clientY;
        })
        this.#KeySetup();
        UserInput.Instance = this;
    }

    #SetMousePos() {
        const rect = Canvas.Instance.canvas.getBoundingClientRect();
        UserInput.mousePos = new Vector(this.#tempMousePos.clientX - rect.left, this.#tempMousePos.clientY - rect.top);
    }

    #KeySetup() {
        window.addEventListener("keydown", e => {
            if (typeof this.#keys[e.code] !== "object") {
                this.#keys[e.code] = {};
            }
            
            if (this.#keys[e.code].tempDown) return;
            this.#keys[e.code].down = true;
            this.#keys[e.code].tempDown = true;
        })
        window.addEventListener("keyup", e => {
            if (typeof this.#keys[e.code] !== "object") {
                this.#keys[e.code] = {};
            }
            this.#keys[e.code].up = true;
            this.#keys[e.code].tempDown = false;
        })
    }
    
    #ResetKeys() {
        for (const key in this.#keys) {
            this.#keys[key].down = false;
            this.#keys[key].up = false;
        }
    }

    FirstUpdate() {
        this.#SetMousePos();
    }

    LateUpdate() {
        this.#ResetKeys();
    }

    GetAllKeyPress() {
        for (const key in this.#keys) {
            if (this.GetKeyPress(key)) {
                this.#allKeyPress.add(key)
            }
            if (this.GetKeyUp(key)) {
                this.#allKeyPress.delete(key);
            }
        }
        return [...this.#allKeyPress.values()];
    }

    GetKeyDown(keyCode) {
        return this.#keys[keyCode]?.down;
    }

    GetKeyUp(keyCode) {
        return this.#keys[keyCode]?.up;
    }

    GetKeyPress(keyCode) {
        if (this.GetKeyDown(keyCode)) {
            this.#keys[keyCode].downPreviousFrame = true;
        }
        if (this.#keys[keyCode]?.downPreviousFrame) {
            if (!this.GetKeyUp(keyCode)) {
                return true;
            } else {
                this.#keys[keyCode].downPreviousFrame = false;
            }
        }
        return false;
    }
}

export default UserInput;