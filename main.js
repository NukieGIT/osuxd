import Engine from "./Engine.js";
import Vector from "./Vector2.js";
import KeyCode from "./KeyCode.js";
import UserInput from "./UserInput.js";
import Object from "./Object.js";
import Circle from "./Circle.js";
import { Clamp, Lerp } from "./VectorMath.js";


const engine = new Engine();
console.log(engine);
engine.CreateCanvas();

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