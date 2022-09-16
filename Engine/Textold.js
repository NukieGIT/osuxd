import Object from "./Object.js";

/**
 * @deprecated use Text class instead
 */
class Text extends Object{
    constructor(canvas, value, position, fontsize, color) {
        super(canvas, position, color)
        this.value = value;
        this.fontsize = fontsize;
    }

    Render() {
        if (!this.ctx) return;
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.font = `${this.fontsize}px serif`;
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "top";
        this.ctx.fillText(this.value, this.pos.x, this.pos.y);
    }

    Update() {
        this.Render();
    }

}

export default Text;