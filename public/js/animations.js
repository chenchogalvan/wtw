/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/animations.js":
/*!************************************!*\
  !*** ./resources/js/animations.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*************************
	 Jarallax
*************************/

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.5
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
!function (o) {
  var n = {};

  function i(e) {
    if (n[e]) return n[e].exports;
    var t = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return o[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports;
  }

  i.m = o, i.c = n, i.d = function (e, t, o) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var o = Object.create(null);
    if (i.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var n in t) {
      i.d(o, n, function (e) {
        return t[e];
      }.bind(null, n));
    }
    return o;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 11);
}([,, function (e, t, o) {
  "use strict";

  e.exports = function (e) {
    "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
      "interactive" === document.readyState && e.call();
    }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e);
  };
},, function (o, e, t) {
  "use strict";

  (function (e) {
    var t;
    t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, o.exports = t;
  }).call(this, t(5));
}, function (e, t, o) {
  "use strict";

  var n,
      i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  };

  n = function () {
    return this;
  }();

  try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window);
  }

  e.exports = n;
},,,,,, function (e, t, o) {
  e.exports = o(12);
}, function (e, t, o) {
  "use strict";

  var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      i = l(o(2)),
      a = o(4),
      r = l(o(13));

  function l(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }

  var s = a.window.jarallax;

  if (a.window.jarallax = r["default"], a.window.jarallax.noConflict = function () {
    return a.window.jarallax = s, this;
  }, void 0 !== a.jQuery) {
    var c = function c() {
      var e = arguments || [];
      Array.prototype.unshift.call(e, this);
      var t = r["default"].apply(a.window, e);
      return "object" !== (void 0 === t ? "undefined" : n(t)) ? t : this;
    };

    c.constructor = r["default"].constructor;
    var u = a.jQuery.fn.jarallax;
    a.jQuery.fn.jarallax = c, a.jQuery.fn.jarallax.noConflict = function () {
      return a.jQuery.fn.jarallax = u, this;
    };
  }

  (0, i["default"])(function () {
    (0, r["default"])(document.querySelectorAll("[data-jarallax]"));
  });
}, function (e, j, S) {
  "use strict";

  (function (e) {
    Object.defineProperty(j, "__esModule", {
      value: !0
    });

    var d = function d(e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return function (e, t) {
        var o = [],
            n = !0,
            i = !1,
            a = void 0;

        try {
          for (var r, l = e[Symbol.iterator](); !(n = (r = l.next()).done) && (o.push(r.value), !t || o.length !== t); n = !0) {
            ;
          }
        } catch (e) {
          i = !0, a = e;
        } finally {
          try {
            !n && l["return"] && l["return"]();
          } finally {
            if (i) throw a;
          }
        }

        return o;
      }(e, t);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    },
        t = function () {
      function n(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }

      return function (e, t, o) {
        return t && n(e.prototype, t), o && n(e, o), e;
      };
    }(),
        p = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        o = a(S(2)),
        n = a(S(14)),
        i = S(4);

    function a(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var s = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/"),
        r = function () {
      for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), o = 0; o < e.length; o++) {
        if (t && void 0 !== t.style[e[o]]) return e[o];
      }

      return !1;
    }(),
        b = void 0,
        v = void 0,
        l = void 0,
        c = !1,
        u = !1;

    function m(e) {
      b = i.window.innerWidth || document.documentElement.clientWidth, v = i.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === e ? "undefined" : p(e)) || "load" !== e.type && "dom-loaded" !== e.type || (c = !0);
    }

    m(), i.window.addEventListener("resize", m), i.window.addEventListener("orientationchange", m), i.window.addEventListener("load", m), (0, o["default"])(function () {
      m({
        type: "dom-loaded"
      });
    });
    var f = [],
        y = !1;

    function g() {
      if (f.length) {
        l = void 0 !== i.window.pageYOffset ? i.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var t = c || !y || y.width !== b || y.height !== v,
            o = u || t || !y || y.y !== l;
        u = c = !1, (t || o) && (f.forEach(function (e) {
          t && e.onResize(), o && e.onScroll();
        }), y = {
          width: b,
          height: v,
          y: l
        }), (0, n["default"])(g);
      }
    }

    var h = !!e.ResizeObserver && new e.ResizeObserver(function (e) {
      e && e.length && (0, n["default"])(function () {
        e.forEach(function (e) {
          e.target && e.target.jarallax && (c || e.target.jarallax.onResize(), u = !0);
        });
      });
    }),
        x = 0,
        w = function () {
      function u(e, t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, u);
        var o = this;
        o.instanceID = x++, o.$item = e, o.defaults = {
          type: "scroll",
          speed: .5,
          imgSrc: null,
          imgElement: ".jarallax-img",
          imgSize: "cover",
          imgPosition: "50% 50%",
          imgRepeat: "no-repeat",
          keepImg: !1,
          elementInViewport: null,
          zIndex: -100,
          disableParallax: !1,
          disableVideo: !1,
          automaticResize: !0,
          videoSrc: null,
          videoStartTime: 0,
          videoEndTime: 0,
          videoVolume: 0,
          videoPlayOnlyVisible: !0,
          onScroll: null,
          onInit: null,
          onDestroy: null,
          onCoverImage: null
        };
        var n = o.$item.getAttribute("data-jarallax"),
            i = JSON.parse(n || "{}");
        n && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
        var a = o.$item.dataset || {},
            r = {};

        if (Object.keys(a).forEach(function (e) {
          var t = e.substr(0, 1).toLowerCase() + e.substr(1);
          t && void 0 !== o.defaults[t] && (r[t] = a[e]);
        }), o.options = o.extend({}, o.defaults, i, r, t), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function (e) {
          "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1);
        }), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), (o.options.noAndroid || o.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), o.options.disableParallax || (o.options.noIos && o.options.noAndroid ? o.options.disableParallax = /iPad|iPhone|iPod|Android/ : o.options.noIos ? o.options.disableParallax = /iPad|iPhone|iPod/ : o.options.noAndroid && (o.options.disableParallax = /Android/))), "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)), o.options.disableParallax instanceof RegExp) {
          var l = o.options.disableParallax;

          o.options.disableParallax = function () {
            return l.test(navigator.userAgent);
          };
        }

        if ("function" != typeof o.options.disableParallax && (o.options.disableParallax = function () {
          return !1;
        }), "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)), o.options.disableVideo instanceof RegExp) {
          var s = o.options.disableVideo;

          o.options.disableVideo = function () {
            return s.test(navigator.userAgent);
          };
        }

        "function" != typeof o.options.disableVideo && (o.options.disableVideo = function () {
          return !1;
        });
        var c = o.options.elementInViewport;
        c && "object" === (void 0 === c ? "undefined" : p(c)) && void 0 !== c.length && (c = d(c, 1)[0]);
        c instanceof Element || (c = null), o.options.elementInViewport = c, o.image = {
          src: o.options.imgSrc || null,
          $container: null,
          useImgTag: !1,
          position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
        }, o.initImg() && o.canInitParallax() && o.init();
      }

      return t(u, [{
        key: "css",
        value: function value(t, o) {
          return "string" == typeof o ? i.window.getComputedStyle(t).getPropertyValue(o) : (o.transform && r && (o[r] = o.transform), Object.keys(o).forEach(function (e) {
            t.style[e] = o[e];
          }), t);
        }
      }, {
        key: "extend",
        value: function value(o) {
          var n = arguments;
          return o = o || {}, Object.keys(arguments).forEach(function (t) {
            n[t] && Object.keys(n[t]).forEach(function (e) {
              o[e] = n[t][e];
            });
          }), o;
        }
      }, {
        key: "getWindowData",
        value: function value() {
          return {
            width: b,
            height: v,
            y: l
          };
        }
      }, {
        key: "initImg",
        value: function value() {
          var e = this,
              t = e.options.imgElement;
          return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src));
        }
      }, {
        key: "canInitParallax",
        value: function value() {
          return r && !this.options.disableParallax();
        }
      }, {
        key: "init",
        value: function value() {
          var e = this,
              t = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "none"
          },
              o = {};

          if (!e.options.keepImg) {
            var n = e.$item.getAttribute("style");

            if (n && e.$item.setAttribute("data-jarallax-original-styles", n), e.image.useImgTag) {
              var i = e.image.$item.getAttribute("style");
              i && e.image.$item.setAttribute("data-jarallax-original-styles", i);
            }
          }

          if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
            position: "relative"
          }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
            zIndex: 0
          }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
            "z-index": e.options.zIndex
          }), s && e.css(e.image.$container, {
            opacity: .9999
          }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? o = e.extend({
            "object-fit": e.options.imgSize,
            "object-position": e.options.imgPosition,
            "font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";",
            "max-width": "none"
          }, t, o) : (e.image.$item = document.createElement("div"), e.image.src && (o = e.extend({
            "background-position": e.options.imgPosition,
            "background-size": e.options.imgSize,
            "background-repeat": e.options.imgRepeat,
            "background-image": 'url("' + e.image.src + '")'
          }, t, o))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) for (var a = 0, r = e.$item; null !== r && r !== document && 0 === a;) {
            var l = e.css(r, "-webkit-transform") || e.css(r, "-moz-transform") || e.css(r, "transform");
            l && "none" !== l && (a = 1, e.image.position = "absolute"), r = r.parentNode;
          }
          o.position = e.image.position, e.css(e.image.$item, o), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.automaticResize && h && h.observe(e.$item), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
            "background-image": "none"
          }), e.addToParallaxList();
        }
      }, {
        key: "addToParallaxList",
        value: function value() {
          f.push(this), 1 === f.length && g();
        }
      }, {
        key: "removeFromParallaxList",
        value: function value() {
          var o = this;
          f.forEach(function (e, t) {
            e.instanceID === o.instanceID && f.splice(t, 1);
          });
        }
      }, {
        key: "destroy",
        value: function value() {
          var e = this;
          e.removeFromParallaxList();
          var t = e.$item.getAttribute("data-jarallax-original-styles");

          if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
            var o = e.image.$item.getAttribute("data-jarallax-original-styles");
            e.image.$item.removeAttribute("data-jarallax-original-styles"), o ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item);
          }

          e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax;
        }
      }, {
        key: "clipContainer",
        value: function value() {
          if ("fixed" === this.image.position) {
            var e = this,
                t = e.image.$container.getBoundingClientRect(),
                o = t.width,
                n = t.height;
            if (!e.$clipStyles) e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);
            var i = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + o + "px " + n + "px 0);\n           clip: rect(0, " + o + "px, " + n + "px, 0);\n        }";
            e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i;
          }
        }
      }, {
        key: "coverImage",
        value: function value() {
          var e = this,
              t = e.image.$container.getBoundingClientRect(),
              o = t.height,
              n = e.options.speed,
              i = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
              a = 0,
              r = o,
              l = 0;
          return i && (a = n < 0 ? n * Math.max(o, v) : n * (o + v), 1 < n ? r = Math.abs(a - v) : n < 0 ? r = a / n + Math.abs(a) : r += Math.abs(v - o) * (1 - n), a /= 2), e.parallaxScrollDistance = a, l = i ? (v - r) / 2 : (o - r) / 2, e.css(e.image.$item, {
            height: r + "px",
            marginTop: l + "px",
            left: "fixed" === e.image.position ? t.left + "px" : "0",
            width: t.width + "px"
          }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
            image: {
              height: r,
              marginTop: l
            },
            container: t
          };
        }
      }, {
        key: "isVisible",
        value: function value() {
          return this.isElementInViewport || !1;
        }
      }, {
        key: "onScroll",
        value: function value(e) {
          var t = this,
              o = t.$item.getBoundingClientRect(),
              n = o.top,
              i = o.height,
              a = {},
              r = o;

          if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= v && r.left <= b, e || t.isElementInViewport) {
            var l = Math.max(0, n),
                s = Math.max(0, i + n),
                c = Math.max(0, -n),
                u = Math.max(0, n + i - v),
                d = Math.max(0, i - (n + i - v)),
                p = Math.max(0, -n + v - i),
                m = 1 - 2 * (v - n) / (v + i),
                f = 1;

            if (i < v ? f = 1 - (c || u) / i : s <= v ? f = s / v : d <= v && (f = d / v), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)", a.opacity = f), "scale" === t.options.type || "scale-opacity" === t.options.type) {
              var y = 1;
              t.options.speed < 0 ? y -= t.options.speed * f : y += t.options.speed * (1 - f), a.transform = "scale(" + y + ") translate3d(0,0,0)";
            }

            if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
              var g = t.parallaxScrollDistance * m;
              "absolute" === t.image.position && (g -= n), a.transform = "translate3d(0," + g + "px,0)";
            }

            t.css(t.image.$item, a), t.options.onScroll && t.options.onScroll.call(t, {
              section: o,
              beforeTop: l,
              beforeTopEnd: s,
              afterTop: c,
              beforeBottom: u,
              beforeBottomEnd: d,
              afterBottom: p,
              visiblePercent: f,
              fromViewportCenter: m
            });
          }
        }
      }, {
        key: "onResize",
        value: function value() {
          this.coverImage(), this.clipContainer();
        }
      }]), u;
    }(),
        $ = function $(e) {
      ("object" === ("undefined" == typeof HTMLElement ? "undefined" : p(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : p(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);

      for (var t = arguments[1], o = Array.prototype.slice.call(arguments, 2), n = e.length, i = 0, a = void 0; i < n; i++) {
        if ("object" === (void 0 === t ? "undefined" : p(t)) || void 0 === t ? e[i].jarallax || (e[i].jarallax = new w(e[i], t)) : e[i].jarallax && (a = e[i].jarallax[t].apply(e[i].jarallax, o)), void 0 !== a) return a;
      }

      return e;
    };

    $.constructor = w, j["default"] = $;
  }).call(this, S(5));
}, function (e, t, o) {
  "use strict";

  var n = o(4),
      i = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || function (e) {
    var t = +new Date(),
        o = Math.max(0, 16 - (t - a)),
        n = setTimeout(e, o);
    return a = t, n;
  },
      a = +new Date();

  var r = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || clearTimeout;
  Function.prototype.bind && (i = i.bind(n), r = r.bind(n)), (e.exports = i).cancel = r;
}]);
/*************************
 Jarallax video
*************************/

