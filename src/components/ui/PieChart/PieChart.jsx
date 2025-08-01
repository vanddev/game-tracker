import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Section from "../Section/Section";

const PieChart = ( { name, dataset }) => {

    Chart.register(ArcElement, Tooltip, Legend);

    const labels = dataset.map(item => item.label);
    const dataValues = dataset.map(item => item.value);

    // Generate dynamic colors
    const generateColors = (num) => {
        const colors = [];
        for (let i = 0; i < num; i++) {
            // Use HSL for evenly spaced colors
            colors.push(`hsl(${(i * 360) / num}, 80%, 60%)`);
        }
        return colors;
    };

    const chartOptions = {
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

    const chartData = {
        labels,
        datasets: [
            {
                label: name,
                data: dataValues,
                backgroundColor: generateColors(labels.length),
                borderColor: generateColors(labels.length).map(c => c.replace('60%', '40%')),
                borderWidth: 1,
            },
        ],
    };

    return (
        <Pie data={chartData} options={chartOptions} />
    );
}

export default PieChart;