
/*!
 * vue-conditional-attrs
 * (c) FL3N
 */

(function () {
  var Utils,
      VueConditionalAttrs,
      hasProp = {}.hasOwnProperty;

  Utils = function () {
    function Utils() {}

    Utils.isArray = function (value) {
      return value && typeof value === 'object' && value instanceof Array && typeof value.length === 'number' && typeof value.splice === 'function' && !value.propertyIsEnumerable('length');
    };

    Utils.isObject = function (value) {
      return typeof value === 'object';
    };

    Utils.isFunction = function (value) {
      return typeof value === 'function';
    };

    return Utils;
  }();

  VueConditionalAttrs = {};

  VueConditionalAttrs.install = function (Vue) {
    return Vue.component('cn-attrs', {
      render: function (createElement) {
        var attrs, data, directives, event, events, key, ref, ref1, ref2, ref3, state, value;
        attrs = {};
        ref = this.attrs;
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          data = ref[key];
          value = data;
          state = true;
          if (Utils.isObject(data)) {
            value = data.value;
            state = data["if"];
          } else {
            if (!value) {
              state = false;
            }
          }
          if (state) {
            attrs[key] = value;
          }
        }
        events = {};
        ref1 = this.$listeners;
        for (key in ref1) {
          if (!hasProp.call(ref1, key)) continue;
          data = ref1[key];
          events[key] = data;
        }
        ref2 = this.on;
        for (key in ref2) {
          if (!hasProp.call(ref2, key)) continue;
          data = ref2[key];
          event = data;
          state = true;
          if (Utils.isObject(data)) {
            event = data.event;
            state = data["if"];
          } else {
            if (!Utils.isFunction(data)) {
              state = false;
            }
          }
          if (state) {
            events[key] = event;
          }
        }
        directives = [];
        ref3 = this.directives;
        for (key in ref3) {
          if (!hasProp.call(ref3, key)) continue;
          data = ref3[key];
          value = '';
          state = true;
          if (Utils.isObject(data)) {
            value = data.value;
            state = data["if"];
          } else {
            if (!data) {
              state = false;
            }
          }
          if (state) {
            directives.push({
              name: key,
              value: value
            });
          }
        }
        return createElement(this.tag, {
          attrs: attrs,
          on: events,
          directives: directives
        }, this.$slots["default"]);
      },
      props: {
        tag: {
          type: String,
          "default": 'div'
        },
        attrs: {
          type: Object
        },
        directives: {
          type: Object
        },
        on: {
          type: Object
        }
      }
    });
  };

  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return VueConditionalAttrs;
    });
  } else if (typeof exports === 'object') {
    module.exports = VueConditionalAttrs;
  } else {
    window.VueConditionalAttrs = VueConditionalAttrs;
    Vue.use(VueConditionalAttrs);
  }
}).call(this);