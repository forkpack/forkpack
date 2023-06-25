function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
!function(n, e) {
    "object" == typeof module && "object" == typeof module.exports ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : (n = "undefined" != typeof globalThis ? globalThis : n || self) && e(n.forkpackEsm = {});
}(this, function(n) {
    "use strict";
    function e(n, e) {
        return arguments[1][0] ? arguments[1].reduce(function(n, e) {
            return n * e;
        }, 1) : n * e;
    }
    function r(n, e) {
        var r = function(e, r) {
            return e.reduce(function(e, r) {
                return n.call(n, e, r);
            }, r);
        }, t = function() {
            for(var n = arguments.length, u = Array(n), o = 0; o < n; o++)u[o] = arguments[o];
            return function() {
                for(var n = arguments.length, o = Array(n), f = 0; f < n; f++)o[f] = arguments[f];
                return o.length ? t.apply(void 0, _to_consumable_array(u).concat([
                    r(o, e)
                ])) : r(u, e);
            };
        };
        return t();
    }
    function t(n, e) {
        return arguments[1][0] ? arguments[1].reduce(function(n, e) {
            return n + e;
        }, 0) : n + e;
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), function(n, e) {
        for(var r in e)Object.defineProperty(n, r, {
            enumerable: !0,
            get: e[r]
        });
    }(n, {
        curry: function() {
            return r;
        },
        fp: function() {
            return u;
        },
        multiply: function() {
            return e;
        },
        sum: function() {
            return t;
        }
    });
    var u = {
        sum: r(t, 0),
        multiply: r(e, 1),
        curry: r
    };
    "undefined" != typeof window && (window.fp = u);
});
