export default class Action {
    constructor(innerState, action) {
        this.i = innerState;
        this.a = action;
    }

    get I() {
        return this.i;
    }

    set I(innerState) {
        this.i = innerState;
    }

    get A() {
        return this.a;
    }

    set A(action) {
        this.a = action;
    }

}