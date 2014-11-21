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

var _ = require("lodash");

var Bindable = require('./base/bindable.js').Bindable;
var _Scroll = (function (Bindable) {
  var _Scroll = function _Scroll() {
    Bindable.call(this);
  };

  _extends(_Scroll, Bindable);

  _classProps(_Scroll, null, {
    onAttach: {
      writable: true,
      value: function () {
        var self = this;

        this._throttledScroll = _.throttle(function () {
          self.invoke();
        });

        if (!window.addEventListener) {
          window.onscroll = this._throttledScroll;
          return;
        }
        window.addEventListener("scroll", this._throttledScroll);
      }
    },
    onDetach: {
      writable: true,
      value: function () {
        if (!window.addEventListener) {
          window.onscroll = null;
          return;
        }
        window.removeEventListener("scroll", this._throttledScroll);
      }
    }
  });

  return _Scroll;
})(Bindable);

var Scroll = exports.Scroll = _Scroll;