import Behaviour from "./Behaviour.js";
import Vector from "./Vector2.js";
import UserInput from "./UserInput.js";
import Object from "./Object.js";
import Circle from "./Circle.js";
import Utils from "./Utils.js";

class Engine {

    static Instance = undefined;

    #Input;
    constructor() {
        Engine.Instance = this;
        this.#Input = new UserInput();
        this.#EventListeners();        
        this.#StartUpdate();
    }

    #StartUpdate() {
        requestAnimationFrame(Behaviour.Update);
    }
    
    #EventListeners() {
        // window.addEventListener("OnNewObject", e => {
        //     this.objects.push(e.detail);
        // })
    }

}

export default Engine;