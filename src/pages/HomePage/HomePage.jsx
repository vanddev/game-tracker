import './HomePage.css'
import GameCard from '../../components/GameCard/GameCard'
import Section from '../../components/ui/Section/Section'
import StatsCard from '../../components/ui/StatsCard/StatsCard'

import { mdiCheckBold } from '@mdi/js';
import { mdiControllerClassic } from '@mdi/js';
import { mdiClock } from '@mdi/js';
import { mdiHeart } from '@mdi/js';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useResponsiveContext } from '../../context/ResponsiveContext';


const HomePage = () => {

    const { isTablet, isMobile } = useResponsiveContext()

    const recentlyAddedData = [
        { name: "God of War", image: "./similar_games/godofwar.png", genre: "Adventure", statusId: 'finished' },
        { name: "Remnant: From the Ashes", image: "./similar_games/remnant.jpg", genre: "Action", statusId: 'finished' },
        { name: "Dragon: Marked for Death", image: "./similar_games/dragonmarketfordeath.png", genre: "Role-playing (RPG)", statusId: 'dropped' },
        { name: "Borderlands 3", image: "./similar_games/borderlands3.png", genre: "Shooter", statusId: 'wishlist' },
        { name: "Life is Feudal: Your Own", image: "./similar_games/lifeisfeudal.jpg", genre: "Role-playing (RPG)", statusId: 'finished' },
        { name: "Pokemon Shield", image: "./similar_games/pokemonshield.png", genre: "Role-playing (RPG)", statusId: 'finished' },
    ]

    if (isTablet || isMobile) {
        recentlyAddedData.splice(4, 2); // Remove last two items for tablet view
    }

    return (
        <>
            <SearchBar></SearchBar>
            
            <div className='stats'>
                <StatsCard title="Total Games" stats="19" description="Games in your collection" iconPath={mdiControllerClassic}></StatsCard>
                <StatsCard title="Finished Games" stats="6" iconPath={mdiCheckBold}></StatsCard>
                <StatsCard title="Want to Play" stats="5" iconPath={mdiHeart}></StatsCard>
                <StatsCard title="Estimated Play Time" stats="298 hrs" description="Hours spent gaming"  iconPath={mdiClock}></StatsCard>    
            </div>
            <Section title="Recently Added" remove_background>
                <div className='cards'>
                    {recentlyAddedData.map((game, index) => (
                        <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                    ))}
                </div>
            </Section>
            <Section title="Gaming Summary">
                <div className='summary'>
                    <div className='topic'>
                        <h4>Favorite Genre</h4>
                        <div className='favorite summary-section'>
                            <div>
                                <p className='primary-subject'>Action-Adventure</p>
                                <p className='secondary-subject'>4 games</p>
                            </div>
                            <p className='primary-subject'>63%</p>
                        </div>
                    </div>
                    <div className='topic'>
                        <h4>Favorite Platform</h4>
                        <div className='favorite summary-section'>
                            <div>
                                <p className='primary-subject'>PlayStation</p>
                                <p className='secondary-subject'>3 games</p>
                            </div>
                            <p className='primary-subject'>50%</p>
                        </div>
                    </div>
                    <div className='topic'>
                        <h4>Gaming Status</h4>
                        <div className='status summary-section'>
                            <div className="status-item">
                                <p className='finished'>6</p>
                                <p>Finished</p>
                            </div>
                            <div className="status-item">
                                <p className='wanted'>5</p>
                                <p>Wishlist</p>
                            </div>
                            <div className="status-item">
                                <p className='dropped'>4</p>
                                <p>Disliked</p>
                            </div>
                            <div className="status-item">
                                <p className=''>35%</p>
                                <p>Completion Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className='topic'>
                        <h4>Average Playing Time</h4>
                        <div className='summary-section'>
                            <p className='primary-subject'>50 hours per game</p>
                            <p className='secondary-subject'>Based on 6 finished games</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
        
    )
}

export default HomePage