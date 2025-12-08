function useURIEncode(uri: string): string {
    return uri.replace(/ /g, '-');
}

export default useURIEncode;