import Utils from "./Utils.js"
import UIObject from "./UIObject.js";

class Text extends UIObject{

    #pos
    #value
    #font
    #fontsize
    #color
    #textAling
    #textBaseline

    constructor(pos, value, font, fontsize, color, {textAling = "left", textBaseline = "top"}) {
        super(pos);
        this.#value = value;
        this.#font = font;
        this.#fontsize = fontsize;
        this.#color = color;
        this.#textAling = textAling;
        this.#textBaseline = textBaseline;
    }

    get value() {
        return this.#value;
    }

    get font() {
        return this.#font;
    }

    get fontsize() {
        return this.#fontsize;
    }

    get color() {
        return this.#color;
    }

    get textAlign() {
        return this.#textAling;
    }

    get textBaseline() {
        return this.#textBaseline;
    }

    set value(value) {
        this.value = value;
    }

    set font(font) {
        this.font = font;
    }

    set fontsize(size) {
        if (!Utils.isDouble(size) && !Number.isInteger(size)) {
            console.warn("This is not a number\n", (new Error).stack);
            return;
        }
        this.#fontsize = size;
    }

    set color(color) {
        this.#color = color;
    }

    set textAlign(value) {
        this.#textAling = value;
    }

    set textBaseline(value) {
        this.#textBaseline = value;
    }

    Render(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.#color;
        ctx.font = `${this.#fontsize}px ${this.#font}`;
        ctx.textAlign = this.#textAling;
        ctx.textBaseline = this.#textBaseline;
        ctx.fillText(this.#value, this._pos.x, this._pos.y);
    }

}

export default Text;