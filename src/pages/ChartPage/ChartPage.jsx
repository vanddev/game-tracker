import './ChartPage.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PieChart from "../../components/ui/PieChart/PieChart";
import Section from "../../components/ui/Section/Section";
import BarChart from "../../components/ui/BarChart/BarChart";
import StackedBarChart from "../../components/ui/StackedBarChart/StackedBarChart";
import RadarChart from "../../components/ui/RadarChart/RadarChart";
import AreaChart from "../../components/ui/AreaChart/AreaChart";
import Bar100Chart from '../../components/ui/Bar100Chart/Bar100Chart';


const ChartPage = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const pieCharData = [
        { label: 'Finished', value: 300 },
        { label: 'Want to Play', value: 100 },
        { label: 'Dropped', value: 30 },
    ]

    const barData = [
        { label: "PC", value: 300 },
        { label: "PS2", value: 200 },
        { label: "Nintendo Switch", value: 150 },
        { label: "PS4", value: 100 },
        { label: "3DS", value: 50 },
        { label: "PS3", value: 20 },
        { label: "Xbox 360", value: 10 },
        { label: "PS5", value: 5 },
        { label: "Xbox One", value: 3 },
        { label: "Xbox Series X", value: 2 },
        { label: "Wii U", value: 20 },
        { label: "Wii", value: 10 },
        { label: "PSP", value: 12 },
        { label: "PS Vita", value: 7 },
        { label: "GameCube", value: 3 },
        { label: "Xbox", value: 40 }
    ];

    const stackedLabels = ["Q1", "Q2", "Q3", "Q4"];
    const stackedDatasets = [
        {
            label: "Rock",
            data: [120, 90, 100, 80]
        },
        {
            label: "Pop",
            data: [100, 110, 90, 70]
        },
        {
            label: "Jazz",
            data: [60, 80, 70, 60]
        }
    ];

    const horizontalBarData = [
        { label: "Adventure", value: 300 },
        { label: "Role-Playing (RPG)", value: 200 },
        { label: "Hack and Slash", value: 150 },
        { label: "Sport", value: 100 },
        { label: "Fighting", value: 10 }
    ];


    return (
        <div>
            <div className="split-section">
                <Section title='Games Played by Status'>
                    <div className='chart-container'>
                        <PieChart name='Music Genre Popularity' dataset={pieCharData}/>
                    </div>
                </Section>
                <Section title="Genre Breakdown">
                    <div className='chart-container'>
                        <RadarChart
                            name="Genre Attributes" dataset={horizontalBarData}/>
                    </div>
                </Section>
            </div>
            
            <Section title='Game Finished by Platform'>
                <div className='chart-container'>
                    <BarChart name="Game Played by Platform" dataset={barData} maxDataPointCount="10" />
                </div>
            </Section>
            <Section title='Game Finished by Release Year'>
                <div className='chart-container'>
                    <AreaChart name="Game Finished by Release Year"  data={[120, 150, 170, 140, 180, 200]} labels={["2025", "2024", "2023", "2022", "2021", "2020"]} />
                </div>
            </Section>
            <Section title="Quarterly Genre Sales">
                <div className='chart-container'>
                    <StackedBarChart
                        name="Quarterly Genre Sales"
                        labels={stackedLabels}
                        datasets={stackedDatasets}
                        />
                </div>
            </Section>
            <Section title="Game Popularity by Genre">
                <div className='chart-container'>
                    <Bar100Chart />
                </div>
            </Section>
        </div>
    );
}

export default ChartPage;