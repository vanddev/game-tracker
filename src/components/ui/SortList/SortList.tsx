import Icon from '@mdi/react';
import { mdiSort, mdiChevronDown, mdiChevronUp } from '@mdi/js';
import { useState } from 'react';
import styles from './SortList.module.css';

interface SortOption {
    key: string;
    label: string;
    defaultDesc: boolean;
}

const SORT_OPTIONS = [
    { key: 'rating', label: 'Rating', defaultDesc: true },
    { key: 'title', label: 'Title', defaultDesc: false },
    { key: 'release', label: 'Release Date', defaultDesc: true },
];

function SortList() {
    const [activeSort, setActiveSort] = useState('rating');
    const [isDesc, setIsDesc] = useState(true);

    function handleSort(option: SortOption) {
        if (activeSort !== option.key) {
            setActiveSort(option.key);
            setIsDesc(option.defaultDesc);
        } else {
            setIsDesc((prev) => !prev);
        }
    };

    function getSortIcon(option: SortOption) {
        return activeSort === option.key ? (
            <Icon path={isDesc ? mdiChevronDown : mdiChevronUp} size={0.6} />
        ) : null;
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.container} ${styles.label}`}>
                <Icon path={mdiSort} size={0.8} />
                <span>Sort</span>
            </div>
            {SORT_OPTIONS.map((option) => (
                <button
                    key={option.key}
                    className="button is-small"
                    onClick={() => handleSort(option)}
                >
                    <span>{option.label}</span>
                    <span className="icon is-small">{getSortIcon(option)}</span>
                </button>
            ))}
        </div>
    );
};

export default SortList;
