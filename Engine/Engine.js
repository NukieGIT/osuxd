import Behaviour from "./Behaviour.js";
import Vector from "./Vector2.js";
import KeyCode from "./KeyCode.js";
import UserInput from "./UserInput.js";
import Object from "./Object.js";
import Circle from "./Circle.js";
import { Clamp, Lerp } from "./Utils.js";

class Engine {

    static Instance = undefined;

    constructor() {
        Engine.Instance = this;
        this.canvases = []
        this.objects = [];
        this.behaviour = new Behaviour();
        
        this.#EventListeners();        
    }
    
    #EventListeners() {
        window.addEventListener("OnNewObject", e => {
            this.objects.push(e.detail);
        })
    }

}

export default Engine;