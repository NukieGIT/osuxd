class Object {
    constructor(ctx, pos, color="purple") {
        this.pos;
        this.ctx = ctx;
        this.setPos(pos);
        this.setColor(color);
        const event = new CustomEvent("NewObject", {detail: this});
        window.dispatchEvent(event);
    }

    setColor(newC) {
        this.color = newC;
    }

    setPos(newP) {
        this.pos = newP;
    }

    setAngle(angle) {
        this.angle = angle;
    }
}

export default Object;