/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */

!function (o) {
  var i = {};

  function n(e) {
    if (i[e]) return i[e].exports;
    var t = i[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return o[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports;
  }

  n.m = o, n.c = i, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) {
      n.d(o, i, function (e) {
        return t[e];
      }.bind(null, i));
    }
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 6);
}([,, function (e, t, o) {
  "use strict";

  e.exports = function (e) {
    "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
      "interactive" === document.readyState && e.call();
    }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e);
  };
},, function (o, e, t) {
  "use strict";

  (function (e) {
    var t;
    t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, o.exports = t;
  }).call(this, t(5));
}, function (e, t, o) {
  "use strict";

  var i,
      n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  };

  i = function () {
    return this;
  }();

  try {
    i = i || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (i = window);
  }

  e.exports = i;
}, function (e, t, o) {
  e.exports = o(7);
}, function (e, t, o) {
  "use strict";

  var i = l(o(8)),
      n = l(o(4)),
      a = l(o(2)),
      r = l(o(10));

  function l(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }

  n["default"].VideoWorker = n["default"].VideoWorker || i["default"], (0, r["default"])(), (0, a["default"])(function () {
    "undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-video]"));
  });
}, function (e, t, o) {
  "use strict";

  e.exports = o(9);
}, function (e, t, o) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      a = function () {
    function i(e, t) {
      for (var o = 0; o < t.length; o++) {
        var i = t[o];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    return function (e, t, o) {
      return t && i(e.prototype, t), o && i(e, o), e;
    };
  }();

  function i() {
    this._done = [], this._fail = [];
  }

  i.prototype = {
    execute: function execute(e, t) {
      var o = e.length;

      for (t = Array.prototype.slice.call(t); o--;) {
        e[o].apply(null, t);
      }
    },
    resolve: function resolve() {
      this.execute(this._done, arguments);
    },
    reject: function reject() {
      this.execute(this._fail, arguments);
    },
    done: function done(e) {
      this._done.push(e);
    },
    fail: function fail(e) {
      this._fail.push(e);
    }
  };

  var r = 0,
      l = 0,
      u = 0,
      p = 0,
      s = 0,
      d = new i(),
      y = new i(),
      c = function () {
    function i(e, t) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, i);
      var o = this;
      o.url = e, o.options_default = {
        autoplay: !1,
        loop: !1,
        mute: !1,
        volume: 100,
        showContols: !0,
        startTime: 0,
        endTime: 0
      }, o.options = o.extend({}, o.options_default, t), o.videoID = o.parseURL(e), o.videoID && (o.ID = r++, o.loadAPI(), o.init());
    }

    return a(i, [{
      key: "extend",
      value: function value(o) {
        var i = arguments;
        return o = o || {}, Object.keys(arguments).forEach(function (t) {
          i[t] && Object.keys(i[t]).forEach(function (e) {
            o[e] = i[t][e];
          });
        }), o;
      }
    }, {
      key: "parseURL",
      value: function value(e) {
        var t,
            o,
            i,
            n,
            a,
            r = !(!(t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== t[1].length) && t[1],
            l = !(!(o = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)) || !o[3]) && o[3],
            u = (i = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), n = {}, a = 0, i.forEach(function (e) {
          var t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
          t && t[1] && t[2] && (n["ogv" === t[1] ? "ogg" : t[1]] = t[2], a = 1);
        }), !!a && n);
        return r ? (this.type = "youtube", r) : l ? (this.type = "vimeo", l) : !!u && (this.type = "local", u);
      }
    }, {
      key: "isValid",
      value: function value() {
        return !!this.videoID;
      }
    }, {
      key: "on",
      value: function value(e, t) {
        this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t);
      }
    }, {
      key: "off",
      value: function value(o, i) {
        var n = this;
        this.userEventsList && this.userEventsList[o] && (i ? this.userEventsList[o].forEach(function (e, t) {
          e === i && (n.userEventsList[o][t] = !1);
        }) : delete this.userEventsList[o]);
      }
    }, {
      key: "fire",
      value: function value(e) {
        var t = this,
            o = [].slice.call(arguments, 1);
        this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(function (e) {
          e && e.apply(t, o);
        });
      }
    }, {
      key: "play",
      value: function value(e) {
        var t = this;
        t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(function (e) {
          e && t.player.play();
        })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.paused && t.player.play()));
      }
    }, {
      key: "pause",
      value: function value() {
        var t = this;
        t.player && ("youtube" === t.type && t.player.pauseVideo && YT.PlayerState.PLAYING === t.player.getPlayerState() && t.player.pauseVideo(), "vimeo" === t.type && t.player.getPaused().then(function (e) {
          e || t.player.pause();
        }), "local" === t.type && (t.player.paused || t.player.pause()));
      }
    }, {
      key: "mute",
      value: function value() {
        var e = this;
        e.player && ("youtube" === e.type && e.player.mute && e.player.mute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(0), "local" === e.type && (e.$video.muted = !0));
      }
    }, {
      key: "unmute",
      value: function value() {
        var e = this;
        e.player && ("youtube" === e.type && e.player.mute && e.player.unMute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(e.options.volume), "local" === e.type && (e.$video.muted = !1));
      }
    }, {
      key: "setVolume",
      value: function value() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = this;
        t.player && e && ("youtube" === t.type && t.player.setVolume && t.player.setVolume(e), "vimeo" === t.type && t.player.setVolume && t.player.setVolume(e), "local" === t.type && (t.$video.volume = e / 100));
      }
    }, {
      key: "getVolume",
      value: function value(t) {
        var e = this;
        e.player ? ("youtube" === e.type && e.player.getVolume && t(e.player.getVolume()), "vimeo" === e.type && e.player.getVolume && e.player.getVolume().then(function (e) {
          t(e);
        }), "local" === e.type && t(100 * e.$video.volume)) : t(!1);
      }
    }, {
      key: "getMuted",
      value: function value(t) {
        var e = this;
        e.player ? ("youtube" === e.type && e.player.isMuted && t(e.player.isMuted()), "vimeo" === e.type && e.player.getVolume && e.player.getVolume().then(function (e) {
          t(!!e);
        }), "local" === e.type && t(e.$video.muted)) : t(null);
      }
    }, {
      key: "getImageURL",
      value: function value(t) {
        var o = this;
        if (o.videoImage) t(o.videoImage);else {
          if ("youtube" === o.type) {
            var e = ["maxresdefault", "sddefault", "hqdefault", "0"],
                i = 0,
                n = new Image();
            n.onload = function () {
              120 !== (this.naturalWidth || this.width) || i === e.length - 1 ? (o.videoImage = "https://img.youtube.com/vi/" + o.videoID + "/" + e[i] + ".jpg", t(o.videoImage)) : (i++, this.src = "https://img.youtube.com/vi/" + o.videoID + "/" + e[i] + ".jpg");
            }, n.src = "https://img.youtube.com/vi/" + o.videoID + "/" + e[i] + ".jpg";
          }

          if ("vimeo" === o.type) {
            var a = new XMLHttpRequest();
            a.open("GET", "https://vimeo.com/api/v2/video/" + o.videoID + ".json", !0), a.onreadystatechange = function () {
              if (4 === this.readyState && 200 <= this.status && this.status < 400) {
                var e = JSON.parse(this.responseText);
                o.videoImage = e[0].thumbnail_large, t(o.videoImage);
              }
            }, a.send(), a = null;
          }
        }
      }
    }, {
      key: "getIframe",
      value: function value(e) {
        this.getVideo(e);
      }
    }, {
      key: "getVideo",
      value: function value(u) {
        var p = this;
        p.$video ? u(p.$video) : p.onAPIready(function () {
          var e = void 0;

          if (p.$video || ((e = document.createElement("div")).style.display = "none"), "youtube" === p.type) {
            p.playerOptions = {}, p.playerOptions.videoId = p.videoID, p.playerOptions.playerVars = {
              autohide: 1,
              rel: 0,
              autoplay: 0,
              playsinline: 1
            }, p.options.showContols || (p.playerOptions.playerVars.iv_load_policy = 3, p.playerOptions.playerVars.modestbranding = 1, p.playerOptions.playerVars.controls = 0, p.playerOptions.playerVars.showinfo = 0, p.playerOptions.playerVars.disablekb = 1);
            var t = void 0,
                o = void 0;
            p.playerOptions.events = {
              onReady: function onReady(t) {
                p.options.mute ? t.target.mute() : p.options.volume && t.target.setVolume(p.options.volume), p.options.autoplay && p.play(p.options.startTime), p.fire("ready", t), setInterval(function () {
                  p.getVolume(function (e) {
                    p.options.volume !== e && (p.options.volume = e, p.fire("volumechange", t));
                  });
                }, 150);
              },
              onStateChange: function onStateChange(e) {
                p.options.loop && e.data === YT.PlayerState.ENDED && p.play(p.options.startTime), t || e.data !== YT.PlayerState.PLAYING || (t = 1, p.fire("started", e)), e.data === YT.PlayerState.PLAYING && p.fire("play", e), e.data === YT.PlayerState.PAUSED && p.fire("pause", e), e.data === YT.PlayerState.ENDED && p.fire("ended", e), e.data === YT.PlayerState.PLAYING ? o = setInterval(function () {
                  p.fire("timeupdate", e), p.options.endTime && p.player.getCurrentTime() >= p.options.endTime && (p.options.loop ? p.play(p.options.startTime) : p.pause());
                }, 150) : clearInterval(o);
              }
            };
            var i = !p.$video;

            if (i) {
              var n = document.createElement("div");
              n.setAttribute("id", p.playerID), e.appendChild(n), document.body.appendChild(e);
            }

            p.player = p.player || new window.YT.Player(p.playerID, p.playerOptions), i && (p.$video = document.getElementById(p.playerID), p.videoWidth = parseInt(p.$video.getAttribute("width"), 10) || 1280, p.videoHeight = parseInt(p.$video.getAttribute("height"), 10) || 720);
          }

          if ("vimeo" === p.type) {
            if (p.playerOptions = {
              id: p.videoID,
              autopause: 0,
              transparent: 0,
              autoplay: p.options.autoplay ? 1 : 0,
              loop: p.options.loop ? 1 : 0,
              muted: p.options.mute ? 1 : 0
            }, p.options.volume && (p.playerOptions.volume = p.options.volume), p.options.showContols || (p.playerOptions.badge = 0, p.playerOptions.byline = 0, p.playerOptions.portrait = 0, p.playerOptions.title = 0), !p.$video) {
              var a = "";
              Object.keys(p.playerOptions).forEach(function (e) {
                "" !== a && (a += "&"), a += e + "=" + encodeURIComponent(p.playerOptions[e]);
              }), p.$video = document.createElement("iframe"), p.$video.setAttribute("id", p.playerID), p.$video.setAttribute("src", "https://player.vimeo.com/video/" + p.videoID + "?" + a), p.$video.setAttribute("frameborder", "0"), p.$video.setAttribute("mozallowfullscreen", ""), p.$video.setAttribute("allowfullscreen", ""), e.appendChild(p.$video), document.body.appendChild(e);
            }

            p.player = p.player || new Vimeo.Player(p.$video, p.playerOptions), p.options.startTime && p.options.autoplay && p.player.setCurrentTime(p.options.startTime), p.player.getVideoWidth().then(function (e) {
              p.videoWidth = e || 1280;
            }), p.player.getVideoHeight().then(function (e) {
              p.videoHeight = e || 720;
            });
            var r = void 0;
            p.player.on("timeupdate", function (e) {
              r || (p.fire("started", e), r = 1), p.fire("timeupdate", e), p.options.endTime && p.options.endTime && e.seconds >= p.options.endTime && (p.options.loop ? p.play(p.options.startTime) : p.pause());
            }), p.player.on("play", function (e) {
              p.fire("play", e), p.options.startTime && 0 === e.seconds && p.play(p.options.startTime);
            }), p.player.on("pause", function (e) {
              p.fire("pause", e);
            }), p.player.on("ended", function (e) {
              p.fire("ended", e);
            }), p.player.on("loaded", function (e) {
              p.fire("ready", e);
            }), p.player.on("volumechange", function (e) {
              p.fire("volumechange", e);
            });
          }

          if ("local" === p.type) {
            p.$video || (p.$video = document.createElement("video"), p.options.showContols && (p.$video.controls = !0), p.options.mute ? p.$video.muted = !0 : p.$video.volume && (p.$video.volume = p.options.volume / 100), p.options.loop && (p.$video.loop = !0), p.$video.setAttribute("playsinline", ""), p.$video.setAttribute("webkit-playsinline", ""), p.$video.setAttribute("id", p.playerID), e.appendChild(p.$video), document.body.appendChild(e), Object.keys(p.videoID).forEach(function (e) {
              var t, o, i, n;
              t = p.$video, o = p.videoID[e], i = "video/" + e, (n = document.createElement("source")).src = o, n.type = i, t.appendChild(n);
            })), p.player = p.player || p.$video;
            var l = void 0;
            p.player.addEventListener("playing", function (e) {
              l || p.fire("started", e), l = 1;
            }), p.player.addEventListener("timeupdate", function (e) {
              p.fire("timeupdate", e), p.options.endTime && p.options.endTime && this.currentTime >= p.options.endTime && (p.options.loop ? p.play(p.options.startTime) : p.pause());
            }), p.player.addEventListener("play", function (e) {
              p.fire("play", e);
            }), p.player.addEventListener("pause", function (e) {
              p.fire("pause", e);
            }), p.player.addEventListener("ended", function (e) {
              p.fire("ended", e);
            }), p.player.addEventListener("loadedmetadata", function () {
              p.videoWidth = this.videoWidth || 1280, p.videoHeight = this.videoHeight || 720, p.fire("ready"), p.options.autoplay && p.play(p.options.startTime);
            }), p.player.addEventListener("volumechange", function (e) {
              p.getVolume(function (e) {
                p.options.volume = e;
              }), p.fire("volumechange", e);
            });
          }

          u(p.$video);
        });
      }
    }, {
      key: "init",
      value: function value() {
        this.playerID = "VideoWorker-" + this.ID;
      }
    }, {
      key: "loadAPI",
      value: function value() {
        if (!l || !u) {
          var e = "";

          if ("youtube" !== this.type || l || (l = 1, e = "https://www.youtube.com/iframe_api"), "vimeo" !== this.type || u || (u = 1, e = "https://player.vimeo.com/api/player.js"), e) {
            var t = document.createElement("script"),
                o = document.getElementsByTagName("head")[0];
            t.src = e, o.appendChild(t), t = o = null;
          }
        }
      }
    }, {
      key: "onAPIready",
      value: function value(e) {
        if ("youtube" === this.type && ("undefined" != typeof YT && 0 !== YT.loaded || p ? "object" === ("undefined" == typeof YT ? "undefined" : n(YT)) && 1 === YT.loaded ? e() : d.done(function () {
          e();
        }) : (p = 1, window.onYouTubeIframeAPIReady = function () {
          window.onYouTubeIframeAPIReady = null, d.resolve("done"), e();
        })), "vimeo" === this.type) if ("undefined" != typeof Vimeo || s) "undefined" != typeof Vimeo ? e() : y.done(function () {
          e();
        });else {
          s = 1;
          var t = setInterval(function () {
            "undefined" != typeof Vimeo && (clearInterval(t), y.resolve("done"), e());
          }, 20);
        }
        "local" === this.type && e();
      }
    }]), i;
  }();

  t["default"] = c;
}, function (e, t, o) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function () {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : u["default"].jarallax;
    if (void 0 === e) return;
    var t = e.constructor,
        i = t.prototype.init;

    t.prototype.init = function () {
      var o = this;
      i.apply(o), o.video && !o.options.disableVideo() && o.video.getVideo(function (e) {
        var t = e.parentNode;
        o.css(e, {
          position: o.image.position,
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          width: "100%",
          height: "100%",
          maxWidth: "none",
          maxHeight: "none",
          margin: 0,
          zIndex: -1
        }), o.$video = e, o.image.$container.appendChild(e), t.parentNode.removeChild(t);
      });
    };

    var l = t.prototype.coverImage;

    t.prototype.coverImage = function () {
      var e = this,
          t = l.apply(e),
          o = !!e.image.$item && e.image.$item.nodeName;

      if (t && e.video && o && ("IFRAME" === o || "VIDEO" === o)) {
        var i = t.image.height,
            n = i * e.image.width / e.image.height,
            a = (t.container.width - n) / 2,
            r = t.image.marginTop;
        t.container.width > n && (n = t.container.width, i = n * e.image.height / e.image.width, a = 0, r += (t.image.height - i) / 2), "IFRAME" === o && (i += 400, r -= 200), e.css(e.$video, {
          width: n + "px",
          marginLeft: a + "px",
          height: i + "px",
          marginTop: r + "px"
        });
      }

      return t;
    };

    var o = t.prototype.initImg;

    t.prototype.initImg = function () {
      var e = this,
          t = o.apply(e);
      return e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || null), e.options.videoSrc ? (e.defaultInitImgResult = t, !0) : t;
    };

    var n = t.prototype.canInitParallax;

    t.prototype.canInitParallax = function () {
      var o = this,
          e = n.apply(o);
      if (!o.options.videoSrc) return e;
      var t = new r["default"](o.options.videoSrc, {
        autoplay: !0,
        loop: !0,
        showContols: !1,
        startTime: o.options.videoStartTime || 0,
        endTime: o.options.videoEndTime || 0,
        mute: o.options.videoVolume ? 0 : 1,
        volume: o.options.videoVolume || 0
      });
      if (t.isValid()) if (e) {
        if (t.on("ready", function () {
          if (o.options.videoPlayOnlyVisible) {
            var e = o.onScroll;

            o.onScroll = function () {
              e.apply(o), o.isVisible() ? t.play() : t.pause();
            };
          } else t.play();
        }), t.on("started", function () {
          o.image.$default_item = o.image.$item, o.image.$item = o.$video, o.image.width = o.video.videoWidth || 1280, o.image.height = o.video.videoHeight || 720, o.options.imgWidth = o.image.width, o.options.imgHeight = o.image.height, o.coverImage(), o.clipContainer(), o.onScroll(), o.image.$default_item && (o.image.$default_item.style.display = "none");
        }), o.video = t, !o.defaultInitImgResult) return "local" !== t.type ? (t.getImageURL(function (e) {
          o.image.src = e, o.init();
        }), !1) : (o.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0);
      } else o.defaultInitImgResult || t.getImageURL(function (e) {
        var t = o.$item.getAttribute("style");
        t && o.$item.setAttribute("data-jarallax-original-styles", t), o.css(o.$item, {
          "background-image": 'url("' + e + '")',
          "background-position": "center",
          "background-size": "cover"
        });
      });
      return e;
    };

    var a = t.prototype.destroy;

    t.prototype.destroy = function () {
      var e = this;
      e.image.$default_item && (e.image.$item = e.image.$default_item, delete e.image.$default_item), a.apply(e);
    };
  };
  var r = i(o(8)),
      u = i(o(4));

  function i(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }
}]);

/***/ }),

/***/ 1:
/*!******************************************!*\
  !*** multi ./resources/js/animations.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\wtw\resources\js\animations.js */"./resources/js/animations.js");


/***/ })

/******/ });