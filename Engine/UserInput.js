import Behaviour from "./Behaviour.js";
import Canvas from "./Canvas.js";
import Vector from "./Vector2.js";

class UserInput extends Behaviour{

    static mousePos = Vector.zero();
    static Instance = undefined;

    static #keys = {};
    static #allKeyPress = new Set();

    #tempMousePos;
    constructor() { 
        super();
        
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
            e.preventDefault();
            if (typeof UserInput.#keys[e.code] !== "object") {
                UserInput.#keys[e.code] = {};
            }
            
            if (UserInput.#keys[e.code].tempDown) return;
            UserInput.#keys[e.code].down = true;
            UserInput.#keys[e.code].tempDown = true;
        })
        window.addEventListener("keyup", e => {
            e.preventDefault();
            if (typeof UserInput.#keys[e.code] !== "object") {
                UserInput.#keys[e.code] = {};
            }
            UserInput.#keys[e.code].up = true;
            UserInput.#keys[e.code].tempDown = false;
        })
    }
    
    #ResetKeys() {
        for (const key in UserInput.#keys) {
            UserInput.#keys[key].down = false;
            UserInput.#keys[key].up = false;
        }
    }

    FirstUpdate() {
        this.#SetMousePos();
    }

    LateUpdate() {
        this.#ResetKeys();
    }

    static GetAllKeyPress() {
        for (const key in UserInput.#keys) {
            if (this.GetKeyPress(key)) {
                UserInput.#allKeyPress.add(key)
            }
            if (this.GetKeyUp(key)) {
                UserInput.#allKeyPress.delete(key);
            }
        }
        return [...UserInput.#allKeyPress.values()];
    }

    static GetKeyDown(keyCode) {
        return UserInput.#keys[keyCode]?.down;
    }

    static GetKeyUp(keyCode) {
        return UserInput.#keys[keyCode]?.up;
    }

    static GetKeyPress(keyCode) {
        if (this.GetKeyDown(keyCode)) {
            UserInput.#keys[keyCode].downPreviousFrame = true;
        }
        if (UserInput.#keys[keyCode]?.downPreviousFrame) {
            if (!this.GetKeyUp(keyCode)) {
                return true;
            } else {
                UserInput.#keys[keyCode].downPreviousFrame = false;
            }
        }
        return false;
    }
}

export default UserInput;