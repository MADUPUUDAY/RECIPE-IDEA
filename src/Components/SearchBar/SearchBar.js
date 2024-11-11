import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query); // Trigger search when button is clicked
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for recipes..."
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
