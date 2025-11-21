import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartPluginStacked100 from "chartjs-plugin-stacked100";
import { chartLabelColor, chartGridColor, chartRulerColor, chartDatasetLabelColor } from "../../../contants/contants";


const Bar100Chart = ({ datasets, labels }) => {
    Chart.register(BarElement, CategoryScale, LinearScale, ChartPluginStacked100, Tooltip, Legend);

    const generateColors = (num) => {
        const colors = [];
        for (let i = 0; i < num; i++) {
            colors.push(`hsl(${(i * 360) / num}, 80%, 60%)`);
        }
        return colors;
    };

    const coloredDatasets = datasets.map((d, idx) => ({
        ...d,
        backgroundColor: generateColors(datasets.length)[idx],
        borderColor: generateColors(datasets.length)[idx].replace('60%', '40%'),
        borderWidth: 1,
    }));

    const chartData = {
        labels,
        datasets: coloredDatasets,
    };

    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            stacked100: {
                enable: true,
                mode: 'percent',
            },
            legend: {
                position: 'bottom',
                labels: {
                    color: chartLabelColor, // Legend font color
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                display: false,
                ticks: { color: chartRulerColor }
            },
            y: {
                stacked: true,
                ticks: { color: chartDatasetLabelColor }
            }
        }
    }

    return (
        <Bar data={chartData} options={chartOptions} />
    );
}

export default Bar100Chart;