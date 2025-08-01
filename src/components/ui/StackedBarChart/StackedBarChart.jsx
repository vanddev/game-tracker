import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import Section from "../Section/Section";

const StackedBarChart = ({ datasets, labels }) => {
    Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    // datasets: [{ label: 'Series 1', data: [..] }, { label: 'Series 2', data: [..] }]
    const generateColors = (num) => {
        const colors = [];
        for (let i = 0; i < num; i++) {
            colors.push(`hsl(${(i * 360) / num}, 80%, 60%)`);
        }
        return colors;
    };

    // Assign a color to each dataset
    const coloredDatasets = datasets.map((ds, idx) => ({
        ...ds,
        backgroundColor: generateColors(datasets.length)[idx],
        borderColor: generateColors(datasets.length)[idx].replace('60%', '40%'),
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
                    color: '#ffffff', // Legend font color
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                }
            }
        },
        scales: {
            x: { stacked: true },
            y: { stacked: true },
        },
    };

    console.log('StackedBarChart Data:', chartData);

    return (
        <Bar data={chartData} options={chartOptions} />
    );
};

export default StackedBarChart;