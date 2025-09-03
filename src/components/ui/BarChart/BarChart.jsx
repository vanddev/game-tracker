import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChart = ({ name, dataset, orientation, maxDataPointCount }) => {
    Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
    
    const chartOrientation = orientation == 'horizontal' ? 'y' : 'x';

    dataset.sort((a, b) => b.value - a.value); // Sort by value descending

    if (maxDataPointCount) {
        let principalDataset = dataset.slice(0, maxDataPointCount);
        let reducedDataset = dataset.slice(maxDataPointCount);
        dataset = reducedDataset.length > 0 ? [...principalDataset, { label: 'Others', value: reducedDataset.reduce((sum, item) => sum + item.value, 0) }] : principalDataset;
    }

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
        indexAxis: chartOrientation, // This makes the bar chart horizontal or vertical
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'rgb(191, 191, 191)', // Legend font color
                    font: {
                        weight: 'bold',
                        size: 12
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { color: '#ffffff5e' },
                ticks: { color: '#ffffff5e' }
            },
            y: {
                grid: { color: '#ffffff5e' },
                ticks: { color: '#ffffff5e' }
            }
        }
    };

    return (
        <Bar data={chartData} options={chartOptions} />
    );
};

export default BarChart;