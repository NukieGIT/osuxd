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
     * Adds a new UI element
     * @param {UIObject} elem UI element
     */
    addElement(elem) {
        const check = this.#elements.includes(elem);
        if (!check) {
            this.#elements.push(elem);
        } else {
            console.warn("Such element already exist!\n", (new Error).stack);
        }
    }

    removeElement(elem) {
        const idxof = this.#elements.indexOf(elem);
        if (idxof === -1) {
            console.warn("Such element does not exist!\n", (new Error).stack);
            return;
        }
        this.#elements.splice(idxof, 1);
    }

    Update() {
        for (const elem of this.#elements) {
            elem.Render(this.ctx);
        }
    }


}

export default UI;