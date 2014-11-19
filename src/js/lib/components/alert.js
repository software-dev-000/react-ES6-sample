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
var _Alert = (function (BaseComponent) {
  var _Alert = function _Alert() {
    BaseComponent.apply(this, arguments);
  };

  _extends(_Alert, BaseComponent);

  _classProps(_Alert, null, {
    getClass: {
      writable: true,
      value: function () {
        return "alert" + (this.props.type ? (" alert-" + this.props.type) : "");
      }
    },
    render: {
      writable: true,
      value: function () {
        return (React.createElement("div", { className: this.getClass(), role: "alert" }, this.props.message));
      }
    }
  });

  return _Alert;
})(BaseComponent);

var Alert = exports.Alert = React.createClass(_Alert.prototype.reactifyClass());