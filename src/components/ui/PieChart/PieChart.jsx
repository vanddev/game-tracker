import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import useGenerateChartColors from "../../../hooks/useGenerateChartColors";
import useGenerateChartTooltip from "../../../hooks/useGenerateChartTooltip";
import { chartLabelColor } from "../../../contants/contants";

const PieChart = ( { name, dataset, colors }) => {

    Chart.register(ArcElement, Tooltip, Legend);

    const labels = dataset.map(item => item.label);
    const dataValues = dataset.map(item => item.value);
    const totalDataValue = dataValues.reduce((sum, val) => sum + val, 0);

    const [bgColors, borderColors] = useGenerateChartColors(dataset.length, colors);

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: chartLabelColor,
                    font: {
                        weight: 'bold',
                        size: 12
                    }
                }
            },
            tooltip: {
                enabled: true,
                mode: 'nearest',
                intersect: false,
                callbacks: {
                    // show percent and original raw value in tooltip
                    label: (ctx) => useGenerateChartTooltip(ctx, [dataValues], [totalDataValue]),
                    title: (items) => (items?.[0] ? items[0].label : ""),
                },
            },
        },
    };

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Games',
                data: dataValues,
                backgroundColor: bgColors,
                borderColor: borderColors,
                borderWidth: 1,
            },
        ],
    };

    return (
        <Pie data={chartData} options={chartOptions} />
    );
}

export default PieChart;