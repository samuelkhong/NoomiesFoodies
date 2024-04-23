import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // filtered words from the suggestions array
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const suggestions = [
        "Recipe 1",
        "Recipe 2",
        "Recipe 3",
        // Add more recipe names as needed
    ];


    // when search typed, then 
    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Filter suggestions based on search term
        const filtered = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredSuggestions(filtered);
    };
    // show suggestions when cursor only under selection 
        const handleFocus = () => {
            setShowSuggestions(true);
        };

        const handleBlur = () => {
            setShowSuggestions(false);
        };


    return (
        <form id="searchForm">
            <div className="search-container">
                <div className="input-container">
                    <img className="search-icon" src="/images/top-menu-icons/magnifying-glass.png" alt="Search Icon" />
                    <input 
                        className="search-bar" 
                        type="text" 
                        name="searchInput" 
                        id="searchInput" 
                        placeholder="Search" 
                        value={searchTerm} 
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
 
                    />
                </div>

            </div>
        </form>
    );
};



export default SearchBar;