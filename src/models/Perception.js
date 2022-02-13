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

  /**
   * Get the name of the person
   * @returns The property p.
   */
  get Name() {
    return this.p;
  }

  /**
   * Set the value of the property `p` to the parameter `name`
   * @param {string} name - The name of the parameter.
   */
  set Name(name) {
    this.p = name;
  }

  /**
   * Get the current state of the environment
   * @returns the property environmentState.
   */
  get EnvironmentState() {
    return this.e;
  }

  /**
   * It sets the environment state of the current session.
   * @param {string} environmentState - The state of the environment.
   */
  set EnvironmentState(environmentState) {
    this.e = environmentState;
  }
}
