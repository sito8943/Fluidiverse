export const InnerStateTypes = {
  search: 1,
  harvest: 2,
  alert: 3,
};

export default class InnerState {
  /**
   *
   * @param {string} name inner state name
   * @param {number} type inner state type
   */
  constructor(name, type) {
    this.i = name;
    this.t = type;
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

  get Type() {
    return this.t;
  }

  set Type(type) {
    this.t = type;
  }
}
