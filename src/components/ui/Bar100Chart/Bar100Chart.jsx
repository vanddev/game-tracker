import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartPluginStacked100 from "chartjs-plugin-stacked100";


const Bar100Chart = () => {
    Chart.register(BarElement, CategoryScale, LinearScale, ChartPluginStacked100, Tooltip, Legend);

    const generateColors = (num) => {
        const colors = [];
        for (let i = 0; i < num; i++) {
            colors.push(`hsl(${(i * 360) / num}, 80%, 60%)`);
        }
        return colors;
    };

    const labels = ["Foo", "Bar"]
    const data = [
        { label: "bad", data: [5, 25], backgroundColor: "rgba(244, 143, 177, 0.6)" },
        { label: "better", data: [15, 10], backgroundColor: "rgba(255, 235, 59, 0.6)" },
        { label: "good", data: [10, 8], backgroundColor: "rgba(100, 181, 246, 0.6)" },
    ]

    const coloredDatasets = data.map((d, idx) => ({
        ...d,
        backgroundColor: generateColors(data.length)[idx],
        borderColor: generateColors(data.length)[idx].replace('60%', '40%'),
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
                    color: '#ffffff', // Legend font color
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                }
            }
        },
    }

    return (
        <Bar data={chartData} options={chartOptions} />
    );
}

export default Bar100Chart;