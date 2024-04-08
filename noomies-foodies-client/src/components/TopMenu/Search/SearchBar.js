import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <form id="searchForm">
            <div className="search-container">
                <div className="input-container">
                    <img className="search-icon" src="/images/top-menu-icons/magnifying-glass.png" alt="Search Icon" />
                    <input className="search-bar" type="text" name="searchInput" id="searchInput" placeholder="Search" />
                </div>
            </div>
        </form>
    );
};



export default SearchBar;