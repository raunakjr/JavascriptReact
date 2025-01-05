import React from "react";

export default function Searchbar({ setQuery }) {
  return (
    <>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={(e) => {
            const lowerCaseValue = e.target.value.toLowerCase();
            setQuery(lowerCaseValue);
          }}
          type="text"
          name=""
          id=""
          placeholder="Search for a country..."
        />
      </div>
    </>
  );
}
