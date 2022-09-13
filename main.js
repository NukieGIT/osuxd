import Canvas from "./Engine/Canvas.js";
import Vector from "./Engine/Vector2.js";
import KeyCode from "./Engine/KeyCode.js";
import UserInput from "./Engine/UserInput.js";
import Circle from "./Engine/Circle.js";
import { Clamp, Lerp } from "./Engine/Utils.js";
import Behaviour from "./Engine/Behaviour.js";
import Text from "./Engine/Text.js";

const GLOBAL_CANVAS = new Canvas(document.body, {fillScreen: true});

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
let ee = {
    clientX: 0,
    clientY: 0
};

GLOBAL_CANVAS.canvas.addEventListener("mousemove", e => {
    ee.clientX = e.clientX;
    ee.clientY = e.clientY;
})

class CircleTesting extends Behaviour {
    constructor() {
        super();
        this.circle = new Circle(GLOBAL_CANVAS, new Vector(GLOBAL_CANVAS.canvas.width / 4, GLOBAL_CANVAS.canvas.height / 2), 100, "orange");
        this.fps = new Text(GLOBAL_CANVAS, "", Vector.zero(), 30, "white");
        this.velocity = Vector.zero();
    }
    
    
    
    Update(dt) {
        // console.log(getMousePos(GLOBAL_CANVAS.canvas, ee));
        this.fps.value = Math.round(1/dt);
        this.circle.pos = this.circle.pos.add(this.velocity.normalize().mult(1000).mult(dt));
    }
    
}
let ae = new CircleTesting();
window.addEventListener("keydown", (e) => {
    if (e.code == "KeyW") {
        ae.velocity.y = ae.velocity.y = -1;
    }
    if (e.code == "KeyA") {
        ae.velocity.x = ae.velocity.x = -1;
    }
    if (e.code == "KeyS") {
        ae.velocity.y = ae.velocity.y = 1;
    }
    if (e.code == "KeyD") {
        ae.velocity.x = ae.velocity.x = 1;
    }
})
window.addEventListener("keyup", (e) => {
    if (e.code == "KeyW") {
        ae.velocity.y = ae.velocity.y = 0;
    }
    if (e.code == "KeyA") {
        ae.velocity.x = ae.velocity.x = 0;
    }
    if (e.code == "KeyS") {
        ae.velocity.y = ae.velocity.y = 0;
    }
    if (e.code == "KeyD") {
        ae.velocity.x = ae.velocity.x = 0;
    }
})
