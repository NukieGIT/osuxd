import Behaviour from "./Behaviour.js";
import Canvas from "./Canvas.js";
import KeyCode from "./KeyCode.js";
import Vector from "./Vector2.js";

class UserInput extends Behaviour{
    #tempMousePos
    constructor() { 
        super();
        this.mouse = {};
        this.keys = {};
        
        this.mousePos = Vector.zero();
        this.#tempMousePos = {};
        Canvas.Instance.canvas.addEventListener("mousemove", e => {
            this.#tempMousePos.clientX = e.clientX;
            this.#tempMousePos.clientY = e.clientY;
        })
    }

    #SetMousePos() {
        const rect = Canvas.Instance.canvas.getBoundingClientRect();
        this.mousePos = new Vector(this.#tempMousePos.clientX - rect.left, this.#tempMousePos.clientY - rect.top);
    }

    Update() {
        this.#SetMousePos();
    }

    GetKeyDown(keyCode) {

    }
}

export default UserInput;