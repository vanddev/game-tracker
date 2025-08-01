import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

const RadarChart = ({ name, labels, data }) => {
    Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

    const generateColors = (num) => {
        const colors = [];
        for (let i = 0; i < num; i++) {
            colors.push(`hsl(${(i * 360) / num}, 80%, 60%)`);
        }
        return colors;
    };

    const chartData = {
        labels,
        datasets: [
            {
                label: name,
                data,
                backgroundColor: "rgba(10, 123, 204, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                pointBackgroundColor: generateColors(labels.length),
                pointBorderColor: "#ffffff",
                pointHoverBackgroundColor: "#ffffffff",
                pointHoverBorderColor: generateColors(labels.length),
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
                    color: '#ffffff', // Legend font color
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                }
            }
        },
        scales: {
            r: {
                angleLines: { 
                    display: true,
                    color: '#ffffff8c' // Color of the angle lines (spokes)
                },
                grid: {
                    color: '#ffffff5e' // Color of the circular grid lines
                },
                pointLabels: {
                    display: true,
                    color: '#ffffff',
                    font: {
                        weight: 'bold',
                        size: 14
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