import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
    return (
      <input 
      id = "searchBar"
      key="random1"
      value={keyword}
      placeholder={"search products"}
      onInput ={(e) => setKeyword(e.target.value)}
      />
    );
}

export default SearchBar