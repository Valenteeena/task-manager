import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Sort from './sort'
import './search.css';

const Search = () => {
    return (
        <section className="search">
            <div>
                <FontAwesomeIcon icon="search" size="lg" className="search-icon"/>
                <input type="text" name="searchTask" placeholder="Search Keyword"/>
            </div>
            <Sort/>
        </section>
    )
}

export default Search
