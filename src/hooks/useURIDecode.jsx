function useURIDecode(uri) {
    return uri.replace(/-/g, ' ');
}

export default useURIDecode;