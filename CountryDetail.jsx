import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CountryDetail() {
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch main country details
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        return res.json();
      })
      .then((response) => {
        const data = Array.isArray(response) ? response[0] : null;
        if (data) {
          setCountryData({
            name: data.name.common,
            nativeName: data.name.nativeName
              ? Object.values(data.name.nativeName)[0].common
              : "N/A",
            population: data.population,
            region: data.region,
            subregion: data.subregion,
            capital: data.capital || ["N/A"],
            flag: data.flags?.svg || "",
            tld: data.tld || [],
            languages: data.languages
              ? Object.values(data.languages).join(", ")
              : "N/A",
            currencies: data.currencies
              ? Object.values(data.currencies)
                  .map((currency) => currency.name)
                  .join(", ")
              : "N/A",
            borders: data.borders || [],
          });

          // Fetch border country names
          if (data.borders) {
            Promise.all(
              data.borders.map((code) =>
                fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                  .then((res) => res.json())
                  .then((borderData) => borderData[0]?.name?.common || code)
              )
            ).then(setBorderCountries);
          }
        }
      })
      .catch((err) => setError(err.message));
  }, [countryName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return countryData === null ? (
    <div>Loading...</div>
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                {countryData.nativeName}
              </p>
              <p>
                <b>Population: </b>
                {countryData.population.toLocaleString("en-IN")}
              </p>
              <p>
                <b>Region: </b>
                {countryData.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {countryData.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {countryData.capital.join(", ")}
              </p>
              <p>
                <b>Top Level Domain: </b>
                {countryData.tld.join(", ")}
              </p>
              <p>
                <b>Currencies: </b>
                {countryData.currencies}
              </p>
              <p>
                <b>Languages: </b>
                {countryData.languages}
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {borderCountries.length > 0 ? (
                borderCountries.map((name) => (
                  <Link key={name} to={`/${name}`} style={{ margin: "0 5px" }}>
                    {name}
                  </Link>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
