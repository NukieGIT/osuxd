import Behaviour from "./Behaviour.js";

class Object extends Behaviour{

    static Instances = [];

    constructor(canvas, pos, color="purple") {
        super();
        this.pos;
        this.canvas = canvas;
        this.ctx = this.canvas.ctx;
        this.setPos(pos);
        this.setColor(color);
        Object.Instances.push(this);
        // const event = new CustomEvent("OnNewObject", {detail: this});
        // window.dispatchEvent(event);
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