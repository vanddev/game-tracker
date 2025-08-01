import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import Section from "../Section/Section";

const HorizontalBarChart = ({ name, dataset }) => {
    Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    const labels = [name]; // Only one category, all bars will be grouped
    const generateColors = (num) => {
        const colors = [];
        for (let i = 0; i < num; i++) {
            colors.push(`hsl(${(i * 360) / num}, 80%, 60%)`);
        }
        return colors;
    };

    // Each data point becomes its own dataset
    const chartData = {
        labels: ' ',
        datasets: dataset.map((item, idx) => ({
            label: item.label,
            data: [item.value],
            backgroundColor: generateColors(dataset.length)[idx],
            borderColor: generateColors(dataset.length)[idx].replace('60%', '40%'),
            borderWidth: 1,
        })),
    };

    const chartOptions = {
        indexAxis: 'y', // This makes the bar chart horizontal
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#ffffff',
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                }
            }
        },
    };

    return (
        <Bar data={chartData} options={chartOptions} />
    );
};

export default HorizontalBarChart;