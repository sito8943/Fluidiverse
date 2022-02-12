export default class Perception {
    constructor(state, perception) {
        this.e = state;
        this.p = perception
    }

    get P() {
        return this.p;
    }

    set P(perception) {
        this.p = perception;
    }

    get E() {
        return this.e;
    }

    set E(state) {
        this.e = state;
    }
}