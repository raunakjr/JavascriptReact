import React, { useEffect, useState } from "react";

import CountryCard from "./CountryCard";

//

export default function CountriesContainer({ query }) {
  const [allCountriesData, SetData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => SetData(data));
  }, []);

  const CountryArray = allCountriesData
    .filter((e) => e.name.common.toLowerCase().includes(query))
    .map((e) => (
      <CountryCard
        name={e.name.common}
        url={e.flags.svg}
        capital={e.capital?.[0]}
        region={e.region}
        population={e.population.toLocaleString("en-IN")}
      />
    ));
  return (
    <div className="countries-container">
      <>{CountryArray}</>
    </div>
  );
}
