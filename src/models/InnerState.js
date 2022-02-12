export default class InnerState {
    constructor(next, innerState,) {
        this.i = innerState;
        this.next = next;
    }

    get I() {
        return this.i;
    }

    set I(innerState) {
        this.i = innerState;
    }

    Next(perception) {
        const innerState = this.next.filter((item) => {
            if (item.P === perception)
                return item.I;
        })
        return innerState[0];
    }

}