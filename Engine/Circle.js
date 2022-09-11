import Object from "./Object.js";

class Circle extends Object{
    constructor(ctx, pos, radius, color) {
        super(ctx, pos, color);
        this.radius = radius;
    }
    
    Render() {
        if (!this.ctx) return;
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 5;
        this.ctx.stroke();
    }

    Update() {
        this.Render();
        requestAnimationFrame(() => this.Update());
    }

}

export default Circle;