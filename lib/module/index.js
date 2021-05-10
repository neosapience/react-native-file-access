var _NativeModules$RNFile;

import { NativeModules, Platform } from 'react-native';
import { FileAccessNative } from './native';
export const FileSystem = {
  /**
   * Append content to a file.
   *
   * Default encoding of `data` is assumed utf8.
   */
  appendFile(path, data, encoding = 'utf8') {
    return FileAccessNative.appendFile(path, data, encoding);
  },

  /**
   * Append a file to another file.
   *
   * Returns number of bytes written.
   */
  concatFiles(source, target) {
    return FileAccessNative.concatFiles(source, target);
  },

  /**
   * Copy a file.
   */
  cp(source, target) {
    return FileAccessNative.cp(source, target);
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
    return Platform.OS === 'android' ? FileAccessNative.cpAsset(asset, target, type) : FileAccessNative.cpAsset(asset, target);
  },

  /**
   * Copy a file to an externally controlled location.
   *
   * On Android API level < 29, may require permission WRITE_EXTERNAL_STORAGE.
   */
  cpExternal(source, targetName, dir, subDir) {
    return FileAccessNative.cpExternal(source, targetName, dir, subDir);
  },

  /**
   * Check device available space.
   */
  df() {
    return FileAccessNative.df();
  },

  /**
   * Check if a path exists.
   */
  exists(path) {
    return FileAccessNative.exists(path);
  },

  /**
   * Save a network request to a file.
   */
  fetch(resource, init) {
    return FileAccessNative.fetch(resource, init);
  },

  /**
   * Return the local storage directory for app groups.
   *
   * This is an Apple only feature.
   */
  getAppGroupDir(groupName) {
    if (Platform.OS !== 'ios' && Platform.OS !== 'macos') {
      return Promise.reject(new Error('AppGroups are available on Apple devices only'));
    }

    return FileAccessNative.getAppGroupDir(groupName);
  },

  /**
   * Hash the file content.
   */
  hash(path, algorithm) {
    return FileAccessNative.hash(path, algorithm);
  },

  /**
   * Check if a path is a directory.
   */
  isDir(path) {
    return FileAccessNative.isDir(path);
  },

  /**
   * List files in a directory.
   */
  ls(path) {
    return FileAccessNative.ls(path);
  },

  /**
   * Make a new directory.
   */
  mkdir(path) {
    return FileAccessNative.mkdir(path);
  },

  /**
   * Move a file.
   */
  mv(source, target) {
    return FileAccessNative.mv(source, target);
  },

  /**
   * Read the content of a file.
   */
  readFile(path, encoding = 'utf8') {
    return FileAccessNative.readFile(path, encoding);
  },

  /**
   * Read file metadata.
   */
  stat(path) {
    return FileAccessNative.stat(path);
  },

  /**
   * Delete a file.
   */
  unlink(path) {
    return FileAccessNative.unlink(path);
  },

  /**
   * Write content to a file.
   *
   * Default encoding of `data` is assumed utf8.
   */
  writeFile(path, data, encoding = 'utf8') {
    return FileAccessNative.writeFile(path, data, encoding);
  }

};
/**
 * Directory constants.
 */

export const Dirs = (_NativeModules$RNFile = NativeModules.RNFileAccess) === null || _NativeModules$RNFile === void 0 ? void 0 : _NativeModules$RNFile.getConstants();
//# sourceMappingURL=index.js.map