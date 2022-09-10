import Vector from "./Vector2.js";
import KeyCode from "./KeyCode.js";
import UserInput from "./UserInput.js";
import Object from "./Object.js";
import Circle from "./Circle.js";
import { Clamp, Lerp } from "./VectorMath.js";

class Engine {

    constructor() {
        this.canvas;
        this.ctx;
    }

    CreateCanvas() {
        this.canvas = document.createElement("canvas");
        this.canvas.tabIndex = 0;
        document.body.append(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        this.canvas.focus();

        let WIDTH = window.innerWidth;
        let HEIGHT = window.innerHeight;

        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;

    }
}

export default Engine;