import React, { useState } from 'react';
import { StyledSearchBar } from './styled/SearchBar.styled';
import { StyledInput } from './styled/Input.styled';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ setInput, resetWeatherData }) => {
    const [searchInput, setSearchInput] = useState('');
    const [showClearIcon, setShowClearIcon] = useState(false);

    const inputHandler = (event) => {
        setSearchInput(event.target.value);
        setShowClearIcon(event.target.value !== ''); // Show icon when there is input
    };

    const clearInput = () => {
        setSearchInput('');
        setShowClearIcon(false); // Hide icon after clearing input
        resetWeatherData(); // Call the resetWeatherData callback to reset weatherData and weatherDetails
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('Enter key pressed. Value:', searchInput);
            setInput(searchInput);
            setSearchInput(searchInput);
            setShowClearIcon(true);
        }
    };

    return (
        <StyledSearchBar>
            <FaSearch />
            <StyledInput
                type="text"
                placeholder="Search..."
                onChange={inputHandler}
                value={searchInput}
                onKeyDown={handleEnterKeyPress}
            />
            {showClearIcon && <FaTimes onClick={clearInput} />}
        </StyledSearchBar>
    );
};

export default SearchBar;
