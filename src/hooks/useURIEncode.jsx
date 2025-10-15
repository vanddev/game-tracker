function useURIEncode(uri) {
    return uri.replace(/ /g, '-');
}

export default useURIEncode;