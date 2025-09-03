import styles from "./GenericGameList.module.css";
import LinkedItemList from "../LinkedItemList/LinkedItemList";
import Pagination from "../Pagination/Pagination";
import SortList from "../SortList/SortList";

const GenericGameList = ({ games, lastPage }) => {
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
                            image={game.image}
                            platforms={game.platforms}
                        />
                    </li>
                ))}
            </ul>
            <Pagination lastPage={lastPage || 1} />
        </div>
    );
}

export default GenericGameList;