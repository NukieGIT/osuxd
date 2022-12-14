import Canvas from "./Engine/Canvas.js";
import Vector from "./Engine/Vector2.js";
import UserInput from "./Engine/UserInput.js";
import Circle from "./Engine/Circle.js";
import Utils from "./Engine/Utils.js";
import Behaviour from "./Engine/Behaviour.js";
import Textold from "./Engine/Textold.js";
import UI from "./Engine/UI.js";
import Text from "./Engine/Text.js";

const GLOBAL_CANVAS = new Canvas(document.body, {fillScreen: true});

class CircleTesting extends Behaviour {
    constructor() {
        super();
        this.circle = new Circle(GLOBAL_CANVAS, new Vector(GLOBAL_CANVAS.canvas.width / 4, GLOBAL_CANVAS.canvas.height / 2), 100, "orange");
        this.fps = new Textold(GLOBAL_CANVAS, "", Vector.zero(), 30, "white");
        this.mousePos = new Textold(GLOBAL_CANVAS, "", new Vector(0, 30), 30, "white");
        this.inputText = new Textold(GLOBAL_CANVAS, "", new Vector(0, 60), 30, "white");
        this.UI = new UI(GLOBAL_CANVAS);
        // ===========
        // Text testing
        // ===========
        this.testingText = new Text(new Vector(0, 90), "hello world", "comfortaa", 50, "lightblue", {textAling: "left", textBaseline: "top"});
        this.UI.addElement(this.testingText);
        this.testingText.fontsize = 100;
        this.testingText.position = new Vector(100, 100);

        this.velocity = Vector.zero();
    }
    
    Update(dt) {
        this.fps.value = `${Math.round(1/dt)} FPS`;
        this.mousePos.value = `x: ${UserInput.mousePos.x}, y: ${UserInput.mousePos.y}`
        this.inputText.value = `Keys Pressed: ${JSON.stringify(UserInput.GetAllKeyPress())}`;
        this.circle.pos = this.circle.pos.add(this.velocity.normalize().mult(1000).mult(dt));

        this.#HandleMovement();

    }

    #HandleMovement() {
        if (UserInput.GetKeyPress("KeyA") && Math.abs(this.velocity.x) < 1) {
            this.velocity = this.velocity.add(new Vector(-1, 0));
        }
        if (UserInput.GetKeyPress("KeyD") && Math.abs(this.velocity.x) < 1) {
            this.velocity = this.velocity.add(new Vector(1, 0));
        }
        if (UserInput.GetKeyPress("KeyW") && Math.abs(this.velocity.y) < 1) {
            this.velocity = this.velocity.add(new Vector(0, -1));
        }
        if (UserInput.GetKeyPress("KeyS") && Math.abs(this.velocity.y) < 1) {
            this.velocity = this.velocity.add(new Vector(0, 1));
        }

        if (UserInput.GetKeyUp("KeyA")) {
            this.velocity = Vector.zero();
        }
        if (UserInput.GetKeyUp("KeyD")) {
            this.velocity = Vector.zero();
        }
        if (UserInput.GetKeyUp("KeyW")) {
            this.velocity = Vector.zero();
        }
        if (UserInput.GetKeyUp("KeyS")) {
            this.velocity = Vector.zero();
        }
    }
    
}
new CircleTesting();

