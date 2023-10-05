"use client";
import styles from './search.module.css'
import { useState } from 'react'

export default function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        // Pass the search term to the parent component
        onSearch(searchTerm);
    };

    return (
        <div className={styles.outerContainer}>
            <div className={styles.searchContainer}>
                <a className={styles.h2}>Search for an Article:</a>

                <input className={styles.searchBar}
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button className={styles.searchButton} onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}
