function useGenerateChartColors(colorsNumber: number, defaultColors: string[] = []): [string[], string[]] {
    let baseColors = [];

    if (defaultColors && defaultColors.length) {
        baseColors = defaultColors;
    } else {
        for (let i = 0; i < colorsNumber; i++) {
            baseColors.push(`hsl(${(i * 360) / colorsNumber}, 80%, 60%)`);
        }
    }

    const darkerColors = baseColors.map(c => c.replace('60%', '40%'));

    return [baseColors, darkerColors];
}

export default useGenerateChartColors;