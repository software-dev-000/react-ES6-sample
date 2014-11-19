"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

var React = require("react");
var BaseComponent = require('./base.js').BaseComponent;
var _Jumbotron = (function (BaseComponent) {
  var _Jumbotron = function _Jumbotron() {
    BaseComponent.apply(this, arguments);
  };

  _extends(_Jumbotron, BaseComponent);

  _classProps(_Jumbotron, null, {
    render: {
      writable: true,
      value: function () {
        return (React.createElement("div", { className: "jumbotron" }, React.createElement("h1", null, this.props.headline)));
      }
    }
  });

  return _Jumbotron;
})(BaseComponent);

var Jumbotron = exports.Jumbotron = React.createClass(_Jumbotron.prototype.reactifyClass());