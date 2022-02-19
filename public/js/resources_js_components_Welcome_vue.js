(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Welcome_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Welcome.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Welcome.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_fingerprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fingerprint */ "./resources/js/utils/fingerprint.js");
/* harmony import */ var _utils_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hash */ "./resources/js/utils/hash.js");
/* harmony import */ var _utils_hash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_hash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: null
    };
  },
  mounted: function mounted() {
    var id = (0,_utils_fingerprint__WEBPACK_IMPORTED_MODULE_0__["default"])({
      debug: false
    });
    this.id = _utils_hash__WEBPACK_IMPORTED_MODULE_1___default()(JSON.stringify(id));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Welcome.vue?vue&type=template&id=51777872":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Welcome.vue?vue&type=template&id=51777872 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "h-screen mx-0 bg-sky-700 flex"
};
var _hoisted_2 = {
  "class": "text-left self-center mx-12 px-12"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-7xl font-sans font-bold text-white py-2"
}, "Welcome !", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-white text-2xl"
}, "On our browser fingerprinting website.", -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "animate-bounce my-12 font-bold text-3xl text-red-600"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Now we know you, but who are we ? "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "underline"
}, "That's a secret we'll never tell"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, _hoisted_4, $data.id != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.id), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_6])]);
}

/***/ }),

