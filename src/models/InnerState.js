export default class InnerState {
    /**
     *
     * @param {string} name inner state name
     */
    constructor(name) {
        this.i = name;
    }

    /**
     * It returns the value of the i property.
     * @returns The name of the instance.
     */
    get Name() {
        return this.i;
    }

    /**
     * Set the value of the Name property to the name parameter
     * @param {string} name - The name of the parameter.
     */
    set Name(name) {
        this.i = name;
    }

}