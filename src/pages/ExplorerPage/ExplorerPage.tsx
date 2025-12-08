import PageTitle from "../../components/PageTitle/PageTitle";
import Section from "../../components/ui/Section/Section";
import GameCard from "../../components/GameCard/GameCard";
import ResponsiveCarousel from "../../components/ResponsiveCarousel/ResponsiveCarousel";

const ExplorerPage = () => {

  const data = [
        { name: "God of War", image: "/similar_games/godofwar.png", genre: "Adventure", statusId: 'finished' },
        { name: "Remnant: From the Ashes", image: "/similar_games/remnant.jpg", genre: "Action", statusId: 'finished' },
        { name: "Dragon: Marked for Death", image: "/similar_games/dragonmarketfordeath.png", genre: "Role-playing (RPG)", statusId: 'dropped' },
        { name: "Borderlands 3", image: "/similar_games/borderlands3.png", genre: "Shooter", statusId: 'wishlist' },
        { name: "Life is Feudal: Your Own", image: "/similar_games/lifeisfeudal.jpg", genre: "Role-playing (RPG)", statusId: 'finished' },
        { name: "Pokemon Shield", image: "/similar_games/pokemonshield.png", genre: "Role-playing (RPG)", statusId: 'finished' },
    ]

  return (
    <>
        <PageTitle title="Browse" />
        <Section title="Last Released" titleLink="/games/last-released" removeBackground>
            <ResponsiveCarousel>
                {data.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </ResponsiveCarousel>
        </Section>
        <Section title="Coming Soon" titleLink="/games/coming-soon" removeBackground>
            <div className="cards">
                {data.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </div>
        </Section>
        <Section title="Top Rated of the Year" titleLink="/games/top-rated" removeBackground>
            <div className="cards">
                {data.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </div>
        </Section>
        <Section title="All Time Classics" titleLink="/games/all-time-classics" removeBackground>
            <div className="cards">
                {data.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </div>
        </Section>
        <Section title="Genres" removeBackground>
            <div className="cards">
                {data.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </div>
        </Section>
        <Section title="Themes" removeBackground>
            <div className="cards">
                {data.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </div>
        </Section>
        <Section title="Underrated Gems"  titleLink="/games/underrated-gems" removeBackground>
            <div className="cards">
                {data.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </div>
        </Section>
        <Section title="Random Game"  titleLink="/games/random-game"  removeBackground>
            <div className="cards">
                {data.map((game, index) => (
                    <GameCard key={index} name={game.name} image={game.image} genre={game.genre} statusId={game.statusId}></GameCard>
                ))}
            </div>
        </Section>
    </>
  )
}

export default ExplorerPage;