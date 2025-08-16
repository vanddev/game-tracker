import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

const RadarChart = ({ name, dataset }) => {
    Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

    const generateColors = (num) => {
        const colors = [];
        for (let i = 0; i < num; i++) {
            colors.push(`hsl(${(i * 360) / num}, 80%, 60%)`);
        }
        return colors;
    };


    const sortedDataset = dataset.sort((a, b) => a.label.localeCompare(b.label));
    const labels = sortedDataset.map(item => item.label);
    const data = sortedDataset.map(item => item.value);

    const pointBgColors = generateColors(labels.length);
    const pointBorderColors = pointBgColors.map(color => color.replace('60%', '40%'));

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
                    color: '#ffffff', // Legend font color
                    font: {
                        weight: 'bold',
                        size: 12
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
                    color: 'rgb(191, 191, 191)',
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