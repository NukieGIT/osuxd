import Behaviour from "./Behaviour.js";
import Canvas from "./Canvas.js";
import KeyCode from "./KeyCode.js";
import Vector from "./Vector2.js";

class UserInput extends Behaviour{
    constructor() { 
        this.mouse = {};
        this.keys = {};
        
        this.mousePostiion = Vector.zero();
    }

    #SetMousePos() {
        Canvas.Instance.canvas.addEventListener("mousemove", e => {
            const rect = Canvas.Instance.canvas.getBoundingClientRect();
            this.mousePostiion = new Vector(e.clientX - rect.left, e.clientY - rect.top);
        })
    }

    Update() {
        this.#SetMousePos();
    }

    GetKeyDown(keyCode) {

    }
}

export default UserInput;