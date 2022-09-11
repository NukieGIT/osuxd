import Engine from "./Engine/Engine.js";
import Vector from "./Engine/Vector2.js";
import KeyCode from "./Engine/KeyCode.js";
import UserInput from "./Engine/UserInput.js";
import Object from "./Engine/Object.js";
import Circle from "./Engine/Circle.js";
import { Clamp, Lerp } from "./Engine/VectorMath.js";


const engine = new Engine();
// engine.CreateCanvas();

new Circle(engine.ctx, new Vector(engine.canvas.width / 2, engine.canvas.height / 2), 50);

//#region Canvas Setup
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// canvas.focus();

// let WIDTH = window.innerWidth;
// let HEIGHT = window.innerHeight;

// canvas.width = WIDTH;
// canvas.height = HEIGHT;

//#endregion

// const OBJECTS = [];

// function mainLoop() {
//     ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
//     for (let object of OBJECTS) {
//         object.render();
//     }

//     new UserInput;

//     requestAnimationFrame(mainLoop);
// }


// mainLoop();