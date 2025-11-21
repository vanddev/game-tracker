import './StatisticsPage.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PieChart from "../../components/ui/PieChart/PieChart";
import Section from "../../components/ui/Section/Section";
import BarChart from "../../components/ui/BarChart/BarChart";
import StackedBarChart from "../../components/ui/StackedBarChart/StackedBarChart";
import RadarChart from "../../components/ui/RadarChart/RadarChart";
import AreaChart from "../../components/ui/AreaChart/AreaChart";
import Bar100Chart from '../../components/ui/Bar100Chart/Bar100Chart';
import ScrollToTop from '../../components/ScrollToTop';
import PageTitle from '../../components/PageTitle/PageTitle';


const StatisticsPage = () => {
    ScrollToTop();
    ChartJS.register(ArcElement, Tooltip, Legend);

    const statusList = ['Finished', 'Want to Play', 'Dropped'];

    const statusColors = ['hsl(110, 80%, 60%)', 'hsl(220, 80%, 60%)', 'hsl(10, 80%, 60%)'];

    const platforms = ['PC', 'PS2', 'Switch', 'PS4', '3DS', 'PS3', 'Xbox 360', 'PS5', 'Xbox One', 'Xbox Series X', 'Wii U', 'Wii', 'PSP', 'PS Vita', 'GameCube', 'Xbox'];

    const genres = ['Adventure', 'Role-Playing (RPG)', 'Hack and Slash', 'Sport', 'Fighting'];

    const themes = ['Fantasy', 'Sci-Fi', 'Horror', 'Mystery', 'Comedy'];
    

    const pieChartValues = [300, 100, 30];
    
    const pieChartData = statusList.map((status, index) => ({
        label: status,
        value: pieChartValues[index],
    }));

    const barValues = [300, 200, 150, 100, 50, 20, 10, 5, 3, 2, 20, 10, 12, 7, 3, 40];

    const barData = platforms.map((platform, index) => ({
        label: platform,
        value: barValues[index],
    }));

    const stackedValues = [[120, 90, 100, 80, 8], [100, 110, 90, 70, 12], [60, 80, 70, 60, 22]];

    const stackedDatasets = statusList.map((status, statusIndex) => ({
        label: status,
        data: stackedValues[statusIndex],
    }));

    const horizontalBarValues = [300, 200, 150, 100, 10];

    const horizontalBarData = genres.map((genre, index) => ({
        label: genre,
        value: horizontalBarValues[index],
    }));

    const heatmapValues = [[60, 16, 0, 10, 0], [50, 20, 5, 8, 2], [40, 25, 10, 5, 5], [30, 30, 15, 3, 7], [20, 35, 20, 2, 10]];

    const heatmapData = themes.map((theme, themeIndex) => ({
        label: theme,
        data: heatmapValues[themeIndex],
    }));

    return (
        <div>
            <PageTitle title="My Statistics" />
            <div className="split-section">
                <Section title='Your Games'>
                    <div className='chart-container small-chart'>
                        <PieChart name='Games' dataset={pieChartData} colors={statusColors}/>
                    </div>
                </Section>
                <Section title="Your Prefered Genre">
                    <div className='chart-container small-chart'>
                        <RadarChart
                            name="Finished Games" dataset={horizontalBarData}/>
                    </div>
                </Section>
            </div>
            
            <Section title='The most played platforms'>
                <div className='chart-container'>
                    <BarChart name="Game Played by Platform" dataset={barData} labels={platforms} maxDataPointCount="10" />
                </div>
            </Section>
            <Section title='Game Finished by Release Year'>
                <div className='chart-container'>
                    <AreaChart name="Finished Games"  data={[120, 150, 170, 140, 180, 200]} labels={["2025", "2024", "2023", "2022", "2021", "2020"]} />
                </div>
            </Section>
            <Section title="Game Distribution by Genre">
                <div className='chart-container'>
                    <StackedBarChart
                        name="Quarterly Genre Sales"
                        labels={genres}
                        datasets={stackedDatasets}
                        />
                </div>
            </Section>
            <Section title="Game Finished Distribution by Theme">
                <div className='chart-container'>
                    <Bar100Chart labels={genres} datasets={heatmapData} />
                </div>
            </Section>
        </div>
    );
}

export default StatisticsPage;