import './ExplorerPage.css';
import PageTitle from "../../components/PageTitle/PageTitle";
import Section from "../../components/ui/Section/Section";
import GameCard from "../../components/GameCard/GameCard";
import { GenreIcon } from "../../components/ui/GenreIcon/GenreIcon";
import { ThemeIcon } from "../../components/ui/ThemeIcon/ThemeIcon";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { mainGenres, mainThemes, moreGenres, moreThemes } from '../../constants/constants';
import { gameService } from '../../services/game';
import type { Game, Pagination } from '../../types';


const ExplorerPage = () => {

    const emptyPagination: Pagination<Game> = {
        items: [],
        totalPages: 0,
        page: 0,
        size: 0,
        lastPage: true,
        firstPage: true
    };
    const [currentYear] = useState(new Date().getFullYear());
    const [isShowMoreGenres, setShowMoreGenres] = useState(false);
    const [isShowMoreThemes, setShowMoreThemes] = useState(false);
    const [lastReleasedGames, setLastReleasedGames] = useState<Pagination<Game>>(emptyPagination);
    const [comingSoonGames, setComingSoonGames] = useState<Pagination<Game>>(emptyPagination);
    const [topRatedGames, setTopRatedGames] = useState<Pagination<Game>>(emptyPagination);
    const [goatGames, setGoatGames] = useState<Pagination<Game>>(emptyPagination);
    // const [allTimeClassics, setAllTimeClassics] = useState<Pagination<Game>>(emptyPagination);
    const [randomGames, setRandomGames] = useState<Pagination<Game>>(emptyPagination);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadData = async () => {
        setLoading(true);
        try {
            setLastReleasedGames(await gameService.GetLatestGames());
            setComingSoonGames(await gameService.GetNextGames());
            setTopRatedGames(await gameService.GetTopRatedGames(currentYear));
            setGoatGames(await gameService.GetTopRatedGames());
            // setAllTimeClassics(await gameService.GetAllTimeClassics());
            setRandomGames(await gameService.GetRandomGames());
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load explorer data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const renderGenre = (genre: any) => {
        return (
            <Link to={`/genres/${genre.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className='spec-card'>
                    <GenreIcon genreId={genre.id} size={48} />
                    <h2>{genre.slug || genre.name}</h2>
                </div>
            </Link>
        )
    }

    const renderTheme = (theme: any) => {
        return (
           <Link to={`/themes/${theme.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className='spec-card'>
                    <ThemeIcon genreId={theme.id} size={48} />
                    <h2>{theme.slug || theme.name}</h2>
                </div>
            </Link>
        )
    }

    const renderGenres = () => {
        return (
            <div className="cards" style={{placeItems: 'center'}}>
                { mainGenres.map((genre) => (
                    renderGenre(genre)
                ))
                }
                {
                    isShowMoreGenres && 
                    moreGenres.map((genre) => (
                        renderGenre(genre)
                    ))
                }
            </div>
        )
    }

    const renderThemes = () => {
        return (
            <div className="cards" style={{placeItems: 'center'}}>
                { mainThemes.map((theme) => (
                    renderTheme(theme)
                ))
                }
                {
                    isShowMoreThemes && 
                    moreThemes.map((theme) => (
                        renderTheme(theme)
                    ))
                }
            </div>
        )
    }

    const renderGameSection = (games: Game[]) => (
        <div className="cards">
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    cover={game.cover}
                    genres={game.genres}
                    ggstatus={game.ggstatus}
                />
            ))}
        </div>
    );

    if (loading) {
        return (
            <>
                <PageTitle title="Browse" />
                <p style={{ padding: '1rem', textAlign: 'center' }}>Loading…</p>
            </>
        );
    }

    if (error) {
        return (
            <>
                <PageTitle title="Browse" />
                <p style={{ padding: '1rem', textAlign: 'center', color: 'var(--error, #c00)' }}>{error}</p>
            </>
        );
    }

    return (
        <>
            <PageTitle title="Browse" />
            <Section title="Top Rated of the Year" titleLink={`/games/top-rated?year=${currentYear}`} titleState={{ initialPage: topRatedGames }} removeBackground>
                {renderGameSection(topRatedGames.items.slice(0, 6))}
            </Section>
            <Section title="Last Released" titleLink="/games/last-released" titleState={{ initialPage: lastReleasedGames }} removeBackground>
                {renderGameSection(lastReleasedGames.items.slice(0, 6))}
            </Section>
            <Section title="Coming Soon" titleLink="/games/coming-soon" titleState={{ initialPage: comingSoonGames }} removeBackground>
                {renderGameSection(comingSoonGames.items.slice(0, 6))}
            </Section>
            <Section title={isShowMoreGenres ? "All Genres" : "Genres"} titleAction={ !isShowMoreGenres ? () => {setShowMoreGenres(true)} : undefined } removeBackground>
                { renderGenres() }
            </Section>
            <Section title={isShowMoreThemes ? "All Themes" : "Themes"} titleAction={ !isShowMoreThemes ? () => {setShowMoreThemes(true)} : undefined } removeBackground>
                { renderThemes() }
            </Section>
            <Section title="GOAT (Greatest of All Time)" titleLink="/games/top-rated" titleState={{ initialPage: goatGames }} removeBackground>
                {renderGameSection(goatGames.items.slice(0, 6))}
            </Section>
            {/* <Section title="All Time Classics" titleLink="/games/all-time-classics" titleState={{ initialPage: allTimeClassics }} removeBackground>
                {renderGameSection(allTimeClassics.items.slice(0, 6))}
            </Section> */}
            
            <Section title="Random Game"  titleLink="/games/random-game"  titleState={{ initialPage: randomGames }} removeBackground>
                {renderGameSection(randomGames.items.slice(0, 6))}
            </Section>
        </>
    )
}

export default ExplorerPage;