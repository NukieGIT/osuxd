import Canvas from "./Canvas.js";

class Behaviour {

    static Instances = [];

    constructor() {
        Behaviour.Instances.push(this);
    }

    static #lastTime = performance.now();
    static Update(now) {
        Canvas.Instance.ctx.clearRect(0, 0, Canvas.Instance.canvas.width, Canvas.Instance.canvas.height);
        let deltaTime = (now-Behaviour.#lastTime) / 1000;
        // console.log(deltaTime, fps);
        Behaviour.#lastTime = now;
        for (const instance of Behaviour.Instances) {
            instance.Update?.(deltaTime);
        }
        requestAnimationFrame(Behaviour.Update);
    }
    
}

export default Behaviour;