import React from "react";
import { useRef } from "react";
import "./Search.css";

function Search({ setSearchText }) {
  const searchValue = useRef("");

  const handleChange = () => {
    setSearchText(searchValue.current.value);
  };

  return (
    <div>
      <input
        className="searchbar"
        type="search"
        name="q"
        autoFocus
        ref={searchValue}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
