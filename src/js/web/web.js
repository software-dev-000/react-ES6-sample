"use strict";

var React = require("react");

var Module = require('../index.js').Module;


var render = function () {
  return React.render((React.createElement("div", null, React.createElement(Module.Components.Jumbotron, { headline: "Jumbotron" }), React.createElement(Module.Components.Alert, { message: "some alert message", type: "danger" }), React.createElement(Module.Components.Alert, { message: "some other message", type: "success" }))), document.getElementById("main"));
};

render();