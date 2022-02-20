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

  /**
   * Get the value of the inner state variable
   * @returns The inner state of the object.
   */
  get InnerState() {
    return this.i;
  }

  /**
   * It sets the innerState property of the object.
   * @param {string} innerState - The state of the inner class.
   */
  set InnerState(innerState) {
    this.i = innerState;
  }

  /**
   * Return the value of the `a` property
   * @returns The value of the property a.
   */
  get Name() {
    return this.n;
  }

  /**
   * Set the value of the Name property
   * @param {string} name - The name of the parameter.
   */
  set Name(name) {
    this.n = name;
  }
}
