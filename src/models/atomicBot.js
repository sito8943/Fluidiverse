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
    this.Action();
  }

  /**
   *
   * @param {string} p
   * @param {string} i
   * @return next inner state given a perception and previous inner state
   */
  InnerStateLinks = (p, i) => {
    return this.links[i][p].next;
  };

  /**
   * @param {string} e
   * @return perception given an environment state
   */
  See = (e) => {
    this.currenP = this.P.filter((item) => {
      if (item.EnvironmentState === e) return item;
    })[0];
    return this.currenP.Name;
  };

  /**
   * @param {Perception} p
   * @param {InnerState} i
   */
  Next = (p, i = undefined) => {
    if (!i) this.currentI = this.InnerStateLinks(p.Name, this.currentI.Name);
    else this.currentI = this.InnerStateLinks(p.Name, i.Name);
    return this.currentI.Name;
  };

  /**
   * @param {InnerState} i
   * @return action given an inner state
   */
  Action = (i = undefined) => {
    this.currentA = this.A.filter((item) => {
      if (i) {
        if (item.InnerState === i) return item;
      } else if (item.InnerState === this.currentI.Name) return item;
    })[0];
    return this.currentA.Name;
  };
}
