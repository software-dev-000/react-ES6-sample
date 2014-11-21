class _Reactifyable {
    reactifyClass(){
        let o = {};
        let self = this;
        Object.getOwnPropertyNames(this)
            .forEach(function (prop) {
                if (prop !== "constructor") {
                    o[prop] = self[prop];
                }
            });
        return o;
    }
}

export const Reactifyable = _Reactifyable;