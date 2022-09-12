import Canvas from "./Engine/Canvas.js";
import Vector from "./Engine/Vector2.js";
import KeyCode from "./Engine/KeyCode.js";
import UserInput from "./Engine/UserInput.js";
import Circle from "./Engine/Circle.js";
import { Clamp, Lerp } from "./Engine/Utils.js";
import Behaviour from "./Engine/Behaviour.js";

const GLOBAL_CANVAS = new Canvas(document.body, {fillScreen: true});

class CircleMovement extends Behaviour {
    constructor() {
        super();
        this.circle = new Circle(GLOBAL_CANVAS, new Vector(GLOBAL_CANVAS.canvas.width / 4, GLOBAL_CANVAS.canvas.height / 2), 100, "orange");
    }

    Update() {
        GLOBAL_CANVAS.ctx.clearRect(0, 0, GLOBAL_CANVAS.canvas.width, GLOBAL_CANVAS.canvas.height);

        window.addEventListener("keydown", e => {
            if (e.code == "KeyW") {
                this.circle.pos = this.circle.pos.add(new Vector(0, -0.01));
            }
            if (e.code == "KeyA") {
                this.circle.pos = this.circle.pos.add(new Vector(-0.01, 0));
            }
            if (e.code == "KeyS") {
                this.circle.pos = this.circle.pos.add(new Vector(0, 0.01));
            }
            if (e.code == "KeyD") {
                this.circle.pos = this.circle.pos.add(new Vector(0.01, 0));
            }
        })
        requestAnimationFrame(() => this.Update());
    }

}

new CircleMovement();