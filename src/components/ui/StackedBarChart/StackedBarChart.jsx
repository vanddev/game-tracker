import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import useGenerateChartTooltip from "../../../hooks/useGenerateChartTooltip";
import useGenerateChartColors from "../../../hooks/useGenerateChartColors";

const StackedBarChart = ({ datasets, labels, colors }) => {
    Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    const [bgColors, borderColors] = useGenerateChartColors(datasets.length, colors);
    
    // compute column totals for each label index
    const totalLabelDatapoints = labels.map((_, colIndex) =>
        datasets.reduce((sum, ds) => sum + ds.data[colIndex], 0)
    );

    const datapoints = datasets.map(ds => ds.data);
    
    // Assign a color to each dataset
    const coloredDatasets = datasets.map((ds, idx) => ({
        ...ds,
        backgroundColor: bgColors[idx],
        borderColor: borderColors[idx],
        borderWidth: 1,
    }));

    const chartData = {
        labels,
        datasets: coloredDatasets,
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#e6e6e6', // Legend font color
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
                    label: (ctx) => useGenerateChartTooltip(ctx, datapoints, totalLabelDatapoints),
                    title: (items) => (items?.[0] ? items[0].label : ""),
                },
            },
        },
        scales: {
            x: {
                grid: { color: '#ffffff5e' },
                ticks: { color: '#e6e6e6' },
                stacked: true 
            },
            y: {
                grid: { color: "#ffffff5e" },
                ticks: {
                    color: "#ffffff5e",
                },
                stacked: true,
                beginAtZero: true,
            },
        },
    };

    return (
        <Bar data={chartData} options={chartOptions} />
    );
};

export default StackedBarChart;