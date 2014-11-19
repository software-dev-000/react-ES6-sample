class _BaseComponent {
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

export const BaseComponent = _BaseComponent;