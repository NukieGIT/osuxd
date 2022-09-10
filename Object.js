class Object {
    constructor(pos, color="purple") {
        this.pos;
        this.setPos(pos);
        this.setColor(color);
        OBJECTS.push(this);
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