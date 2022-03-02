export default class AtomicBot {
  /**
   *
   * @param {string[]} E
   * @param {Perception[]} P
   * @param {InnerState[]} I
   * @param {Action[]} A
   * @param {{string: {next: string}}} links
   * @param {{i: InnerState}} initial
   */
  constructor(E, P, I, A, links, initial) {
    this.E = E; // environment states
    this.P = P; // perceptions
    this.I = I; // inner states
    this.A = A; // actions
    this.links = links; // links[i] => { string : {next: string} }
    this.currentI = initial.i;
  }

  /**
   *
   * @param {string} p
   * @param {string} i
   * @return next inner state given a perception and previous inner state
   */
  InnerStateLinks = (p, i) => {
    console.log(i, p);
    console.log(this.links);
    return this.links[i][p].next;
  };

  /**
   * @param {string} e
   * @return perception given an environment state
   */
  See = (e) => {
    this.currentP = this.P.filter((item) => {
      if (item.EnvironmentState === e) return item;
    })[0];
    console.log(e);
    return this.currentP.Name;
  };

  /**
   * @param {Perception} p
   * @param {InnerState} i
   */
  Next = (p = undefined, i = undefined) => {
    const cP = !p ? this.currentP : p;
    const cI = !i ? this.currentI : i;
    this.currentI = this.InnerStateLinks(cP.Name, cI.Name);
    this.currentI = this.I.filter((item) => {
      if (item.Name === this.currentI) return item;
    })[0];
    return this.currentI.Name;
  };

  /**
   * @param {InnerState} i
   * @return action given an inner state
   */
  Action = (i = undefined) => {
    const cI = !i ? this.currentI : i;
    this.currentA = this.A.filter((item) => {
      if (item.InnerState === cI.Name) return item;
    })[0];
    return this.currentA;
  };

  get CurrentAction() {
    return this.currentA;
  }

  get CurrentInnerState() {
    return this.currentI;
  }

  get CurrentPerception() {
    return this.currentP;
  }

  Current = (key) => {
    const lowerCaseKey = key.toLowerCase();
    switch (lowerCaseKey) {
      case "a":
      case "action":
      case "currenta":
      case "currentaction":
        return this.currentA;
      case "i":
      case "innerstate":
      case "currenti":
      case "currentinnerstate":
        return this.currentI;
      default:
        return this.currentP;
    }
  };
}
