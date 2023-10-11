"use client"
import React, { useState } from 'react';
import styles from './search.module.css';
import Select from 'react-select';

const softwareEngineeringMethods = [
    "Agile",
    "Kanban",
    "Scrum",
    "Test-Driven Development",
    "Waterfall",
];

const methodsMap = softwareEngineeringMethods.map(opt => ({ label: opt, value: opt }));


const claims = [
    "TDD improves software quality by catching defects early in the development process",
    "TDD adoption is increasing in the software industry, but challenges persist",
    "TDD is an effective practice in improving code quality and reducing defects",
    // Add more claims as needed
];

const claimsMap = claims.map(opt => ({ label: opt, value: opt }));

export default function Search({ onSearch }) {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [selectedClaim, setSelectedClaim] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleMethodChange = (opt) => {
        setSelectedMethod(opt.value);
    };

    const handleClaimChange = (opt) => {
        setSelectedClaim(opt.value);
    };


    const handleSearch = () => {
        const fullSearchTerm = `${selectedMethod} ${selectedClaim}`;
        setSearchTerm(fullSearchTerm);
        onSearch(fullSearchTerm);
    };

    return (
        <>
            <div className={styles.outerContainer}>
                {/*Search Selection*/}
                <div className={styles.searchContainer}>
                    <a className={styles.h2}>Search a Claim:</a>

                    <a className={styles.h3}>Select a Method:</a>
                    <Select className={styles.select} options={methodsMap} onChange={handleMethodChange} />
                    <a className={styles.h3}>Select a Claim:</a>
                    <Select className={styles.select} options={claimsMap} onChange={handleClaimChange} />

                    {/*Button Search*/}
                    <button className={styles.searchButton} onClick={handleSearch}>
                        Search
                    </button>
                </div>

            </div>
            {/* Display the search term */}
            {searchTerm && (
                <div className={styles.outerContainer}>
                    <div className={styles.searchContainer}>
                        <p>Search Term: {searchTerm}</p>
                    </div>
                </div>
            )}
        </>
    );
}
