import { useState, useMemo } from 'react';
import React from 'react';
import './Pagination.css'

const Pagination = ({ lastPage }) => {

    const INITIAL_PAGE = 1;
    const LANDMARK_SPLIT_PAGE = 5; // The page where the pagination starts to show ellipsis

    const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

    const calculateShowedPages = () => {

        if (lastPage <= LANDMARK_SPLIT_PAGE) {
            return Array.from({ length: lastPage }, (_, i) => i + 1);
        }

        let pages = [];

        if (currentPage <= 2) {
            pages = [1, 2, 3, lastPage];
        } else if (currentPage >= lastPage - 1) {
            pages = [INITIAL_PAGE, lastPage - 2, lastPage - 1, lastPage];
        } else {
            pages = [INITIAL_PAGE, currentPage - 1, currentPage, currentPage + 1, lastPage];
        }

        // Remove duplicates
        pages = Array.from(new Set(pages));

        return pages;
    }

    const showedPages = useMemo(() => calculateShowedPages(), [currentPage, lastPage]);

    const renderInitialEllipsis = (index) => {
        const shouldShow = lastPage > LANDMARK_SPLIT_PAGE && currentPage > 3 && index == 1;
        return shouldShow ? <span className="pagination-ellipsis">&hellip;</span> : null;
    }

    const renderFinalEllipsis = (index) => {
        const shouldShow = lastPage > LANDMARK_SPLIT_PAGE && currentPage < lastPage - 2 && index == showedPages.length - 2;
        return shouldShow ? <span className="pagination-ellipsis">&hellip;</span> : null;
    }

    const disablePreviousButton = () => {
        return currentPage == 1;
    }

    const disableNextButton = () => {
        return currentPage == lastPage;
    }

    return (

        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <a className={`pagination-previous ${disablePreviousButton() ? 'is-disabled' : ''}`} style={{ pointerEvents:  disablePreviousButton() ? 'none' : 'auto'}} onClick={() => setCurrentPage(currentPage - 1)}>Previous</a>
            <a className={`pagination-next  ${disableNextButton() ? 'is-disabled' : ''}`} style={{ pointerEvents:  disableNextButton() ? 'none' : 'auto'}} onClick={() => setCurrentPage(currentPage + 1)}>Next</a>
            <ul className="pagination-list">
                { showedPages.map((page, index) => (
                    <React.Fragment key={page}>
                        { renderInitialEllipsis(index) }
                        <li>
                            <a className={`pagination-link ${currentPage === page ? 'is-current' : ''}`} 
                            aria-label={`Goto page ${page}`} 
                            aria-current={currentPage === page ? 'page' : undefined} 
                            onClick={() => setCurrentPage(page)}>
                                {page}
                            </a>
                        </li>
                        { renderFinalEllipsis(index) }
                    </React.Fragment>
                )) }
            </ul>
        </nav>
        
    )
}

export default Pagination