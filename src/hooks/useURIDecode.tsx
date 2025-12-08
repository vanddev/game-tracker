function useURIDecode(uri: string): string {
    return uri.replace(/-/g, ' ');
}

export default useURIDecode;