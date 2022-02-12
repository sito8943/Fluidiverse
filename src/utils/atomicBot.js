export class AtomicBot {

    constructor(E, P, I, A) {
        this.E = E; // environment states
        this.P = P; // perceptions
        this.I = I; // inner states
        this.A = A; // actions
    }

    /**
     * @param {string} e
     * @return perception given an environment state
     */
    See = (e) => {
        const perception = this.P.filter((item) => {
            if (item.E === e)
                return item;
        })
        return perception[0];
    }


    /**
     * @param {Perception} p
     * @param {InnerState} i
     */
    Next = (p, i = undefined) => {
        if (!i)
            this.currentI = this.currentI.Next(p);
        else
            this.currentI = i.Next(p);
    }

    /**
     * @param {InnerState} i
     * @return action given an inner state
     */
    Acion = (i = undefined) => {
        this.currentA = this.A.filter((item) => {
            if (!i) if (item.I === this.currentI) return item;
            else if (item.I === i) return item;
        })[0]
        return this.currentA;
    }
}