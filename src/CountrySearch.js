import React, { useState, useEffect } from "react";

const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="country-grid">
        {filteredCountries.map((country) => (
          <div key={country.cca3} className="countryCard">
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <h2>{country.name.common}</h2>
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySearch;
