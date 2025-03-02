import type { AssetType, Encoding, ExternalDir, FetchResult, FileStat, FsStat, HashAlgorithm } from './types';
export type { AssetType, Encoding, ExternalDir, FetchResult, FileStat, FsStat, HashAlgorithm, } from './types';
export declare const FileSystem: {
    /**
     * Append content to a file.
     *
     * Default encoding of `data` is assumed utf8.
     */
    appendFile(path: string, data: string, encoding?: Encoding): Promise<void>;
    /**
     * Append a file to another file.
     *
     * Returns number of bytes written.
     */
    concatFiles(source: string, target: string): Promise<number>;
    /**
     * Copy a file.
     */
    cp(source: string, target: string): Promise<void>;
    /**
     * Copy a bundled asset file.
     *
     * When using Android asset type 'resource', include the folder, but skip the
     * file extension. For example use 'raw/foo', for the file 'res/raw/foo.txt'.
     * When possible, prefer using the 'assets/' folder; files in 'res/' have
     * naming restrictions imposed by Android.
     * https://developer.android.com/guide/topics/resources/providing-resources.html#OriginalFiles
     */
    cpAsset(asset: string, target: string, type?: AssetType): Promise<void>;
    /**
     * Copy a file to an externally controlled location.
     *
     * On Android API level < 29, may require permission WRITE_EXTERNAL_STORAGE.
     */
    cpExternal(source: string, targetName: string, dir: ExternalDir, subDir: string): Promise<void>;
    /**
     * Check device available space.
     */
    df(): Promise<FsStat>;
    /**
     * Check if a path exists.
     */
    exists(path: string): Promise<boolean>;
    /**
     * Save a network request to a file.
     */
    fetch(resource: string, init: {
        body?: string | undefined;
        headers?: {
            [key: string]: string;
        } | undefined;
        method?: string | undefined;
        /**
         * Output path.
         */
        path?: string | undefined;
    }): Promise<FetchResult>;
    /**
     * Return the local storage directory for app groups.
     *
     * This is an Apple only feature.
     */
    getAppGroupDir(groupName: string): Promise<string>;
    /**
     * Hash the file content.
     */
    hash(path: string, algorithm: HashAlgorithm): Promise<string>;
    /**
     * Check if a path is a directory.
     */
    isDir(path: string): Promise<boolean>;
    /**
     * List files in a directory.
     */
    ls(path: string): Promise<string[]>;
    /**
     * Make a new directory.
     */
    mkdir(path: string): Promise<void>;
    /**
     * Move a file.
     */
    mv(source: string, target: string): Promise<void>;
    /**
     * Read the content of a file.
     */
    readFile(path: string, encoding?: Encoding): Promise<string>;
    /**
     * Read file metadata.
     */
    stat(path: string): Promise<FileStat>;
    /**
     * Delete a file.
     */
    unlink(path: string): Promise<void>;
    /**
     * Write content to a file.
     *
     * Default encoding of `data` is assumed utf8.
     */
    writeFile(path: string, data: string, encoding?: Encoding): Promise<void>;
};
/**
 * Directory constants.
 */
export declare const Dirs: {
    /**
     * Temporary files. System/user may delete these if device storage is low.
     */
    CacheDir: string;
    /**
     * System recommended location for SQLite files.
     *
     * Android only.
     */
    DatabaseDir?: string;
    /**
     * Persistent data. Generally user created content.
     */
    DocumentDir: string;
    /**
     * Persistent app internal data.
     *
     * iOS only.
     */
    LibraryDir?: string;
    /**
     * App's default root directory.
     */
    MainBundleDir: string;
    /**
     * Root path to removable media. Prefer `cpExternal()` when possible, as
     * Android discourages this access method.
     *
     * Android only.
     */
    SDCardDir?: string;
};
