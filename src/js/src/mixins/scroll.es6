let _ = require('lodash');

import {Bindable} from  './base/bindable.js';

class _Scroll extends Bindable
{
    constructor() {
        super();
    }
    onAttach() {
        let self = this;

        this._throttledScroll = _.throttle(function() {
            self.invoke();
        });

        if (!window.addEventListener) {
            window.onscroll = this._throttledScroll;
            return;
        }
        window.addEventListener('scroll', this._throttledScroll);
    }
    onDetach() {
        if (!window.addEventListener) {
            window.onscroll = null;
            return;
        }
        window.removeEventListener('scroll', this._throttledScroll);
    }
}

export const Scroll = _Scroll;