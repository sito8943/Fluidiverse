export default class Action {
    /**
     *
     * @param {string} innerState state
     * @param {string} name action name
     */
    constructor(innerState, name) {
        this.i = innerState;
        this.n = name;
    }

    get InnerState() {
        return this.i;
    }

    set InnerState(innerState) {
        this.i = innerState;
    }

    get Name() {
        return this.a;
    }

    set Name(name) {
        this.a = name;
    }

}