import Canvas from "./Canvas.js";

class Behaviour {

    static Instances = [];
    static #deltaTime = 1/60;

    constructor() {
        Behaviour.Instances.push(this);
    }

    static #lastTime = performance.now();
    static Update(now) {
        Behaviour.#FirstUpdate(now);
        Behaviour.#Update();
        Behaviour.#LateUpdate();
        requestAnimationFrame(Behaviour.Update);
    }

    static #FirstUpdate(now) {
        Behaviour.#deltaTime = (now-Behaviour.#lastTime) / 1000;
        Behaviour.#lastTime = now;

        for (const instance of Behaviour.Instances) {
            instance.FirstUpdate?.(Behaviour.#deltaTime);
        }
    }
    
    static #Update() {
        Canvas.Instance.ctx.clearRect(0, 0, Canvas.Instance.canvas.width, Canvas.Instance.canvas.height);
        for (const instance of Behaviour.Instances) {
            instance.Update?.(Behaviour.#deltaTime);
        }
    }

    static #LateUpdate() {
        for (const instance of Behaviour.Instances) {
            instance.LateUpdate?.(Behaviour.#deltaTime);
        }
    }
    
}

export default Behaviour;