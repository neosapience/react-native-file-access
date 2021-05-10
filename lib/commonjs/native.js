"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileAccessNative = void 0;

var _reactNative = require("react-native");

/**
 * Native module API.
 *
 * Most functions are the same as the JS wrapper. However native calls do
 * not support default parameters.
 */
const FileAccessNative = _reactNative.NativeModules.RNFileAccess;
exports.FileAccessNative = FileAccessNative;
//# sourceMappingURL=native.js.map