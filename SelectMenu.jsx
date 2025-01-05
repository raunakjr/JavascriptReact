import React from "react";

export default function SelectMenu() {
  return (
    <>
      <select class="Filter-by-region">
        <option value="Africa" hidden>
          Filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Ocenia">Ocenia</option>
      </select>
    </>
  );
}
