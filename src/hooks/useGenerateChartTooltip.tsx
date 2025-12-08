const useGenerateChartTooltip = (ctx: any, datapoints: any[][], totalLabelDatapoints: any[]) => {
    const dsIndex = ctx.datasetIndex;
    const dataIndex = ctx.dataIndex;
    const raw = datapoints[dsIndex][dataIndex];
    const total = totalLabelDatapoints.length > 1 ? totalLabelDatapoints[dataIndex] : totalLabelDatapoints[0];
    const pct = total ? ((raw / total) * 100) : 0;
    const pctStr = `${pct.toFixed(1)}%`;
    return `${ctx.dataset.label}: ${pctStr} (${raw})`;
}


export default useGenerateChartTooltip;