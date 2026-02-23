import styles from "./GenericGameList.module.css";
import LinkedItemList from "../LinkedItemList/LinkedItemList";
import Pagination from "../Pagination/Pagination";
import SortList from "../SortList/SortList";
import type { Platform } from "../../../types";

interface GameListProps {
    name: string;
    cover: string;
    platforms: Platform[];
}

interface GenericGameListProps {
    games: GameListProps[];
    lastPage?: number;
}

const GenericGameList = ({ games, lastPage }: GenericGameListProps) => {
    return (
        <div className="game-list-container">
            <div style={{ marginBottom: 'var(--bulma-block-spacing)' }}>
                <SortList></SortList>
            </div>
            <Pagination lastPage={lastPage || 1} />
            <ul className={styles.game_list}>
                {games.map((game, index) => (
                    <li key={index} className={styles.game_list_item}>
                        <LinkedItemList
                            title={game.name}
                            image={game.cover}
                            platforms={game.platforms}
                            url=""
                        />
                    </li>
                ))}
            </ul>
            <Pagination lastPage={lastPage || 1} />
        </div>
    );
}

export default GenericGameList;