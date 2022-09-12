import Engine from "./Engine.js";

class Canvas {
    #engine;

        /**
         * Creates a new Canvas managed by engine
         * @param {Object} elem html element to which canvas is going to append to
         * @param {Boolean} fillscreen whether canvas should fill the entire screen or not
         * @param {Object} dimensions sets the dimensions of the canvas if fillscreen is not true
         */
        constructor(elem, {fillScreen = true, dimensions}) {
        if (!Engine.Instance) {
            this.#engine = new Engine();
        }

        this.canvas;
        this.ctx;
        this.elem = elem;
        this.fillScreen = fillScreen;
        this.dimensions = dimensions;
        Engine.Instance.canvases.push(this);

        this.#CreateCanvas();
    }

    #CreateCanvas() {
        this.canvas = document.createElement("canvas");
        // this.canvas.tabIndex = 0;

        if (this.fillScreen) {
            let WIDTH = window.innerWidth;
            let HEIGHT = window.innerHeight;
    
            this.canvas.width = WIDTH;
            this.canvas.height = HEIGHT;
        } else if (this.dimensions !== undefined) {
            this.canvas.width = this.dimensions.x;
            this.canvas.height = this.dimensions.y;
        } else {
            console.warn("canvas dimensions and fillscreen are undefined\n", (new Error).stack);
        }


        this.ctx = this.canvas.getContext("2d");
        
        this.elem.append(this.canvas);
        this.canvas.focus();
    }
}

export default Canvas;