import React from "react";
import Searchbar from "./Searchbar.jsx";
import SelectMenu from "./SelectMenu.jsx";
import CountriesContainer from "./CountriesContainer.jsx";
import React, { useState } from "react";
export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <CountriesContainer query={query} />
    </main>
  );
}
