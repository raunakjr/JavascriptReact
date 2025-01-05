import React from "react";
import { Link } from "react-router-dom";
export default function CountryCard({
  name,
  url,
  capital,
  region,
  population,
}) {
  return (
    <Link className="country-card" to={`/${name}`}>
      <img src={url} alt="flag" />
      <div class="card-text">
        <h3 class="country-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region:</b>
          {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </div>
    </Link>
  );
}
