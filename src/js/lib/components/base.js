"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _BaseComponent = (function () {
  var _BaseComponent = function _BaseComponent() {};

  _classProps(_BaseComponent, null, {
    reactifyClass: {
      writable: true,
      value: function () {
        var o = {};
        var self = this;
        Object.getOwnPropertyNames(this).forEach(function (prop) {
          if (prop !== "constructor") {
            o[prop] = self[prop];
          }
        });
        return o;
      }
    }
  });

  return _BaseComponent;
})();

var BaseComponent = exports.BaseComponent = _BaseComponent;