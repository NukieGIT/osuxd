import Engine from "./Engine.js";
import Vector from "./Vector2.js";

class Canvas {
    
    static Instance = undefined;

    #engine;
    #originalWidth;
    #originalHeight;

    /**
     * Creates a new Canvas managed by engine
     * @param {Object} elem html element to which canvas is going to append to
     * @param {Boolean} fillscreen whether canvas should fill the entire screen or not
     * @param {Object} dimensions sets the dimensions of the canvas if fillscreen is not true
     */
    constructor(elem, {fillScreen = true, dimensions = new Vector(200, 100)}) {
        if (Canvas.Instance !== undefined) {
            Canvas.Instance.DeleteCanvas();
            Canvas.Instance = this;
            console.warn("Canvas Instance Recreated!\n", (new Error).stack);
        } else {
            Canvas.Instance = this;
        }
        this.canvas;
        this.ctx;
        this.elem = elem;
        this.fillScreen = fillScreen;
        this.dimensions = dimensions;
        
        this.#CreateCanvas();
        this.#engine = new Engine();
    }

    #CreateCanvas() {
        this.canvas = document.createElement("canvas");
        this.canvas.style.display = "block";
        this.canvas.tabIndex = 0;

        if (this.fillScreen) {
            
            window.addEventListener("resize", () => this.#HandleResize());
            this.#originalWidth = window.innerWidth;
            this.#originalHeight = window.innerHeight;
            
            this.canvas.width = this.#originalWidth;
            this.canvas.height = this.#originalHeight;
            
        } else {

            this.#originalWidth = this.dimensions.x;
            this.#originalHeight = this.dimensions.y;

            this.canvas.width = this.#originalWidth;
            this.canvas.height = this.#originalHeight;
        }
        // else {
        //     console.warn("canvas dimensions and fillscreen are undefined\n", (new Error).stack);
        // }


        this.ctx = this.canvas.getContext("2d");
        
        this.elem.append(this.canvas);
        this.canvas.focus();
    }

    #HandleResize() {

        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;

        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;

        // let WIDTH = window.innerWidth;
        // let HEIGHT = window.innerHeight;

        // const canvasAspectRatio = this.#originalWidth / this.#originalHeight;
        // const newAspectRatio = WIDTH / HEIGHT;
        // let cWidth;
        // let cHeight;
        // let widthFirst = canvasAspectRatio > newAspectRatio;
        
        // if (!widthFirst) {
        //     cWidth = this.#originalWidth;
        //     cHeight = cWidth / canvasAspectRatio;
        // } else {
        //     cHeight = this.#originalHeight;
        //     cWidth = cHeight * canvasAspectRatio;
        // }
        // // console.log(cWidth, cHeight, this.#originalWidth, this.#originalHeight);
        // this.canvas.width = cWidth;
        // this.canvas.height = cHeight;
    }

    DeleteCanvas() {
        console.warn("Canvas Deleted!\n", (new Error).stack);
        this.canvas.remove();
    }

}

export default Canvas;