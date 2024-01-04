import React, { useState } from 'react';
import { StyledSearchBar } from './styled/SearchBar.styled';
import { StyledInput } from './styled/Input.styled';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ setInput }) => {
    const [searchInput, setSearchInput] = useState('');

    const inputHandler = (event) => {
        setSearchInput(event.target.value);
    };

    const clearInput = () => {
        setSearchInput('');
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('Enter key pressed. Value:', searchInput);
            setInput(searchInput);
            setSearchInput('');
        }
    };

    console.log('Rendering SearchBar with input:', searchInput);

    return (
        <StyledSearchBar>
            <FaSearch />
            <StyledInput
                className='DefaultInput'
                type="search"
                placeholder="Search..."
                onChange={inputHandler}
                value={searchInput}
                onKeyDown={handleEnterKeyPress}
            />
            {searchInput && <FaTimes onClick={clearInput} />}
        </StyledSearchBar>
    );
};

export default SearchBar;
