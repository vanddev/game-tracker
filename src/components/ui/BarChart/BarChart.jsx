import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import useGenerateChartColors from "../../../hooks/useGenerateChartColors";
import useGenerateChartTooltip from "../../../hooks/useGenerateChartTooltip";
import { chartLabelColor, chartGridColor, chartRulerColor, chartDatasetLabelColor } from "../../../contants/contants";

const BarChart = ({ dataset, orientation, labels, maxDataPointCount }) => {
    Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
    
    const chartOrientation = orientation == 'horizontal' ? 'y' : 'x';

    dataset.sort((a, b) => b.value - a.value); // Sort by value descending

    if (maxDataPointCount) {
        let principalDataset = dataset.slice(0, maxDataPointCount);
        let reducedDataset = dataset.slice(maxDataPointCount);
        let principalLabels = labels.slice(0, maxDataPointCount);
        let reducedLabels = dataset.slice(maxDataPointCount);
        dataset = reducedDataset.length > 0 ? [...principalDataset, { label: 'Others', value: reducedDataset.reduce((sum, item) => sum + item.value, 0) }] : principalDataset;
        labels = reducedLabels.length > 0 ? [...principalLabels, 'Others'] : principalLabels;
    }

    const [bgColors, borderColors] = useGenerateChartColors(dataset.length);

    // Each data point becomes its own dataset
    const dataValues = dataset.map(item => item.value);
    const totalDataValue = dataValues.reduce((sum, val) => sum + val, 0);
    const datasets = dataset.map((item, idx) => ({
            label: item.label,
            data: [item.value],
            backgroundColor: bgColors[idx],
            borderColor: borderColors[idx],
            borderWidth: 1,
        }))
    
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Finished Games',
                data: dataValues,
                backgroundColor: bgColors,
                borderColor: borderColors,
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        indexAxis: chartOrientation, // This makes the bar chart horizontal or vertical
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                display: false,
                labels: {
                    color: chartLabelColor, // Legend font color
                    font: {
                        weight: 'bold',
                        size: 12
                    }
                }
            },
            tooltip: {
                enabled: true,
                mode: 'nearest',
                intersect: false,
                callbacks: {
                    // show percent and original raw value in tooltip
                    label: (ctx) => useGenerateChartTooltip(ctx, [dataValues], [totalDataValue]),
                    title: (items) => (items?.[0] ? items[0].label : ""),
                },
            },
        },
        scales: {
            x: {
                grid: { color: chartGridColor },
                ticks: { color: chartDatasetLabelColor }
            },
            y: {
                grid: { color: chartGridColor },
                ticks: { color: chartRulerColor }
            }
        }
    };

    return (
        <Bar data={chartData} options={chartOptions} />
    );
};

export default BarChart;