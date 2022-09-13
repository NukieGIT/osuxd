import Behaviour from "./Behaviour.js";
import Canvas from "./Canvas.js";
import KeyCode from "./KeyCode.js";
import Vector from "./Vector2.js";

class UserInput extends Behaviour{

    // static Instance = undefined;
    static mousePos = Vector.zero();

    #tempMousePos
    constructor() { 
        super();
        this.keys = {};
        
        this.#tempMousePos = {
            clientX: 0,
            clientY: 0
        };
        Canvas.Instance.canvas.addEventListener("mousemove", e => {
            this.#tempMousePos.clientX = e.clientX;
            this.#tempMousePos.clientY = e.clientY;
        })
        this.#LoadKeys();
    }

    #SetMousePos() {
        const rect = Canvas.Instance.canvas.getBoundingClientRect();
        UserInput.mousePos = new Vector(this.#tempMousePos.clientX - rect.left, this.#tempMousePos.clientY - rect.top);
    }

    #LoadKeys() {
        
    }

    FirstUpdate() {
        this.#SetMousePos();
    }

    GetKeyDown(keyCode) {

    }
}

export default UserInput;