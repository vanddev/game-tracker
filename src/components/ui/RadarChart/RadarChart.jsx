import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";
import { chartLabelColor, chartGridColor } from "../../../contants/contants";
import useGenerateChartColors from "../../../hooks/useGenerateChartColors";
import useGenerateChartTooltip from "../../../hooks/useGenerateChartTooltip";


const RadarChart = ({ name, dataset }) => {
    Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

    const sortedDataset = dataset.sort((a, b) => a.label.localeCompare(b.label));
    const labels = sortedDataset.map(item => item.label);
    const data = sortedDataset.map(item => item.value);
    const totalDataValue = data.reduce((sum, val) => sum + val, 0);

    const [pointBgColors, pointBorderColors] = useGenerateChartColors(labels.length);

    const chartData = {
        labels,
        datasets: [
            {
                label: name,
                data,
                backgroundColor: "rgba(10, 123, 204, 0.9)",
                borderColor: "rgba(54, 162, 235, 1)",
                pointBackgroundColor: pointBgColors,
                pointBorderColor: "#ffffffff",
                pointBorderWidth: 1,
                pointHoverBackgroundColor: pointBorderColors,
                pointHoverBorderColor: pointBgColors,
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
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
                    label: (ctx) => useGenerateChartTooltip(ctx, [data], [totalDataValue]),
                    title: (items) => (items?.[0] ? items[0].label : ""),
                },
            },
        },
        scales: {
            r: {
                angleLines: { 
                    display: true,
                    color: '#ffffff8c' // Color of the angle lines (spokes)
                },
                grid: {
                    color: chartGridColor // Color of the circular grid lines
                },
                pointLabels: {
                    display: true,
                    color: chartLabelColor,
                    font: {
                        weight: 'bold',
                        size: 12
                    }
                },
                ticks: { display: false },
            }
        }
    };

    return (
        <Radar data={chartData} options={chartOptions} />
    );
};

export default RadarChart;