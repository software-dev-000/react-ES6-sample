"use strict";

var Components = require('./lib/components/index.js').Components;
var Scroll = require('./lib/mixins/scroll.js').Scroll;


var scroll = new Scroll();
var unbind = scroll.bind(function () {
  console.log("scrolling once");
  unbind();
});

var Module = exports.Module = {
  Components: Components
};