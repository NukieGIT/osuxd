import Behaviour from "./Behaviour.js";

class UI extends Behaviour{

    #type;
    #elements = [];
    constructor(canvas, type) {
        super();
        this.canvas = canvas;
        this.ctx = this.canvas.ctx;
        this.#type = type;
    }

    /**
     * 
     * @param {UIObject} elem UI element
     */
    addElement(elem) {
        this.#elements.push(elem);
    }

    Update() {
        for (const elem of this.#elements) {
            elem.Render(this.ctx);
        }
    }


}

export default UI;