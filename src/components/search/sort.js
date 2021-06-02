import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './search.css';

const sort = () => {
    return (
        <div className="sort">
            <button>
                <p>Sort by</p>
                <FontAwesomeIcon icon="sort-amount-down" size="2x"/>
            </button>
        </div>
    )
}

export default sort
