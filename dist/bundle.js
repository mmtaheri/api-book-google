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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"*{box-sizing:border-box}\\r\\nbody{display:flex;min-height:100vh;flex-direction:column;margin:0}\\r\\n.wrap{display:flex;flex:1;flex-direction:column;padding:1em}\\r\\narticle,.article-box{flex:1}\\r\\nheader,footer{background:#9acd32;height:10vh}\\r\\nheader,footer,nav,aside{padding:1em}\\r\\n.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}\\r\\n.book-column{position:relative;width:100%;padding-right:15px;padding-left:15px}\\r\\n.container{width:100%;margin:auto}\\r\\n.book-card-image img{width:auto;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;vertical-align:middle;border-style:none}\\r\\n.book-card-image{min-height:12em}\\r\\n.book-card{background:#fff;padding:15px;border:1px solid #e1e5f1;text-align:center;border-top:3px solid #3ecfac;margin-bottom:1em}\\r\\n.book-badge{display:inline-block;padding:.25em .5em;font-size:80%;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.35rem}\\r\\n.book-badge-blue{color:#fff;background-color:#17a2b8}\\r\\n.book-badge-green{color:#fff;background-color:#28a745}\\r\\n.book-hight-text{min-height:2.4em;margin:8px 0}\\r\\n.book-id-number{margin:12px 0;color:#848484}\\r\\n.book-.author{color:#138da0}\\r\\n.search-input-field{width:30%;position:relative;display:flex;margin-left:auto}\\r\\n.search-input-field .btn-search{width:70px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:0;height:100%;background:#eee;border:0;padding:0;cursor:pointer;display:flex;-ms-flex-pack:center;justify-content:center;align-items:center;border-top-left-radius:34px;border-bottom-left-radius:34px}\\r\\n.search-input-field input{height:100%;width:100%;background:transparent;border:0;background:#fff;display:block;width:100%;padding:10px 32px 10px 80px;font-size:18px;color:#666;border-radius:34px}\\r\\n[type=\\\"button\\\"],[type=\\\"submit\\\"]{-webkit-appearance:button}\\r\\n:focus{outline:none}\\r\\n.search-input-field input{height:100%;width:100%;background:transparent;border:0;background:#fff;display:block;width:100%;padding:10px 32px 10px 80px;font-size:18px;color:#666;border-radius:34px}\\r\\n.btn-search svg{fill:#aaa;width:30px;height:30px;transition:all .2s ease-out,color .2s ease-out}\\r\\nsvg:not(:root){overflow:hidden}\\r\\n#spinner{visibility:hidden;width:80px;height:80px;border:2px solid #f3f3f3;border-top:3px solid #f25a41;border-radius:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;animation:spin 1s infinite linear}\\r\\n@keyframes spin {\\r\\nfrom{transform:rotate(0deg)}\\r\\nto{transform:rotate(360deg)}\\r\\n}\\r\\n#spinner.show{visibility:visible}\\r\\n#spinner.hide{visibility:visible}\\r\\n@media (min-width: 576px) {\\r\\n.book-column{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}\\r\\n.wrap{flex-direction:column}\\r\\n.container{max-width:540px}\\r\\n}\\r\\n@media (min-width: 768px) {\\r\\n.book-column{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}\\r\\n.container{max-width:720px}\\r\\n}\\r\\n@media (min-width: 992px) {\\r\\n.book-column{-ms-flex:0 0 33.3%;flex:0 0 33.3%;max-width:33.3%}\\r\\n.container{max-width:960px}\\r\\n}\\r\\n@media (min-width: 1200px) {\\r\\n.book-column{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}\\r\\n.container{max-width:1180px}\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/loader.js":
/*!**********************************!*\
  !*** ./src/components/loader.js ***!
  \**********************************/
