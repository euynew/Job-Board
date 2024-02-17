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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/index.jsx":
/*!****************************************!*\
  !*** ./app/javascript/packs/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/raymond.li/Desktop/projects/job-ruby/app/javascript/packs/index.jsx: Support for the experimental syntax 'jsx' isn't currently enabled (8:5):\n\n   6 | document.addEventListener('DOMContentLoaded', () => {\n   7 |   ReactDOM.render(\n>  8 |     <Router>\n     |     ^\n   9 |       <Route path=\"/\" component={App}/>\n  10 |     </Router>,\n  11 |     document.body.appendChild(document.createElement('div')),\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n    at constructor (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:356:19)\n    at Parser.raise (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:3223:19)\n    at Parser.expectOnePlugin (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:3269:18)\n    at Parser.parseExprAtom (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:11218:18)\n    at Parser.parseExprSubscripts (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10857:23)\n    at Parser.parseUpdate (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10840:21)\n    at Parser.parseMaybeUnary (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10816:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10654:61)\n    at Parser.parseExprOps (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10659:23)\n    at Parser.parseMaybeConditional (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10636:23)\n    at Parser.parseMaybeAssign (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10597:21)\n    at /Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10567:39\n    at Parser.allowInAnd (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:12284:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10567:17)\n    at Parser.parseExprListItem (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:12020:18)\n    at Parser.parseCallExpressionArguments (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:11054:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10964:29)\n    at Parser.parseSubscript (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10899:19)\n    at Parser.parseSubscripts (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10870:19)\n    at Parser.parseExprSubscripts (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10861:17)\n    at Parser.parseUpdate (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10840:21)\n    at Parser.parseMaybeUnary (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10816:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10654:61)\n    at Parser.parseExprOps (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10659:23)\n    at Parser.parseMaybeConditional (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10636:23)\n    at Parser.parseMaybeAssign (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10597:21)\n    at Parser.parseExpressionBase (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10551:23)\n    at /Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10547:39\n    at Parser.allowInAnd (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:12279:16)\n    at Parser.parseExpression (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10547:17)\n    at Parser.parseStatementContent (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:12737:23)\n    at Parser.parseStatementLike (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:12588:17)\n    at Parser.parseStatementListItem (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:12568:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:13189:61)\n    at Parser.parseBlockBody (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:13182:10)\n    at Parser.parseBlock (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:13170:10)\n    at Parser.parseFunctionBody (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:11935:24)\n    at Parser.parseArrowExpression (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:11910:10)\n    at Parser.parseParenAndDistinguishExpression (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:11511:12)\n    at Parser.parseExprAtom (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:11137:23)\n    at Parser.parseExprSubscripts (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10857:23)\n    at Parser.parseUpdate (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10840:21)\n    at Parser.parseMaybeUnary (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10816:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10654:61)\n    at Parser.parseExprOps (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10659:23)\n    at Parser.parseMaybeConditional (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10636:23)\n    at Parser.parseMaybeAssign (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10597:21)\n    at /Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10567:39\n    at Parser.allowInAnd (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:12284:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/raymond.li/Desktop/projects/job-ruby/node_modules/@babel/parser/lib/index.js:10567:17)");

/***/ })

/******/ });
//# sourceMappingURL=index-7a4e09ae733cfa22491c.js.map