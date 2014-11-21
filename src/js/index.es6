//require('traceur/bin/traceur-runtime');

import {Components} from './lib/components/index.js';
import {Scroll} from './lib/mixins/scroll.js';

var scroll = new Scroll();
var unbind = scroll.bind(function() {
    console.log('scrolling once');
    unbind();
});

export const Module = {
    Components: Components
};
