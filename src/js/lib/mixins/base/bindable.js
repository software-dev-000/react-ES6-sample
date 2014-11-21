"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _ = require("lodash");

var _Bindable = (function () {
  var _Bindable = function _Bindable() {
    this.callbacks = [];
  };

  _classProps(_Bindable, null, {
    bind: {
      writable: true,
      value: function (callback) {
        var self = this;

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
    },
    invoke: {
      writable: true,
      value: function () {
        var self = this;
        var args = arguments;

        for (var _iterator = this.callbacks[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
          var callback = _step.value;
          callback.apply(null, args);
        }
      }
    },
    onAttach: {
      writable: true,
      value: function () {}
    },
    onBound: {
      writable: true,
      value: function () {}
    },
    onUnBound: {
      writable: true,
      value: function () {}
    },
    onDetach: {
      writable: true,
      value: function () {}
    }
  });

  return _Bindable;
})();

var Bindable = exports.Bindable = _Bindable;