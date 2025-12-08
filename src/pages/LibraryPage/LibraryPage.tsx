import Section from '../../components/ui/Section/Section';
import GameCard from '../../components/GameCard/GameCard';
import { useResponsiveContext } from '../../context/ResponsiveContext';
import ScrollToTop from '../../components/ScrollToTop';
import PageTitle from '../../components/PageTitle/PageTitle';

function LibraryPage() {
    ScrollToTop();
    const { isTablet, isMobile } = useResponsiveContext()
    
    const recentlyAddedData = [
        { name: "God of War", image: "/similar_games/godofwar.png", genre: "Adventure", statusId: 'finished' },
        { name: "Remnant: From the Ashes", image: "/similar_games/remnant.jpg", genre: "Action", statusId: 'finished' },
        { name: "Dragon: Marked for Death", image: "/similar_games/dragonmarketfordeath.png", genre: "Role-playing (RPG)", statusId: 'dropped' },
        { name: "Borderlands 3", image: "/similar_games/borderlands3.png", genre: "Shooter", statusId: 'wishlist' },
        { name: "Life is Feudal: Your Own", image: "/similar_games/lifeisfeudal.jpg", genre: "Role-playing (RPG)", statusId: 'finished' },
        { name: "Pokemon Shield", image: "/similar_games/pokemonshield.png", genre: "Role-playing (RPG)", statusId: 'finished' },
    ]

    if (isTablet || isMobile) {
        recentlyAddedData.splice(4, 2); // Remove last two items for tablet view
    }

  return (
    <>
        <PageTitle title="My Library" />
        <Section title="Finished Games" titleLink="/games/library/finished" removeBackground>
            <div className="cards">
                {recentlyAddedData.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </div>
        </Section>
        <Section title="Want To Play" titleLink="/games/library/want-to-play" removeBackground>
            <div className="cards">
                {recentlyAddedData.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </div>
        </Section>
        <Section title="Dropped" titleLink="/games/library/dropped" removeBackground>
            <div className="cards">
                {recentlyAddedData.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </div>
        </Section>
    </>
    );
};

export default LibraryPage;