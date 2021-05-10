import type { AssetType, Encoding, ExternalDir, FetchResult, FileStat, FsStat, HashAlgorithm } from './types';
declare type FileAccessType = {
    appendFile(path: string, data: string, encoding: Encoding): Promise<void>;
    concatFiles(source: string, target: string): Promise<number>;
    cp(source: string, target: string): Promise<void>;
    /**
     * `type` only used on Android.
     */
    cpAsset(asset: string, target: string, type?: AssetType): Promise<void>;
    cpExternal(source: string, targetName: string, dir: ExternalDir, subDir: string): Promise<void>;
    df(): Promise<FsStat>;
    exists(path: string): Promise<boolean>;
    fetch(resource: string, init: {
        body?: string;
        headers?: {
            [key: string]: string;
        };
        method?: string;
        path?: string;
    }): Promise<FetchResult>;
    /**
     * Only defined on iOS.
     */
    getAppGroupDir(groupName: string): Promise<string>;
    hash(path: string, algorithm: HashAlgorithm): Promise<string>;
    isDir(path: string): Promise<boolean>;
    ls(path: string): Promise<string[]>;
    mkdir(path: string): Promise<void>;
    mv(source: string, target: string): Promise<void>;
    readFile(path: string, encoding: Encoding): Promise<string>;
    stat(path: string): Promise<FileStat>;
    unlink(path: string): Promise<void>;
    writeFile(path: string, data: string, encoding: Encoding): Promise<void>;
};
/**
 * Native module API.
 *
 * Most functions are the same as the JS wrapper. However native calls do
 * not support default parameters.
 */
export declare const FileAccessNative: FileAccessType;
export {};
