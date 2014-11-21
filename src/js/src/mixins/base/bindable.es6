let _ = require('lodash');

class _Bindable {
    constructor()
    {
        this.callbacks = [];
    }
    bind(callback) {
        var self = this

        this.callbacks.push(callback);
        var index = this.callbacks.length - 1;

        if (index === 0) {
            this.onAttach();
        }
        this.onBound();

        return function unbind() {
            self.callbacks.splice(index, 1);

            self.onUnBound();

            if (self.callbacks.length === 0) {
                self.onDetach();
            }
        };
    }
    invoke() {
        var self = this;
        var args = arguments;

        for(let callback of this.callbacks){
            callback.apply(null, args);
        }
}
    
    onAttach(){}
    onBound(){}
    onUnBound(){}
    onDetach(){}
}

export const Bindable = _Bindable;