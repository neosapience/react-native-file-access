/**
 * asset - Android `assets/` folder or iOS main bundle.
 * resource - Android `res/` folder.
 */
export declare type AssetType = 'asset' | 'resource';
export declare type Encoding = 'utf8' | 'base64';
export declare type ExternalDir = 'audio' | 'downloads' | 'images' | 'video';
export declare type FetchResult = {
    /**
     * Response HTTP headers.
     */
    headers: {
        [key: string]: string;
    };
    /**
     * True if the response is a 2XX HTTP status.
     */
    ok: boolean;
    /**
     * Note: this value may not be accurate.
     */
    redirected: boolean;
    /**
     * HTTP response status code.
     */
    status: number;
    /**
     * Associated text for HTTP status code.
     */
    statusText: string;
    /**
     * Final URL provided by the HTTP response.
     */
    url: string;
};
export declare type FileStat = {
    /**
     * Filename does not include the path.
     */
    filename: string;
    lastModified: number;
    path: string;
    /**
     * File size in bytes.
     */
    size: number;
    type: 'directory' | 'file';
};
/**
 * Values are in bytes.
 */
export declare type FsStat = {
    internal_free: number;
    internal_total: number;
    external_free?: number;
    external_total?: number;
};
/**
 * MD5 and SHA-1 are insecure. Avoid when possible.
 */
export declare type HashAlgorithm = 'MD5' | 'SHA-1' | 'SHA-224' | 'SHA-256' | 'SHA-384' | 'SHA-512';
