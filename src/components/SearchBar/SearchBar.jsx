import styles from './SearchBar.module.css';
import Icon from "@mdi/react";
import { mdiMagnify } from '@mdi/js';
import LinkedItemList from '../ui/LinkedItemList/LinkedItemList';
import Divider from '../ui/Divider/Divider';
import { useState } from 'react';

const SearchBar = ({ }) => {
    const [isSearching, setSearching] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([
        { title: 'God of War', image: "/similar_games/godofwar.png", url: '/games/godofwar' },
        { title: 'God of War', image: "/similar_games/godofwar.png", url: '/games/godofwar' },
        { title: 'God of War', image: "/similar_games/godofwar.png", url: '/games/godofwar' },
        { title: 'God of War', image: "/similar_games/godofwar.png", url: '/games/godofwar' },
    ]);

    const handleOnFocus = () => {
        setSearching(true);
    }

    const handleOnBlur = () => {
        setTimeout(() => setSearching(false), 100); // Delay hiding to allow click
    }
    
    return (
        <div className={styles.search_bar}>
            <p className="control has-icons-left">
                <input id="search" className="input" type="text" placeholder="Search games here"
                     onFocus={handleOnFocus} onBlur={handleOnBlur}/>
                <span className="icon is-small is-left">
                    <Icon path={mdiMagnify} size={0.8} />
                </span>
            </p>
            <div className={styles.results}>
                <ul className={`dark-border` + (isSearching ? '' : ' is-hidden')}>
                    {searchResults.length > 0 ? searchResults.map((game, index) => (
                        <li key={index}>
                            <LinkedItemList image={game.image} title={game.title} url={game.url} />
                        </li>
                    )) :
                    // If no results, show a message or placeholder
                    <span>Sorry, there are no results!</span>
                    }
                    <Divider marginBottom={'16px'} marginTop={'20px'} />
                    <div style={{ textAlign: 'end' }}>
                        <button className="button is-primary">Advanced Search</button>
                    </div>
                </ul>
            </div>
            
        </div>
    );
}

export default SearchBar;