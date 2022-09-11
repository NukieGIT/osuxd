class Behaviour {

    constructor() {
        this.Update();
    }

    Update() {
        requestAnimationFrame(() => this.Update());
    }

}

export default Behaviour;