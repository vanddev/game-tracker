import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { chartLabelColor, chartGridColor, chartRulerColor, chartDatasetLabelColor } from "../../../constants/constants";
import type { ChartOptions } from "chart.js";

interface AreaChartProps {
    name: string;
    labels: string[];
    data: number[];
}

function AreaChart({ name, labels, data } : AreaChartProps) {
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

    const chartOptions: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                display: false,
                labels: {
                    color: chartLabelColor,
                    font: {
                        weight: 'bold',
                        size: 12
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { color: chartGridColor },
                ticks: { color: chartDatasetLabelColor }
            },
            y: {
                grid: { color: chartGridColor },
                ticks: { color: chartRulerColor }
            }
        }
    };

    return (
        <Line data={chartData} options={chartOptions} />
    );
};

export default AreaChart;