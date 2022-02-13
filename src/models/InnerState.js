export default class InnerState {
    /**
     *
     * @param {string} name inner state name
     */
    constructor(name) {
        this.i = name;
    }

    get Name() {
        return this.i;
    }

    set Name(name) {
        this.i = name;
    }

}