/***/ "./resources/js/utils/fingerprint.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/fingerprint.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getCanvasID": () => (/* binding */ getCanvasID),
/* harmony export */   "getWebglID": () => (/* binding */ getWebglID),
/* harmony export */   "getWebglInfo": () => (/* binding */ getWebglInfo),
/* harmony export */   "murmurhash3_32_gc": () => (/* binding */ murmurhash3_32_gc)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$enableWebgl = _ref.enableWebgl,
      enableWebgl = _ref$enableWebgl === void 0 ? false : _ref$enableWebgl,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug;

  var _window = window,
      devicePixelRatio = _window.devicePixelRatio; // weird behaviour when getting value from localhost vs ip!!!

  devicePixelRatio = +parseInt(devicePixelRatio);
  var _window$navigator = window.navigator,
      appName = _window$navigator.appName,
      appCodeName = _window$navigator.appCodeName,
      appVersion = _window$navigator.appVersion,
      cookieEnabled = _window$navigator.cookieEnabled,
      deviceMemory = _window$navigator.deviceMemory,
      doNotTrack = _window$navigator.doNotTrack,
      hardwareConcurrency = _window$navigator.hardwareConcurrency,
      language = _window$navigator.language,
      languages = _window$navigator.languages,
      maxTouchPoints = _window$navigator.maxTouchPoints,
      platform = _window$navigator.platform,
      product = _window$navigator.product,
      productSub = _window$navigator.productSub,
      userAgent = _window$navigator.userAgent,
      vendor = _window$navigator.vendor,
      vendorSub = _window$navigator.vendorSub,
      webdriver = _window$navigator.webdriver;
  var plugins = Object.entries(window.navigator.plugins).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        plugin = _ref3[1];

    return plugin.name;
  });
  var mimeTypes = Object.entries(window.navigator.mimeTypes).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        mimeType = _ref5[1];

    return mimeType.type;
  });
  var _window$screen = window.screen,
      width = _window$screen.width,
      height = _window$screen.height,
      colorDepth = _window$screen.colorDepth,
      pixelDepth = _window$screen.pixelDepth;
  var timezoneOffset = new Date().getTimezoneOffset();
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var touchSupport = ('ontouchstart' in window);
  var canvas = getCanvasID(debug);
  var webgl = enableWebgl ? getWebglID(debug) : null;
  var webglInfo = getWebglInfo(debug);
  var data = {
    devicePixelRatio: devicePixelRatio,
    appName: appName,
    appCodeName: appCodeName,
    appVersion: appVersion,
    cookieEnabled: cookieEnabled,
    deviceMemory: deviceMemory,
    doNotTrack: doNotTrack,
    hardwareConcurrency: hardwareConcurrency,
    language: language,
    languages: languages,
    maxTouchPoints: maxTouchPoints,
    mimeTypes: mimeTypes,
    platform: platform,
    plugins: plugins,
    product: product,
    productSub: productSub,
    userAgent: userAgent,
    vendor: vendor,
    vendorSub: vendorSub,
    webdriver: webdriver,
    width: width,
    height: height,
    colorDepth: colorDepth,
    pixelDepth: pixelDepth,
    timezoneOffset: timezoneOffset,
    timezone: timezone,
    touchSupport: touchSupport,
    canvas: canvas,
    webgl: webgl,
    webglInfo: webglInfo
  };
  var datastring = JSON.stringify(data, null, 4);
  if (debug) console.log('fingerprint data', datastring);
  return datastring;
});
var getCanvasID = function getCanvasID(debug) {
  try {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:',<.>/?";
    ctx.textBaseline = 'top';
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText(text, 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText(text, 4, 17);
    var result = canvas.toDataURL();

    if (debug) {
      document.body.appendChild(canvas);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return murmurhash3_32_gc(result);
  } catch (_unused) {
    return null;
  }
};
var getWebglID = function getWebglID(debug) {
  try {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('webgl');
    canvas.width = 256;
    canvas.height = 128;
    var f = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}';
    var g = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}';
    var h = ctx.createBuffer();
    ctx.bindBuffer(ctx.ARRAY_BUFFER, h);
    var i = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.7321, 0]);
    ctx.bufferData(ctx.ARRAY_BUFFER, i, ctx.STATIC_DRAW), h.itemSize = 3, h.numItems = 3;
    var j = ctx.createProgram();
    var k = ctx.createShader(ctx.VERTEX_SHADER);
    ctx.shaderSource(k, f);
    ctx.compileShader(k);
    var l = ctx.createShader(ctx.FRAGMENT_SHADER);
    ctx.shaderSource(l, g);
    ctx.compileShader(l);
    ctx.attachShader(j, k);
    ctx.attachShader(j, l);
    ctx.linkProgram(j);
    ctx.useProgram(j);
    j.vertexPosAttrib = ctx.getAttribLocation(j, 'attrVertex');
    j.offsetUniform = ctx.getUniformLocation(j, 'uniformOffset');
    ctx.enableVertexAttribArray(j.vertexPosArray);
    ctx.vertexAttribPointer(j.vertexPosAttrib, h.itemSize, ctx.FLOAT, !1, 0, 0);
    ctx.uniform2f(j.offsetUniform, 1, 1);
    ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, h.numItems);
    var n = new Uint8Array(canvas.width * canvas.height * 4);
    ctx.readPixels(0, 0, canvas.width, canvas.height, ctx.RGBA, ctx.UNSIGNED_BYTE, n);
    var result = JSON.stringify(n).replace(/,?"[0-9]+":/g, '');

    if (debug) {
      document.body.appendChild(canvas);
    } else {
      ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT | ctx.STENCIL_BUFFER_BIT);
    }

    return murmurhash3_32_gc(result);
  } catch (_unused2) {
    return null;
  }
};
var getWebglInfo = function getWebglInfo() {
  try {
    var ctx = document.createElement('canvas').getContext('webgl');
    var result = {
      VERSION: ctx.getParameter(ctx.VERSION),
      SHADING_LANGUAGE_VERSION: ctx.getParameter(ctx.SHADING_LANGUAGE_VERSION),
      VENDOR: ctx.getParameter(ctx.VENDOR),
      SUPORTED_EXTENSIONS: ctx.getSupportedExtensions()
    };
    return result;
  } catch (_unused3) {
    return null;
  }
};
var murmurhash3_32_gc = function murmurhash3_32_gc(key) {
  var remainder = key.length & 3; // key.length % 4

  var bytes = key.length - remainder;
  var c1 = 0xcc9e2d51;
  var c2 = 0x1b873593;
  var h1, h1b, k1;

  for (var _i2 = 0; _i2 < bytes; _i2++) {
    k1 = key.charCodeAt(_i2) & 0xff | (key.charCodeAt(++_i2) & 0xff) << 8 | (key.charCodeAt(++_i2) & 0xff) << 16 | (key.charCodeAt(++_i2) & 0xff) << 24;
    ++_i2;
    k1 = (k1 & 0xffff) * c1 + (((k1 >>> 16) * c1 & 0xffff) << 16) & 0xffffffff;
    k1 = k1 << 15 | k1 >>> 17;
    k1 = (k1 & 0xffff) * c2 + (((k1 >>> 16) * c2 & 0xffff) << 16) & 0xffffffff;
    h1 ^= k1;
    h1 = h1 << 13 | h1 >>> 19;
    h1b = (h1 & 0xffff) * 5 + (((h1 >>> 16) * 5 & 0xffff) << 16) & 0xffffffff;
    h1 = (h1b & 0xffff) + 0x6b64 + (((h1b >>> 16) + 0xe654 & 0xffff) << 16);
  }

  var i = bytes - 1;
  k1 = 0;

  switch (remainder) {
    case 3:
      {
        k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        break;
      }

    case 2:
      {
        k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        break;
      }

    case 1:
      {
        k1 ^= key.charCodeAt(i) & 0xff;
        break;
      }
  }

  k1 = (k1 & 0xffff) * c1 + (((k1 >>> 16) * c1 & 0xffff) << 16) & 0xffffffff;
  k1 = k1 << 15 | k1 >>> 17;
  k1 = (k1 & 0xffff) * c2 + (((k1 >>> 16) * c2 & 0xffff) << 16) & 0xffffffff;
  h1 ^= k1;
  h1 ^= key.length;
  h1 ^= h1 >>> 16;
  h1 = (h1 & 0xffff) * 0x85ebca6b + (((h1 >>> 16) * 0x85ebca6b & 0xffff) << 16) & 0xffffffff;
  h1 ^= h1 >>> 13;
  h1 = (h1 & 0xffff) * 0xc2b2ae35 + (((h1 >>> 16) * 0xc2b2ae35 & 0xffff) << 16) & 0xffffffff;
  h1 ^= h1 >>> 16;
  return h1 >>> 0;
};