/*! exports provided: loaderShow, loaderHide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderShow\", function() { return loaderShow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderHide\", function() { return loaderHide; });\n  let boxLoader = document.createElement('div')\r\n  boxLoader.setAttribute(\"id\",\"spinner\")\r\n  let selLoaderToWrap = document.querySelector('.wrap');\r\n  selLoaderToWrap.append(boxLoader)\r\n const loaderShow = isLoad => {\r\n    boxLoader.classList.add(isLoad);\r\n    }\r\n const loaderHide = notLoad =>{\r\n    boxLoader.classList.remove(notLoad);\r\n    }\r\n\r\n  \r\n \r\n\r\n\n\n//# sourceURL=webpack:///./src/components/loader.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loader.js */ \"./src/components/loader.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n  ///WAY  2////\r\n  let ul = document.createElement('ul');\r\n  ul.setAttribute('style','padding:0')\r\n  ul.setAttribute('class','row')\r\n  let html = '';\r\n\r\n  \r\n  function search(query) {\r\n    Object(_components_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"loaderShow\"])('show')\r\n    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)\r\n    .then(response => {\r\n        if(!response.ok){\r\n            throw new Error(\"Could load json.\");\r\n        } \r\n        return response.json()\r\n    }) // Transform data to json\r\n    .then(data =>  {\r\n      \r\n      console.log(data)\r\n      let listItem = data.items; // Get data\r\n      Object(_components_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"loaderHide\"])('show');\r\n  \r\n    // Map each\r\n    return listItem.map((listItem) => { \r\n  \r\n    //generate HTML\r\n  let htmlsec = `<div class=\"book-column \">\r\n  <div class=\"book-card\">\r\n    <div class=\"book-list-content\">\r\n        <div class=\"book-card-image\">\r\n            <img src=${listItem.volumeInfo.imageLinks.thumbnail} alt=\"\"> \r\n        </div>\r\n        <div class=\"book-card-body\">\r\n            <div class=\"book-header\">\r\n                <h4 class=\"book-title book-hight-text\">Title: ${listItem.volumeInfo.title.substr(0,40)}</h4>\r\n                <h4 class=\"book-author book-hight-text\">Author: ${listItem.volumeInfo.authors}</h4>\r\n                <h4 class=\"book-el-link book-hight-text\"><a href=\"${listItem.volumeInfo.canonicalVolumeLink}\" >${listItem.volumeInfo.title} </a></h4>\r\n            </div>\r\n            <div class=\"book-details\">\r\n                <h5 class=\"book-publisher book-hight-text\">Publisher: ${listItem.volumeInfo.publisher}</h5>\r\n                <h5 class=\"book-id-number\">Id Number: ${listItem.id}</h5>\r\n            </div>\r\n            <div class=\"\">\r\n               <span class=\"book-badge book-badge-blue\"> ${listItem.volumeInfo.pageCount} p </span>\r\n               <span class=\"book-badge book-badge-green\"> ${listItem.volumeInfo.language} </span>\r\n               <span class=\"book-badge book-badge-red\"> #${listItem.volumeInfo.categories} </span>\r\n            \r\n            \r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  </div>`;\r\n  \r\n  html += htmlsec;\r\n  \r\n  let rows = document.querySelector('.row');\r\n  rows.innerHTML = html;\r\n    })\r\n  \r\n  })\r\n  .catch(function(error) {\r\n    console.log(error);\r\n  }); \r\n  \r\n  let html = '';\r\n  \r\n  }\r\n\r\n\r\n  search('[]')\r\n  //////\r\n  let inputs = document.querySelector('.search');\r\n  let btnSearch = document.querySelector('.btn-search'); \r\n  \r\n  console.log(inputs)\r\n  //let vals = inputs.value;\r\n  //console.log(vals)\r\n//   inputs.addEventListener('input', evt => {\r\n//       const value = inputs.value.trim()\r\n//       if(value){\r\n//          search(value);\r\n//           //console.log('fill')\r\n     \r\n//       }else {\r\n//         //console.log('unfill');\r\n//         search('[]')\r\n//       }\r\n   \r\n//   })\r\nbtnSearch.addEventListener('click', evt => {\r\n    const value = inputs.value.trim()\r\n    if(value){\r\n       search(value);\r\n    }else {\r\n      search('[]')\r\n    }\r\n \r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });