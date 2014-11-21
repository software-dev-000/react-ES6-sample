"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _Reactifyable = (function () {
  var _Reactifyable = function _Reactifyable() {};

  _classProps(_Reactifyable, null, {
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

  return _Reactifyable;
})();

var Reactifyable = exports.Reactifyable = _Reactifyable;