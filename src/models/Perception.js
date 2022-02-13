export default class Perception {
    /**
     *
     * @param {string} environmentState environment state name
     * @param {string} name perception name
     */
    constructor(environmentState, name) {
        this.e = environmentState;
        this.p = name;
    }

    get Name() {
        return this.p;
    }

    set Name(name) {
        this.p = name;
    }

    get EnvironmentState() {
        return this.e;
    }

    set EnvironmentState(environmentState) {
        this.e = environmentState;
    }
}