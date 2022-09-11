import Engine from "./Engine/Engine.js";
import Vector from "./Engine/Vector2.js";
import KeyCode from "./Engine/KeyCode.js";
import UserInput from "./Engine/UserInput.js";
import Circle from "./Engine/Circle.js";
import { Clamp, Lerp } from "./Engine/Utils.js";
import Behaviour from "./Engine/Behaviour.js";


const engine = new Engine();

class CircleMovement extends Behaviour {
    constructor() {
        super();
        this.circle = new Circle(engine.ctx, new Vector(engine.canvas.width / 4, engine.canvas.height / 2), 100, "orange");
    }

    Update() {
        engine.ctx.clearRect(0, 0, engine.canvas.width, engine.canvas.height);

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

// new Circle(engine.ctx, new Vector(engine.canvas.width / 4, engine.canvas.height / 2), 100, "orange");
// new Circle(engine.ctx, new Vector((engine.canvas.width / 4) * 3, engine.canvas.height / 2), 50, "lightgreen");
