class Circle extends Object{
    constructor(pos, radius, color) {
        super(pos, color);
        this.radius = radius;
    }
    
    render() {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineTo(this.pos.x, this.pos.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.stroke();
    }
}

export default Circle;