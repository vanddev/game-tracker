import './ExplorerPage.css';
import PageTitle from "../../components/PageTitle/PageTitle";
import Section from "../../components/ui/Section/Section";
import GameCard from "../../components/GameCard/GameCard";
import { GenreIcon } from "../../components/ui/GenreIcon/GenreIcon";
import { ThemeIcon } from "../../components/ui/ThemeIcon/ThemeIcon";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { mainGenres, mainThemes, moreGenres, moreThemes } from '../../contants/contants';
import { explorerService } from '../../services/explorer';
import type { ExplorerData } from '../../types';


const ExplorerPage = () => {

    const [isShowMoreGenres, setShowMoreGenres] = useState(false);
    const [isShowMoreThemes, setShowMoreThemes] = useState(false);
    const [explorerData, setExplorerData] = useState<ExplorerData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        explorerService
            .getExplorerData()
            .then((data) => {
                if (!cancelled) {
                    setExplorerData(data);
                    setError(null);
                }
            })
            .catch((err) => {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : 'Failed to load explorer data');
                }
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => { cancelled = true; };
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

    const renderGameSection = (games: ExplorerData['lastReleased']) => (
        <div className="cards">
            {games.map((game, index) => (
                <GameCard
                    key={`${game.name}-${index}`}
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

    const data = explorerData ?? {
        lastReleased: [],
        comingSoon: [],
        topRated: [],
        allTimeClassics: [],
        underratedGems: [],
        randomGame: [],
    };

  return (
    <>
        <PageTitle title="Browse" />
        <Section title="Last Released" titleLink="/games/last-released" removeBackground>
            {renderGameSection(data.lastReleased)}
        </Section>
        <Section title="Coming Soon" titleLink="/games/coming-soon" removeBackground>
            {renderGameSection(data.comingSoon)}
        </Section>
        <Section title="Top Rated of the Year" titleLink="/games/top-rated" removeBackground>
            {renderGameSection(data.topRated)}
        </Section>
        <Section title="All Time Classics" titleLink="/games/all-time-classics" removeBackground>
            {renderGameSection(data.allTimeClassics)}
        </Section>
        <Section title={isShowMoreGenres ? "All Genres" : "Genres"} titleAction={ !isShowMoreGenres ? () => {setShowMoreGenres(true)} : undefined } removeBackground>
            { renderGenres() }
        </Section>
        <Section title={isShowMoreThemes ? "All Themes" : "Themes"} titleAction={ !isShowMoreThemes ? () => {setShowMoreThemes(true)} : undefined } removeBackground>
            { renderThemes() }
        </Section>
        <Section title="Underrated Gems"  titleLink="/games/underrated-gems" removeBackground>
            {renderGameSection(data.underratedGems)}
        </Section>
        <Section title="Random Game"  titleLink="/games/random-game"  removeBackground>
            {renderGameSection(data.randomGame)}
        </Section>
    </>
  )
}

export default ExplorerPage;