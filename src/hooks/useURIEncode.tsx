function useURIEncode(uri: string): string | null {
    return uri ? uri.replace(/ /g, '-') : null;
    // return encodeURIComponent(uri);
}

export default useURIEncode;