/***/ }),

/***/ "./resources/js/utils/hash.js":
/*!************************************!*\
  !*** ./resources/js/utils/hash.js ***!
  \************************************/
/***/ ((module) => {

/**
 * An improved implementation of djb2 hash function.
 * http://www.cse.yorku.ca/~oz/hash.html
 * 
 * @param {*} str object to hash
 * @returns 64 bit integer
 */
function hash(str) {
  var i = str.length;
  var hash1 = 5381;
  var hash2 = 52711;

  while (i--) {
    var _char = str.charCodeAt(i);

    hash1 = hash1 * 33 ^ _char;
    hash2 = hash2 * 33 ^ _char;
  }

  hash = (hash1 >>> 0) * 4096 + (hash2 >>> 0);
  return extract(hash, 40); // take first 40 bits
}
/**
 * Extract k first bits from a number
 * @param {*} n initial number
 * @param {*} k number of bits to extract
 */


function extract(n, k) {
  return (1 << k) - 1 & n;
}

module.exports = hash;

/***/ }),

/***/ "./resources/js/components/Welcome.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Welcome.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Welcome_vue_vue_type_template_id_51777872__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=51777872 */ "./resources/js/components/Welcome.vue?vue&type=template&id=51777872");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js */ "./resources/js/components/Welcome.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Welcome_vue_vue_type_template_id_51777872__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Welcome.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Welcome.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Welcome.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Welcome.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Welcome.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Welcome.vue?vue&type=template&id=51777872":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Welcome.vue?vue&type=template&id=51777872 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_template_id_51777872__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_template_id_51777872__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Welcome.vue?vue&type=template&id=51777872 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Welcome.vue?vue&type=template&id=51777872");


/***/ })

}]);