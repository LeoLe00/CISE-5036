"use client"
import React, { useState, useEffect } from 'react';
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
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMethods, setFilteredMethods] = useState(softwareEngineeringMethods);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedClaim, setSelectedClaim] = useState('');

    useEffect(() => {
        // Update filtered methods whenever the softwareEngineeringMethods change
        setFilteredMethods(softwareEngineeringMethods);
    }, []);

    const handleInputChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchTerm(query);

        const filteredMethods = softwareEngineeringMethods.filter(method =>
            method.toLowerCase().includes(query)
        );

        setFilteredMethods(filteredMethods);
    };

    /*
    * Dropdown:
    * When a method is clicked, update the search term and hide the dropdown
    */
    const handleDropdownItemClick = (method) => {
        console.log('Method clicked:', method);
        setSearchTerm(method);
        setIsDropdownVisible(false);
    };

    const handleSearch = () => {
        // Pass the search term to the parent component
        onSearch(searchTerm);
    };

    const handleClaimChange = (e) => {
        setSelectedClaim(e.target.value);
    };


    return (
        <>
            <div className={styles.outerContainer}>
                {/*Search Selection*/}
                <div className={styles.searchContainer}>
                    <a className={styles.h2}>Search a Claim:</a>

                    <a className={styles.h3}>Select a Method:</a>
                    <Select className={styles.select} options={methodsMap} onChange={opt => console.log(opt.label, opt.value)} />
                    <a className={styles.h3}>Select a Claim:</a>
                    <Select className={styles.select} options={claimsMap} onChange={opt => console.log(opt.label, opt.value)} />




                    {/* Dropdown*/}
                    {isDropdownVisible && (
                        <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
                            {filteredMethods.map((method, index) => (
                                <div
                                    key={index}
                                    className={styles.dropdownItem}
                                    onClick={() => handleDropdownItemClick(method)}
                                >
                                    {method}
                                </div>
                            ))}
                        </div>
                    )}

                    {/*Button Search*/}
                    <button className={styles.searchButton} onClick={handleSearch}>
                        Search
                    </button>
                </div>

            </div>
        </>
    );
}
