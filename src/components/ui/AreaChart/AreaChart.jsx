import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

const AreaChart = ({ name, labels, data }) => {
    Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip, Legend);

    const chartData = {
        labels,
        datasets: [
            {
                label: name,
                data,
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                pointBackgroundColor: "rgba(54, 162, 235, 1)",
                pointBorderColor: "#fff",
                borderWidth: 2,
            },
        ],
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
        scales: {
            x: {
                grid: { color: '#ffffff5e' },
                ticks: { color: '#ffffff' }
            },
            y: {
                grid: { color: '#ffffff5e' },
                ticks: { color: '#ffffff' }
            }
        }
    };

    return (
        <Line data={chartData} options={chartOptions} />
    );
};

export default AreaChart;