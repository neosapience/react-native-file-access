"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dirs = exports.FileSystem = void 0;

var _reactNative = require("react-native");

var _native = require("./native");

var _NativeModules$RNFile;

const FileSystem = {
  /**
   * Append content to a file.
   *
   * Default encoding of `data` is assumed utf8.
   */
  appendFile(path, data, encoding = 'utf8') {
    return _native.FileAccessNative.appendFile(path, data, encoding);
  },

  /**
   * Append a file to another file.
   *
   * Returns number of bytes written.
   */
  concatFiles(source, target) {
    return _native.FileAccessNative.concatFiles(source, target);
  },

  /**
   * Copy a file.
   */
  cp(source, target) {
    return _native.FileAccessNative.cp(source, target);
  },

  /**
   * Copy a bundled asset file.
   *
   * When using Android asset type 'resource', include the folder, but skip the
   * file extension. For example use 'raw/foo', for the file 'res/raw/foo.txt'.
   * When possible, prefer using the 'assets/' folder; files in 'res/' have
   * naming restrictions imposed by Android.
   * https://developer.android.com/guide/topics/resources/providing-resources.html#OriginalFiles
   */
  cpAsset(asset, target, type = 'asset') {
    return _reactNative.Platform.OS === 'android' ? _native.FileAccessNative.cpAsset(asset, target, type) : _native.FileAccessNative.cpAsset(asset, target);
  },

  /**
   * Copy a file to an externally controlled location.
   *
   * On Android API level < 29, may require permission WRITE_EXTERNAL_STORAGE.
   */
  cpExternal(source, targetName, dir, subDir) {
    return _native.FileAccessNative.cpExternal(source, targetName, dir, subDir);
  },

  /**
   * Check device available space.
   */
  df() {
    return _native.FileAccessNative.df();
  },

  /**
   * Check if a path exists.
   */
  exists(path) {
    return _native.FileAccessNative.exists(path);
  },

  /**
   * Save a network request to a file.
   */
  fetch(resource, init) {
    return _native.FileAccessNative.fetch(resource, init);
  },

  /**
   * Return the local storage directory for app groups.
   *
   * This is an Apple only feature.
   */
  getAppGroupDir(groupName) {
    if (_reactNative.Platform.OS !== 'ios' && _reactNative.Platform.OS !== 'macos') {
      return Promise.reject(new Error('AppGroups are available on Apple devices only'));
    }

    return _native.FileAccessNative.getAppGroupDir(groupName);
  },

  /**
   * Hash the file content.
   */
  hash(path, algorithm) {
    return _native.FileAccessNative.hash(path, algorithm);
  },

  /**
   * Check if a path is a directory.
   */
  isDir(path) {
    return _native.FileAccessNative.isDir(path);
  },

  /**
   * List files in a directory.
   */
  ls(path) {
    return _native.FileAccessNative.ls(path);
  },

  /**
   * Make a new directory.
   */
  mkdir(path) {
    return _native.FileAccessNative.mkdir(path);
  },

  /**
   * Move a file.
   */
  mv(source, target) {
    return _native.FileAccessNative.mv(source, target);
  },

  /**
   * Read the content of a file.
   */
  readFile(path, encoding = 'utf8') {
    return _native.FileAccessNative.readFile(path, encoding);
  },

  /**
   * Read file metadata.
   */
  stat(path) {
    return _native.FileAccessNative.stat(path);
  },

  /**
   * Delete a file.
   */
  unlink(path) {
    return _native.FileAccessNative.unlink(path);
  },

  /**
   * Write content to a file.
   *
   * Default encoding of `data` is assumed utf8.
   */
  writeFile(path, data, encoding = 'utf8') {
    return _native.FileAccessNative.writeFile(path, data, encoding);
  }

};
/**
 * Directory constants.
 */

exports.FileSystem = FileSystem;
const Dirs = (_NativeModules$RNFile = _reactNative.NativeModules.RNFileAccess) === null || _NativeModules$RNFile === void 0 ? void 0 : _NativeModules$RNFile.getConstants();
exports.Dirs = Dirs;
//# sourceMappingURL=index.js.map