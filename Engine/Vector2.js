class Vector {
    constructor(x, y) {
        if (x === undefined || y === undefined) {
            console.error("Either x or y is undefined");
        }
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        if (x === undefined || y === undefined) {
            console.error("Either x or y is undefined");
            return;
        }
        this.x = x;
        this.y = y;
    }

    copy() {
        return new Vector(this.x, this.y);
    }
    
    add(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }
    
    sub(v) {
        return new Vector(this.x - v.x, this.y - v.y);
    }
    
    mag() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    
    mult(n) {
        return new Vector(this.x * n, this.y * n);
    }

    div(n) {
        if (n === 0) {
            return Vector.zero();
        }
        return new Vector(this.x / n, this.y / n);
    }

    setMag(mag) {
        if (this.mag() === 0) {
            return Vector.zero();
        }
        return new Vector(this.x * mag / this.mag(), this.y * mag / this.mag());
    }
    
    normalize() {
        if (this.mag() === 0) {
            return new Vector(0, 0);
        } else {
            return new Vector(this.x / this.mag(), this.y / this.mag());
        }
    }

    
    static dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }
    
    static cross(v1, v2) {
        return v1.x * v2.y - v1.y * v2.x;
    }

    static zero() {
        return new Vector(0, 0);
    }
    
    visualize(ctx, startX, startY, n, color="green") {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + this.x * n, startY + this.y * n);
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}

export default Vector;